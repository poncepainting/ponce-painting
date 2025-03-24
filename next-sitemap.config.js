// Import the shouldExcludeFromIndexing function
// Using require since this is a CommonJS module
const path = require('path');
const fs = require('fs');

// Function to load the paths that should be excluded from indexing
// We need to dynamically import the TypeScript module in a CommonJS environment
const getNonIndexedPaths = () => {
  try {
    // Try to read the seo.js file from the build directory
    // This would work after the next build has transpiled the TypeScript files
    const seoConfigPath = path.resolve(process.cwd(), '.next/server/chunks/config/seo.js');
    
    if (fs.existsSync(seoConfigPath)) {
      const seoConfig = require(seoConfigPath);
      return seoConfig.nonIndexedPaths || [];
    }
  } catch (error) {
    console.warn('Could not load the nonIndexedPaths, falling back to default exclusions');
  }
  
  // Default exclusions if the file can't be loaded
  return [
    '/login',
    '/signup',
    '/register',
    '/thank-you',
    '/confirmation',
    '/admin',
    '/admin/*',
    '/preview',
    '/preview/*',
    '/api/*',
    '/404',
    '/500',
  ];
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://yourbusiness.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      // Add the dynamically generated server-side sitemap
      `${process.env.SITE_URL || 'https://yourbusiness.com'}/api/sitemap`,
    ],
  },
  // Exclude paths that should not be indexed
  exclude: [
    ...getNonIndexedPaths(),
    '/admin/*',
    '/private/*',
    '/api/*',
    '/server-sitemap.xml',
  ],
  // Generate additional sitemaps for dynamic routes
  generateIndexSitemap: true,
  outDir: 'public',
  // Transform the default config for special cases
  transform: async (config, path) => {
    // Custom transformation based on path
    // For example, different change frequency and priority for different types of pages
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    if (path.startsWith('/blog/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Default transformation
    return {
      loc: path,
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date().toISOString(),
    };
  },
};
