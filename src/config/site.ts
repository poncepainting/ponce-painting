/**
 * Site configuration settings
 * Centralized management of site-wide constants and configuration
 */

import { IconName } from '@/components/icons';
import { navigationConfig } from './navigation';
import { ctaConfig } from './cta';
import { servicesConfig, testimonialsConfig, featuresConfig } from './content';

// Types for better type safety
export type SocialPlatform = Extract<IconName, 'facebook' | 'twitter' | 'instagram' | 'linkedin'>;

export type ContactInfo = {
  email: string;
  phone: string;
  address: string;
};

export type BusinessHours = {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
};

export type SiteMetadata = {
  title: string;
  description: string;
  keywords: string[];
  authors: { name: string }[];
  creator: string;
  ogImage: string;
  openGraph: {
    type: string;
    locale: string;
    url: string;
    siteName: string;
    title: string;
    description: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
    creator: string;
  };
  icons: {
    icon: string;
    shortcut: string;
    apple: string;
  };
  manifest: string;
};

// Re-export types and config from navigation
export { navigationConfig };
export type { NavLink, FooterNavSection } from './navigation';

// Re-export types and config from CTA
export { ctaConfig };
export type { CallToAction } from './cta';

// Re-export types and config from content
export { servicesConfig, testimonialsConfig, featuresConfig };
export type { Service, Testimonial, Feature, ServiceFeature } from './content';

// Site configuration
export const siteConfig = {
  // Basic site info
  name: 'Ponce Painting',
  description:
    "Transform your space with Lake Charles' top-rated painting service. Delivering flawless finishes, exceptional craftsmanship, and 5-star customer satisfaction since 2010.",
  url: 'https://ponce-painting.com',
  ogImage: 'https://ponce-painting.com/og.jpg',

  // Contact information
  contact: {
    email: 'info@ponce-painting.com',
    phone: '337-304-7936',
    address: 'Lake Charles, LA',
  } satisfies ContactInfo,

  // Social media
  links: {
    facebook: 'https://facebook.com/poncepainting',
    instagram: 'https://instagram.com/poncepainting',
    linkedin: 'https://linkedin.com/company/poncepainting',
    twitter: 'https://twitter.com/poncepainting',
  },

  // Business hours
  businessHours: {
    monday: '8:00 AM - 5:00 PM',
    tuesday: '8:00 AM - 5:00 PM',
    wednesday: '8:00 AM - 5:00 PM',
    thursday: '8:00 AM - 5:00 PM',
    friday: '8:00 AM - 5:00 PM',
    saturday: 'Closed',
    sunday: 'Closed',
  } satisfies BusinessHours,

  // Reference to services, testimonials, and features
  services: servicesConfig,
  testimonials: testimonialsConfig,
  features: featuresConfig,

  // Default metadata
  defaultMetadata: {
    title: 'Ponce Painting | Professional Painting Services in Lake Charles, LA',
    description:
      "Transform your space with Lake Charles' top-rated painting service. Delivering flawless finishes, exceptional craftsmanship, and 5-star customer satisfaction since 2010.",
    keywords: [
      'Lake Charles painting contractor',
      'professional painters Lake Charles',
      'residential painting Lake Charles',
      'commercial painting services Louisiana',
      'exterior painting specialists',
      'interior house painting',
      'specialty paint finishes',
      'painting company near me',
      'best painters in Lake Charles',
      'affordable painting services',
      'Southwest Louisiana painters',
      'cabinet refinishing Lake Charles',
      'eco-friendly painting services',
      'local painting company Lake Charles',
      'house painters Lake Charles LA',
      'commercial painting contractors',
      'faux finishing Lake Charles',
      'decorative paint techniques',
      'office painting services',
      'free painting estimates Lake Charles',
    ],
    authors: [{ name: 'Ponce Painting' }],
    creator: 'Ponce Painting',
    ogImage: 'https://ponce-painting.com/og.jpg',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://ponce-painting.com',
      siteName: 'Ponce Painting',
      title: 'Ponce Painting | Professional Painting Services in Lake Charles, LA',
      description:
        "Transform your space with Lake Charles' top-rated painting service. Delivering flawless finishes, exceptional craftsmanship, and 5-star customer satisfaction since 2010.",
      images: [
        {
          url: 'https://ponce-painting.com/og.jpg',
          width: 1200,
          height: 630,
          alt: 'Ponce Painting - Professional Painting Services',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Ponce Painting | Professional Painting Services in Lake Charles, LA',
      description:
        "Transform your space with Lake Charles' top-rated painting service. Delivering flawless finishes, exceptional craftsmanship, and 5-star customer satisfaction since 2010.",
      images: ['https://ponce-painting.com/og.jpg'],
      creator: '@poncepainting',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  } satisfies SiteMetadata,

  // Additional site-specific properties
  serviceAreas: ['Lake Charles', 'Sulphur', 'Iowa', 'Moss Bluff', 'Vinton', 'Westlake'],
};
