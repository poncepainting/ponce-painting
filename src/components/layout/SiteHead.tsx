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

      {/* Jakarta Sans font - removing Inter font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
        media="print"
        onLoad={() => {
          const element = document.querySelector('link[href*="fonts.googleapis.com"]');
          if (element) (element as HTMLLinkElement).media = 'all';
        }}
      />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

      {/* Preload critical fonts - correct path for Plus Jakarta Sans */}
      <link
        rel="preload"
        href="/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2"
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
