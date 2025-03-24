import { getSiteUrl } from './src/utils';

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: getSiteUrl(),
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  exclude: [
    '/api/*',
    '/admin/*',
    '/private/*',
    '/login',
    '/signup',
    '/register',
    '/thank-you',
    '/confirmation',
    '/preview',
    '/preview/*',
    '/404',
    '/500',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

export default config;
