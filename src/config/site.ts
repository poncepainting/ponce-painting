/**
 * Site configuration settings
 * Centralized management of site-wide constants and configuration
 */

import { IconName } from './icons';

// Type for social media platforms that matches available icon names
export type SocialPlatform = 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'houzz';

export const siteConfig = {
  // Basic site info
  name: 'Ponce Painting',
  description: 'Professional painting services in Lake Charles and Southwest Louisiana since 2010. Bringing color to your life with quality craftsmanship and meticulous attention to detail.',
  url: 'https://ponce-painting.com',
  ogImage: 'https://ponce-painting.com/og.jpg',

  // Contact information
  contact: {
    email: 'info@poncepainting.com',
    phone: '337-304-7936',
    address: '123 Pine Street, Lake Charles, LA 70601',
  },

  // Social media
  links: {
    facebook: 'https://facebook.com/poncepainting',
    instagram: 'https://instagram.com/poncepainting',
    linkedin: 'https://linkedin.com/company/poncepainting',
    twitter: 'https://twitter.com/poncepainting',
    houzz: 'https://houzz.com/pro/poncepainting',
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
      title: 'Residential Painting',
      description: 'Transform your home with personalized color consultations and flawless finishes.',
      icon: 'home',
      features: [
        'Interior Painting',
        'Exterior Painting',
        'Specialty Finishes',
      ],
    },
    {
      title: 'Commercial Painting',
      description: 'Revitalize your business space with professional painting services.',
      icon: 'building',
      features: [
        'Office Painting',
        'Retail Painting',
        'Industrial Painting',
      ],
    },
    {
      title: 'Specialty Finishes',
      description: 'Add unique character to your space with custom textures and decorative finishes.',
      icon: 'palette',
      features: [
        'Custom Textures',
        'Decorative Finishes',
        'Faux Finishes',
      ],
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Ponce Painting transformed our home with their exceptional attention to detail and professional service.',
      image: '/testimonials/sarah.jpg',
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'Their commercial painting services helped us create a welcoming environment for our customers.',
      image: '/testimonials/michael.jpg',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      content: 'The team\'s reliability and quality workmanship exceeded our expectations.',
      image: '/testimonials/emily.jpg',
    },
  ],

  // Site features section
  features: [
    {
      title: 'Quality Craftsmanship',
      description: 'We use top-quality, eco-friendly paints and techniques that stand the test of time.',
      icon: 'check-circle',
    },
    {
      title: 'Meticulous Attention',
      description: 'Every detail—from proper prep to thorough cleanup—is managed to deliver a flawless finish.',
      icon: 'eye',
    },
    {
      title: 'Clear Communication',
      description: 'We keep you informed throughout the project, so you always know how and when things will get done.',
      icon: 'message-square',
    },
    {
      title: 'Community Focus',
      description: 'As your neighbors, we\'re dedicated to enhancing the look and value of our local community.',
      icon: 'users',
    },
  ],

  // Default metadata
  defaultMetadata: {
    title: {
      default: 'Ponce Painting - Professional Painting Services in Lake Charles',
      template: '%s | Ponce Painting',
    },
    description: 'Professional painting services in Lake Charles and Southwest Louisiana since 2010. Bringing color to your life with quality craftsmanship and meticulous attention to detail.',
    keywords: [
      'painting services in Lake Charles',
      'professional painters',
      'residential painting services',
      'exterior painting',
      'interior painting services',
      'skilled painters',
      'quality craftsmanship',
    ],
    authors: [{ name: 'Ponce Painting' }],
    creator: 'Ponce Painting',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://ponce-painting.com',
      siteName: 'Ponce Painting',
      title: 'Ponce Painting - Professional Painting Services in Lake Charles',
      description: 'Professional painting services in Lake Charles and Southwest Louisiana since 2010. Bringing color to your life with quality craftsmanship and meticulous attention to detail.',
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
      title: 'Ponce Painting - Professional Painting Services in Lake Charles',
      description: 'Professional painting services in Lake Charles and Southwest Louisiana since 2010. Bringing color to your life with quality craftsmanship and meticulous attention to detail.',
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
        { label: 'Service One', href: '/services/service1' },
        { label: 'Service Two', href: '/services/service2' },
        { label: 'Service Three', href: '/services/service3' },
        { label: 'All Services', href: '/services' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'Accessibility', href: '/accessibility' },
      ],
    },
  ],
};

// Call to action sections
export const ctaConfig = {
  primary: {
    title: 'Ready to work with us?',
    description: 'Contact us today for a free consultation and quote.',
    buttonText: 'Get in Touch',
    buttonLink: '/contact',
  },
  secondary: {
    title: 'Want to see our work?',
    description: 'Check out our portfolio of completed projects.',
    buttonText: 'View Portfolio',
    buttonLink: '/gallery',
  },
};
