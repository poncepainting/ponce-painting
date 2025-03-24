import { siteConfig } from './src/config/site.js';
import { getSiteUrl } from './src/utils/themeUtils.js';
import path from 'path';
import fs from 'fs';

const siteUrl = getSiteUrl();

// Function to load the paths that should be excluded from indexing
const getNonIndexedPaths = async () => {
  try {
    const seoConfigPath = path.resolve(process.cwd(), '.next/server/chunks/config/seo.js');
    
    if (fs.existsSync(seoConfigPath)) {
      // Use dynamic import for ESM compatibility
      const seoConfig = await import(seoConfigPath);
      return seoConfig.nonIndexedPaths || [];
    }
  } catch (error) {
    console.warn('Could not load the nonIndexedPaths, falling back to default exclusions');
  }
  
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
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
    ],
  },
  exclude: [
    ...getNonIndexedPaths(),
    '/admin/*',
    '/private/*',
    '/api/*',
    '/server-sitemap.xml',
  ],
  generateIndexSitemap: true,
  outDir: 'public',
  transform: async (config, path) => {
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

    return {
      loc: path,
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date().toISOString(),
    };
  },
};
