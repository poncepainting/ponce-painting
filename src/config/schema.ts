/**
 * Schema.org JSON-LD markup generator
 * Generates structured data for SEO based on site configuration
 */

import { siteConfig } from './site';

/**
 * Generate Organization schema
 */
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/ponce-painting-logo-blue.png`,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.split(',')[0]?.trim(),
      addressLocality: siteConfig.contact.address.split(',')[1]?.trim(),
      addressRegion: siteConfig.contact.address.split(',')[2]?.trim()?.split(' ')[0],
      postalCode: siteConfig.contact.address.split(',')[2]?.trim()?.split(' ')[1],
      addressCountry: 'US',
    },
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.twitter,
      siteConfig.links.instagram,
      siteConfig.links.linkedin,
    ],
    openingHoursSpecification: Object.entries(siteConfig.businessHours)
      .filter(([_, hours]) => hours !== 'Closed')
      .map(([day, hours]) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: `https://schema.org/${day.charAt(0).toUpperCase() + day.slice(1)}`,
        opens: hours.split('-')[0]?.trim(),
        closes: hours.split('-')[1]?.trim(),
      })),
  };
};

/**
 * Generate LocalBusiness schema
 */
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.contact.address.split(',')[0]?.trim(),
      addressLocality: siteConfig.contact.address.split(',')[1]?.trim(),
      addressRegion: siteConfig.contact.address.split(',')[2]?.trim()?.split(' ')[0],
      postalCode: siteConfig.contact.address.split(',')[2]?.trim()?.split(' ')[1],
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.2266, // Lake Charles coordinates
      longitude: -93.2174,
    },
    openingHoursSpecification: Object.entries(siteConfig.businessHours)
      .filter(([_, hours]) => hours !== 'Closed')
      .map(([day, hours]) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: `https://schema.org/${day.charAt(0).toUpperCase() + day.slice(1)}`,
        opens: hours.split('-')[0]?.trim(),
        closes: hours.split('-')[1]?.trim(),
      })),
    priceRange: '$$',
    image: siteConfig.defaultMetadata.openGraph.images[0].url,
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.twitter,
      siteConfig.links.instagram,
      siteConfig.links.linkedin,
    ],
    areaServed: siteConfig.serviceAreas.map(area => ({
      '@type': 'City',
      name: area,
      '@id': `https://en.wikipedia.org/wiki/${area.replace(' ', '_')},_Louisiana`,
    })),
    servesCuisine: 'Painting and Decorating',
    slogan: "Transform your space with Lake Charles' top-rated painting service",
    paymentAccepted: 'Cash, Credit Card, Debit Card, Check',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Painting Services',
      itemListElement: siteConfig.services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
      })),
    },
    review: siteConfig.testimonials.slice(0, 5).map(testimonial => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: testimonial.rating,
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: testimonial.name,
      },
      reviewBody: testimonial.content,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: siteConfig.testimonials.length.toString(),
    },
  };
};

/**
 * Generate WebSite schema
 */
export const generateWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
};

/**
 * Generate Service schema for each service
 */
export const generateServicesSchema = () => {
  return siteConfig.services.map(service => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: `${siteConfig.url}/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`,
    image: service.imageUrl.startsWith('/')
      ? `${siteConfig.url}${service.imageUrl}`
      : `${siteConfig.url}/${service.imageUrl}`,
  }));
};

/**
 * Generate the complete schema object for a page
 * @param type Type of page to generate schema for ('home', 'about', 'service', etc.)
 * @param additionalData Any additional data needed for the schema
 */
export const generatePageSchema = (
  type: 'home' | 'about' | 'services' | 'contact' | 'service' | 'gallery',
  additionalData?: Record<string, unknown>
) => {
  const baseSchemas = [generateWebsiteSchema(), generateOrganizationSchema()];

  switch (type) {
    case 'home':
      return [...baseSchemas, generateLocalBusinessSchema()];
    case 'services':
      return [...baseSchemas, ...generateServicesSchema()];
    case 'gallery':
      return [
        ...baseSchemas,
        {
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Gallery | ' + siteConfig.name,
          description: 'Portfolio and examples of our work',
          isPartOf: {
            '@type': 'WebSite',
            name: siteConfig.name,
            url: siteConfig.url,
          },
          url: `${siteConfig.url}/gallery`,
        },
      ];
    case 'service':
      if (additionalData?.serviceId) {
        const service = siteConfig.services.find(
          s => s.title.toLowerCase().replace(/\s+/g, '-') === additionalData.serviceId
        );
        if (service) {
          return [
            ...baseSchemas,
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: service.title,
              description: service.description,
              provider: {
                '@type': 'Organization',
                name: siteConfig.name,
                url: siteConfig.url,
              },
              url: `${siteConfig.url}/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`,
              image: service.imageUrl.startsWith('/')
                ? `${siteConfig.url}${service.imageUrl}`
                : `${siteConfig.url}/${service.imageUrl}`,
            },
          ];
        }
      }
      return baseSchemas;
    default:
      return baseSchemas;
  }
};
