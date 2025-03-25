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
