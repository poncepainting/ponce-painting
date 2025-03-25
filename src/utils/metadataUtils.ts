import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

/**
 * Generates the base metadata for the site
 * This centralizes metadata configuration
 * @returns Metadata object for Next.js
 */
export const generateBaseMetadata = (): Metadata => {
  return {
    title: {
      template: `%s | ${siteConfig.name}`,
      default:
        typeof siteConfig.defaultMetadata.title === 'string'
          ? siteConfig.defaultMetadata.title
          : `${siteConfig.name} - Professional Painting Services`,
    },
    description: siteConfig.defaultMetadata.description,
    keywords: siteConfig.defaultMetadata.keywords,
    manifest: '/manifest.json',
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      title: siteConfig.name,
      description: siteConfig.defaultMetadata.description,
      images: [
        {
          url: siteConfig.defaultMetadata.openGraph.images[0].url,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name,
      description: siteConfig.defaultMetadata.description,
      images: [siteConfig.defaultMetadata.openGraph.images[0].url],
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/images/ponce-painting-logo-blue.png', type: 'image/png' },
      ],
      apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
};
