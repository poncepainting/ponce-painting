import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

// Get the base URL from environment or default to local
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ponce-painting.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Add all static routes with their priorities and change frequencies
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Add dynamic routes for services if available in siteConfig
  if (siteConfig.services) {
    const serviceRoutes = siteConfig.services.map(service => ({
      url: `${baseUrl}/services/${service.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

    routes.push(...serviceRoutes);
  }

  // Add service area routes if available
  if (siteConfig.serviceAreas) {
    const areaRoutes = siteConfig.serviceAreas.map(area => ({
      url: `${baseUrl}/service-areas/${area.toLowerCase().replace(/\s+/g, '-')}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));

    routes.push(...areaRoutes);
  }

  return routes;
}
