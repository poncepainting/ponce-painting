'use client';

import React from 'react';
import SEO, { SEOProps } from '@/components/SEO';
import SchemaMarkup from '@/components/SchemaMarkup';
import { siteConfig } from '@/config/site';
import { generatePageSchema } from '@/config/schema';

interface PageSEOProps extends SEOProps {
  schemaType?: 'home' | 'about' | 'services' | 'contact' | 'service' | 'gallery' | 'other';
  schemaData?: any;
  additionalSchemas?: any[];
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
    let baseSchemas = schemaType !== 'other' 
      ? generatePageSchema(schemaType as any, schemaData)
      : []; 
    
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