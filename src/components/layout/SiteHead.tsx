import React from 'react';
import SchemaMarkup from '@/components/SchemaMarkup';

interface SiteHeadProps {
  schemas: Record<string, unknown>[];
}

/**
 * SiteHead component that handles the document head content
 * This provides better organization of the head structure
 */
const SiteHead: React.FC<SiteHeadProps> = ({ schemas }) => {
  return (
    <head>
      {/* Resource hints for performance optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <SchemaMarkup schemas={schemas} />
    </head>
  );
};

export default SiteHead;
