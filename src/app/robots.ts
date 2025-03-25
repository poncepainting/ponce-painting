import { MetadataRoute } from 'next';

// Get the base URL from environment or default to local
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ponce-painting.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/thank-you', '/preview/', '/private/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
