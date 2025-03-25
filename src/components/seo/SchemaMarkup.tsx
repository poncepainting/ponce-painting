'use client';

import React from 'react';

interface SchemaMarkupProps {
  schemas: Record<string, unknown>[];
}

/**
 * Component that adds JSON-LD schema markup to the page
 *
 * @param schemas Array of schema.org structured data objects
 */
const SchemaMarkup = ({ schemas }: SchemaMarkupProps) => {
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
