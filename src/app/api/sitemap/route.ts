import { getServerSideSitemap, ISitemapField } from 'next-sitemap';
import { shouldExcludeFromIndexing } from '@/config/seo';
import { siteConfig } from '@/config/site';

export async function GET() {
  // Base URL from environment or default
  const baseUrl = process.env.SITE_URL || siteConfig.url;

  // Example: In a real application, you would fetch data from a database or API
  // This is where you would dynamically generate your URLs based on content

  // Example of static routes - replace with your dynamic data fetching logic
  const staticPages = [
    { url: '/', lastModified: new Date().toISOString() },
    { url: '/about', lastModified: new Date().toISOString() },
    { url: '/services', lastModified: new Date().toISOString() },
    { url: '/contact', lastModified: new Date().toISOString() },
  ];

  // Example of dynamic routes - in a real app, this would come from your database
  /* 
  const posts = await fetchBlogPostsFromDatabase();
  const dynamicPages = posts.map(post => ({
    url: `/blog/${post.slug}`,
    lastModified: post.updatedAt,
  }));
  */

  // Filter out pages that should not be indexed
  const indexablePages = staticPages.filter(page => !shouldExcludeFromIndexing(page.url));

  // Combine all routes
  const fields: ISitemapField[] = [
    ...indexablePages,
    // ...dynamicPages.filter(page => !shouldExcludeFromIndexing(page.url)), // Uncomment when you implement dynamic content
  ].map(page => ({
    loc: `${baseUrl}${page.url}`,
    lastmod: page.lastModified,
    // Optionally add changefreq and priority
    changefreq: 'daily',
    priority: 0.7,
  }));

  // Return the sitemap XML
  return getServerSideSitemap(fields);
}
