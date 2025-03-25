import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { siteConfig } from '../src/config/site.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateDynamicSitemap = () => {
  const baseUrl = siteConfig.url;
  const dynamicRoutes = [];

  // Add service pages
  siteConfig.services.forEach(service => {
    dynamicRoutes.push({
      loc: `${baseUrl}/services/${service.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    });
  });

  // Add service area pages
  siteConfig.serviceAreas.forEach(area => {
    dynamicRoutes.push({
      loc: `${baseUrl}/service-areas/${area.toLowerCase().replace(/\s+/g, '-')}`,
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    });
  });

  // Write the dynamic routes to a JSON file
  fs.writeFileSync(
    path.join(process.cwd(), 'public', 'dynamic-sitemap.json'),
    JSON.stringify(dynamicRoutes, null, 2)
  );
};

generateDynamicSitemap();
