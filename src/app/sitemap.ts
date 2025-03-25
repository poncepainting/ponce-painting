import { MetadataRoute } from 'next';

// Get the base URL from environment or default to local
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ponce-painting.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Only include routes that should be indexed by search engines
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
    // Note: Legal pages are included with low priority
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

  // Excluded pages from sitemap:
  // - /thank-you (post-conversion page)
  // - /theme-demo (development page)
  // - /example (development page)
  // - /button-examples (development page)
  // - /cookies (utility page)
  // - /accessibility (utility page may be included if important for your audience)
  // - /disclaimer (utility page)

  return routes;
}
