/**
 * Call to Action (CTA) configuration settings
 * Centralized management of CTA-related constants
 */

// CTA type definition
export type CallToAction = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

// Call to action sections
export const ctaConfig = {
  primary: {
    title: 'Ready to transform your space?',
    description: 'Contact us today for a free, no-obligation consultation and detailed quote.',
    buttonText: 'Get Your Free Quote',
    buttonLink: '/contact',
  } satisfies CallToAction,
  secondary: {
    title: 'See our exceptional results',
    description: 'Browse our portfolio of stunning transformations and completed projects.',
    buttonText: 'View Our Gallery',
    buttonLink: '/gallery',
  } satisfies CallToAction,
};
