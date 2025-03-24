'use client';

import { useMemo } from 'react';

interface SchemaMarkupProps {
  schemas: any[];
}

/**
 * Component that adds JSON-LD schema markup to the page
 * 
 * @param schemas Array of schema.org structured data objects
 */
const SchemaMarkup = ({ schemas }: SchemaMarkupProps) => {
  // Memoize to prevent unnecessary re-renders
  const jsonLdString = useMemo(() => {
    return schemas.map(schema => JSON.stringify(schema)).join('');
  }, [schemas]);

  if (!schemas.length) return null;

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default SchemaMarkup; 