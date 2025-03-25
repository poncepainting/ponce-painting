import React from 'react';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

interface SiteHeadProps {
  schemas: Record<string, unknown>[];
}

/**
 * SiteHead component that handles the document head content
 * This provides better organization of the head structure
 */
const SiteHead: React.FC<SiteHeadProps> = ({ schemas }) => {
  const _router = useRouter();

  return (
    <Head>
      {/* Resource hints for performance optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
        media="print"
        onLoad={() => {
          const element = document.querySelector('link[href*="fonts.googleapis.com"]');
          if (element) (element as HTMLLinkElement).media = 'all';
        }}
      />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="/_next/static/media/plus-jakarta-sans-latin-wght.xxxxx.woff2" // Update with actual font path
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Preload hero image for homepage */}
      <link
        rel="preload"
        href="/images/painter-in-front-of-home.jpg"
        as="image"
        media="(min-width: 768px)"
      />

      <SchemaMarkup schemas={schemas} />
    </Head>
  );
};

export default SiteHead;
