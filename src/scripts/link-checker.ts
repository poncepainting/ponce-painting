import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import chalk from 'chalk';

/**
 * Link checker utility to detect broken internal links
 * Scans project files for references to non-existent pages
 */

// Paths we want to check for links
const SOURCE_PATHS = ['./src/**/*.{tsx,jsx,ts,js,mdx}'];

// Paths to exclude from checking
const EXCLUDE_PATHS = ['./node_modules/**', './logs/**', './.next/**', './public/**'];

// Regex patterns for internal links - adjust based on your project's link patterns
const LINK_PATTERNS = [
  /<Link\s+href=["']([^"']+)["']/g, // Next.js Link components
  /<a\s+href=["']([^"']+)["']/g, // Regular HTML links
  /href=["']([^"']+)["']/g, // General href attributes
  /url\(["']([^"']+)["']\)/g, // CSS url() references
  /from\s+["']([^"']+)["']/g, // JS/TS imports
  /import\s+["']([^"']+)["']/g, // JS/TS imports
];

interface LinkInfo {
  url: string;
  sourceFile: string;
  line: number;
  column: number;
}

interface LinkCheckReport {
  brokenLinks: LinkInfo[];
  checkedFiles: number;
  foundLinks: number;
}

/**
 * Checks if a link is an external URL
 */
function isExternalLink(url: string): boolean {
  return /^(https?:|\/\/|tel:|mailto:)/.test(url);
}

/**
 * Checks if a link is a route parameter link (dynamic route)
 */
function isDynamicRoute(url: string): boolean {
  return url.includes('[') && url.includes(']');
}

/**
 * Checks if a file exists at the specified path
 */
function fileExists(filePath: string): boolean {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    return false;
  }
}

/**
 * Normalize an internal link to a file path
 */
function normalizeInternalLink(url: string): string {
  // Remove query parameters and hash
  url = url.split('?')[0].split('#')[0];

  // Handle root links
  if (url === '/') {
    return './src/app/page.tsx';
  }

  // Handle absolute paths
  if (url.startsWith('/')) {
    return `./src/app${url === '/' ? '' : url}/page.tsx`;
  }

  // Handle relative paths with ./ or ../
  if (url.startsWith('./') || url.startsWith('../')) {
    return url;
  }

  // Handle other relative paths
  return `./${url}`;
}

/**
 * Extract links from a file
 */
function extractLinks(filePath: string): LinkInfo[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const links: LinkInfo[] = [];

  LINK_PATTERNS.forEach(pattern => {
    let match;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      pattern.lastIndex = 0; // Reset regex state

      while ((match = pattern.exec(line)) !== null) {
        const url = match[1];

        // Skip empty links
        if (!url.trim()) continue;

        // Skip data: URIs
        if (url.startsWith('data:')) continue;

        // Skip CSS variables
        if (url.startsWith('var(--')) continue;

        links.push({
          url,
          sourceFile: filePath,
          line: i + 1, // 1-based line number
          column: match.index + match[0].indexOf(url),
        });
      }
    }
  });

  return links;
}

/**
 * Check if an internal link is valid
 */
function isValidInternalLink(url: string): boolean {
  if (isDynamicRoute(url)) {
    // Dynamic routes are hard to validate statically, assume valid
    return true;
  }

  const normalizedPath = normalizeInternalLink(url);

  // Check exact file match
  if (fileExists(normalizedPath)) {
    return true;
  }

  // For links to directories, check if index page exists
  if (!normalizedPath.endsWith('.tsx') && !normalizedPath.endsWith('.jsx')) {
    const possiblePaths = [
      normalizedPath,
      `${normalizedPath}/page.tsx`,
      `${normalizedPath}/index.tsx`,
      `${normalizedPath}.tsx`,
      `${normalizedPath}/page.jsx`,
      `${normalizedPath}/index.jsx`,
      `${normalizedPath}.jsx`,
    ];

    return possiblePaths.some(fileExists);
  }

  return false;
}

/**
 * Find broken internal links in project files
 */
export async function checkLinks(): Promise<LinkCheckReport> {
  const report: LinkCheckReport = {
    brokenLinks: [],
    checkedFiles: 0,
    foundLinks: 0,
  };

  // Get all source files to check
  const filePatterns = SOURCE_PATHS.filter(pattern => !EXCLUDE_PATHS.includes(pattern));
  const files = await glob.glob(filePatterns, { ignore: EXCLUDE_PATHS });

  report.checkedFiles = files.length;

  // Process each file
  for (const file of files) {
    const links = extractLinks(file);
    report.foundLinks += links.length;

    // Check each link
    for (const link of links) {
      const { url } = link;

      // Skip external, asset, and special links
      if (
        isExternalLink(url) ||
        url.startsWith('#') ||
        url === '/' ||
        url.startsWith('/api/') ||
        url.startsWith('javascript:')
      ) {
        continue;
      }

      // Check if internal link is valid
      if (!isValidInternalLink(url)) {
        report.brokenLinks.push(link);
      }
    }
  }

  return report;
}

/**
 * Print link check report to console
 */
export function printLinkReport(report: LinkCheckReport): void {
  console.log(chalk.bold('\n📊 Link Check Report'));
  console.log(`🔍 Checked ${report.checkedFiles} files`);
  console.log(`🔗 Found ${report.foundLinks} links`);

  if (report.brokenLinks.length === 0) {
    console.log(chalk.green('✅ No broken links found!'));
    return;
  }

  console.log(chalk.red(`❌ Found ${report.brokenLinks.length} broken links:`));

  report.brokenLinks.forEach((link, index) => {
    console.log(chalk.red(`\n${index + 1}. Broken link: ${chalk.bold(link.url)}`));
    console.log(`   File: ${chalk.yellow(link.sourceFile)}`);
    console.log(`   Line: ${link.line}, Column: ${link.column}`);
  });

  console.log('\n');
}

/**
 * Run link checker
 */
export async function runLinkChecker(): Promise<void> {
  console.log(chalk.blue('\n🔍 Checking for broken links...'));
  const report = await checkLinks();
  printLinkReport(report);

  if (report.brokenLinks.length > 0) {
    process.exit(1); // Exit with error code
  }
}

// Run directly
runLinkChecker();
