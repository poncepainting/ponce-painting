/**
 * Site configuration settings
 * Centralized management of site-wide constants and configuration
 */

import { IconName } from './icons';

// Type for social media platforms that matches available icon names
export type SocialPlatform = 'facebook' | 'twitter' | 'instagram' | 'linkedin';

export const siteConfig = {
  // Basic site info
  name: 'Ponce Painting',
  description: 'Transform your space with Lake Charles\' top-rated painting service. Delivering flawless finishes, exceptional craftsmanship, and 5-star customer satisfaction since 2010.',
  url: 'https://ponce-painting.com',
  ogImage: 'https://ponce-painting.com/og.jpg',

  // Contact information
  contact: {
    email: 'info@ponce-painting.com',
    phone: '337-304-7936',
    address: '123 Pine Street, Lake Charles, LA 70601',
  },

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
  },

  // Main services offered
  services: [
    {
      id: 'residential',
      title: 'Residential Painting',
      description: 'Revitalize your Lake Charles home with premium interior and exterior painting services tailored to your unique style and preferences.',
      icon: 'home',
      imageUrl: '/images/services/residential-painting.jpg',
      features: [
        'Interior Wall & Ceiling Painting',
        'Exterior Siding & Trim Painting',
        'Cabinet Refinishing & Painting',
        'Deck & Fence Staining',
        'Color Consultation Services'
      ],
    },
    {
      id: 'commercial',
      title: 'Commercial Painting',
      description: 'Enhance your business image with professional commercial painting services that minimize disruption while maximizing visual impact.',
      icon: 'building',
      imageUrl: '/images/services/commercial-painting.jpg',
      features: [
        'Office & Retail Space Painting',
        'Restaurant & Hospitality Painting',
        'Industrial Facility Services',
        'Exterior Commercial Painting',
        'Low-VOC Commercial Solutions'
      ],
    },
    {
      id: 'specialty',
      title: 'Specialty Finishes',
      description: 'Elevate your space with custom decorative finishes that add character, texture, and unmatched visual interest to any room.',
      icon: 'palette',
      imageUrl: '/images/services/specialty-finishes.jpg',
      features: [
        'Venetian Plaster & Textured Finishes',
        'Faux Finishing Techniques',
        'Accent Wall Designs',
        'Metallic & Pearlescent Finishes',
        'Custom Stenciling & Patterns'
      ],
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: 'Sarah Johnson',
      role: 'Lake Charles Homeowner',
      content: 'Ponce Painting transformed our outdated living room into a stunning space we love showing off to family and friends. Their attention to detail and clean work process made the experience stress-free.',
      image: '/testimonials/sarah-johnson.jpg',
    },
    {
      name: 'Michael Chen',
      role: 'Restaurant Owner',
      content: 'As a restaurant owner, I needed painters who could work around our schedule with minimal disruption. Ponce Painting delivered on time, on budget, and the fresh look has our customers raving.',
      image: '/testimonials/michael-chen.jpg',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      content: 'Managing multiple properties requires reliable contractors. Ponce Painting has become our go-to for all painting needs. Their consistent quality, fair pricing, and professionalism are unmatched in Lake Charles.',
      image: '/testimonials/emma-wilson.jpg',
    },
  ],

  // Site features section
  features: [
    {
      title: 'Premium Quality Results',
      description: 'We use industry-leading, eco-friendly paints and professional techniques that ensure stunning, long-lasting finishes for your home or business.',
      icon: 'check-circle',
    },
    {
      title: 'Detail-Oriented Approach',
      description: 'From thorough preparation to meticulous application and complete cleanup, we ensure every project detail exceeds your expectations.',
      icon: 'eye',
    },
    {
      title: 'Transparent Communication',
      description: 'Experience stress-free project management with clear timelines, detailed estimates, and regular updates throughout your painting project.',
      icon: 'message-square',
    }
  ],

  // Default metadata
  defaultMetadata: {
    title: 'Ponce Painting | Professional Painting Services in Lake Charles, LA',
    description: 'Transform your space with Lake Charles\' top-rated painting service. Delivering flawless finishes, exceptional craftsmanship, and 5-star customer satisfaction since 2010.',
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
      'free painting estimates Lake Charles'
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
      description: 'Transform your space with Lake Charles\' top-rated painting service. Delivering flawless finishes, exceptional craftsmanship, and 5-star customer satisfaction since 2010.',
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
      description: 'Transform your space with Lake Charles\' top-rated painting service. Delivering flawless finishes, exceptional craftsmanship, and 5-star customer satisfaction since 2010.',
      images: ['https://ponce-painting.com/og.jpg'],
      creator: '@poncepainting',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  },

  // Additional site-specific properties
  serviceAreas: [
    'Lake Charles',
    'Sulphur',
    'Iowa',
    'Moss Bluff',
    'Vinton',
    'Westlake',
  ],
};

// Navigation configuration
export const navigationConfig = {
  mainNav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  footerNav: [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Residential Painting', href: '/services#residential' },
        { label: 'Commercial Painting', href: '/services#commercial' },
        { label: 'Specialty Finishes', href: '/services#specialty' },
        { label: 'All Services', href: '/services' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Sitemap', href: '/sitemap.xml' },
      ],
    },
  ],
};

// Call to action sections
export const ctaConfig = {
  primary: {
    title: 'Ready to transform your space?',
    description: 'Contact us today for a free, no-obligation consultation and detailed quote.',
    buttonText: 'Get Your Free Quote',
    buttonLink: '/contact',
  },
  secondary: {
    title: 'See our exceptional results',
    description: 'Browse our portfolio of stunning transformations and completed projects.',
    buttonText: 'View Our Gallery',
    buttonLink: '/gallery',
  },
};
