import { siteConfig } from './src/config/site';
import { getSiteUrl } from './src/utils/themeUtils';
import path from 'path';
import fs from 'fs';

const siteUrl = getSiteUrl();

// Simplified non-indexed paths that don't rely on dynamic imports
const nonIndexedPaths = [
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

// Define priority and changefreq for different types of pages
const pageConfigs = {
  home: {
    priority: 1.0,
    changefreq: 'daily',
  },
  services: {
    priority: 0.9,
    changefreq: 'weekly',
  },
  about: {
    priority: 0.8,
    changefreq: 'monthly',
  },
  contact: {
    priority: 0.8,
    changefreq: 'monthly',
  },
  gallery: {
    priority: 0.7,
    changefreq: 'weekly',
  },
  default: {
    priority: 0.5,
    changefreq: 'monthly',
  },
};

// Load dynamic routes if they exist
const loadDynamicRoutes = () => {
  try {
    const dynamicRoutesPath = path.join(process.cwd(), 'public', 'dynamic-sitemap.json');
    if (fs.existsSync(dynamicRoutesPath)) {
      return JSON.parse(fs.readFileSync(dynamicRoutesPath, 'utf8'));
    }
  } catch (error) {
    console.error('Error loading dynamic routes:', error);
  }
  return [];
};

/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
  exclude: [...nonIndexedPaths, '/admin/*', '/private/*', '/api/*', '/server-sitemap.xml'],
  generateIndexSitemap: true,
  outDir: 'public',
  transform: async (config, path) => {
    // Get the base path without query parameters
    const basePath = path.split('?')[0];
    
    // Determine the page type and its configuration
    let pageType = 'default';
    if (basePath === '/') pageType = 'home';
    else if (basePath.startsWith('/services')) pageType = 'services';
    else if (basePath.startsWith('/about')) pageType = 'about';
    else if (basePath.startsWith('/contact')) pageType = 'contact';
    else if (basePath.startsWith('/gallery')) pageType = 'gallery';

    const pageConfig = pageConfigs[pageType] || pageConfigs.default;

    return {
      loc: basePath,
      changefreq: pageConfig.changefreq,
      priority: pageConfig.priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    return loadDynamicRoutes();
  },
};
