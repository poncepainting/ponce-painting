'use client';

import React from 'react';
import SEO, { SEOProps } from '@/components/SEO';
import SchemaMarkup from '@/components/SchemaMarkup';
import { generatePageSchema } from '@/config/schema';

interface PageSEOProps extends SEOProps {
  schemaType?: 'home' | 'about' | 'services' | 'contact' | 'service' | 'gallery' | 'other';
  schemaData?: Record<string, unknown>;
  additionalSchemas?: Record<string, unknown>[];
}

/**
 * Standardized SEO component for pages that includes both meta tags and schema markup
 */
const PageSEO: React.FC<PageSEOProps> = ({
  schemaType = 'other',
  schemaData,
  additionalSchemas = [],
  ...seoProps
}) => {
  // Generate appropriate schemas based on page type
  const schemas = React.useMemo(() => {
    const baseSchemas = schemaType !== 'other' ? generatePageSchema(schemaType, schemaData) : [];

    return [...baseSchemas, ...additionalSchemas];
  }, [schemaType, schemaData, additionalSchemas]);

  return (
    <>
      <SEO {...seoProps} />
      <SchemaMarkup schemas={schemas} />
    </>
  );
};

export default PageSEO;
