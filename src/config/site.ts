/**
 * Site configuration settings
 * Centralized management of site-wide constants and configuration
 */

import { IconName } from './icons';

// Type for social media platforms that matches available icon names
export type SocialPlatform = 'facebook' | 'twitter' | 'instagram' | 'linkedin';

export const siteConfig = {
  // Basic site info
  name: 'Your Business Name',
  description: 'Providing exceptional services to your community since 2010',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourbusiness.com',

  // Contact information
  contact: {
    email: 'contact@yourbusiness.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business Street, City, State 12345',
  },

  // Social media
  social: {
    facebook: 'https://facebook.com/yourbusiness',
    twitter: 'https://twitter.com/yourbusiness',
    instagram: 'https://instagram.com/yourbusiness',
    linkedin: 'https://linkedin.com/company/yourbusiness',
  } as Record<SocialPlatform, string>,

  // Business hours
  businessHours: [
    { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ],

  // Main services offered
  services: [
    {
      id: 'service1',
      title: 'Service One',
      description: 'Detailed description of the first service you offer.',
      icon: 'check-circle' as IconName,
      imageUrl: '/images/services/service1.jpg',
    },
    {
      id: 'service2',
      title: 'Service Two',
      description: 'Detailed description of the second service you offer.',
      icon: 'clock' as IconName,
      imageUrl: '/images/services/service2.jpg',
    },
    {
      id: 'service3',
      title: 'Service Three',
      description: 'Detailed description of the third service you offer.',
      icon: 'users' as IconName,
      imageUrl: '/images/services/service3.jpg',
    },
  ],

  // Testimonials
  testimonials: [
    {
      id: 'testimonial1',
      quote: "This business provided exceptional service. I couldn't be happier with the results!",
      author: 'Jane Smith',
      title: 'Happy Customer',
      imageUrl: '/images/testimonials/jane.jpg',
    },
    {
      id: 'testimonial2',
      quote: 'Professional, timely, and high-quality work. Highly recommended!',
      author: 'John Doe',
      title: 'Repeat Client',
      imageUrl: '/images/testimonials/john.jpg',
    },
  ],

  // Site features section
  features: [
    {
      title: 'Quality Service',
      description:
        'We pride ourselves on delivering the highest quality service to all our customers.',
      icon: 'check-circle' as IconName,
    },
    {
      title: 'Fast Turnaround',
      description: 'We understand the value of your time and deliver our services promptly.',
      icon: 'clock' as IconName,
    },
    {
      title: 'Customer Focused',
      description:
        'Our customers are at the heart of everything we do. Your satisfaction is our priority.',
      icon: 'users' as IconName,
    },
  ],

  // Default metadata
  defaultMetadata: {
    title: 'Your Business Name | Professional Services',
    description: 'Professional services provider serving your community since 2010. We offer reliable, high-quality services with excellent customer support.',
    keywords: 'professional services, local business, quality service, customer service, business solutions, service provider',
    ogImage: '/images/og-image.jpg',
    canonical: 'https://yourbusiness.com',
    ogType: 'website',
    twitterCard: 'summary_large_image',
  },
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
