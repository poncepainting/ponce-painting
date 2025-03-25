import React from 'react';
import SchemaMarkup from '@/components/seo/SchemaMarkup';

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
      {/* Add schema markup */}
      <SchemaMarkup schemas={schemas} />
    </head>
  );
};

export default SiteHead;
