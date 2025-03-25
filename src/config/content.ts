/**
 * Content configuration settings
 * Centralized management of content-related data like services, testimonials, and features
 */

import { IconName } from '@/components/icons';

// Types for content data
export type ServiceFeature = string;

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  imageUrl: string;
  features: ServiceFeature[];
};

export type Testimonial = {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
};

export type Feature = {
  title: string;
  description: string;
  icon: IconName;
};

// Services configuration
export const servicesConfig = [
  {
    id: 'residential',
    title: 'Residential Painting',
    description:
      'Revitalize your Lake Charles home with premium interior and exterior painting services tailored to your unique style and preferences.',
    icon: 'home',
    imageUrl: '/images/exterior-residential-painting.jpg',
    features: [
      'Interior Wall & Ceiling Painting',
      'Exterior Siding & Trim Painting',
      'Cabinet Refinishing & Painting',
      'Deck & Fence Staining',
      'Color Consultation Services',
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Painting',
    description:
      'Enhance your business image with professional commercial painting services that minimize disruption while maximizing visual impact.',
    icon: 'building',
    imageUrl: '/images/exterior-commercial-painting.jpg',
    features: [
      'Office & Retail Space Painting',
      'Restaurant & Hospitality Painting',
      'Industrial Facility Services',
      'Exterior Commercial Painting',
      'Low-VOC Commercial Solutions',
    ],
  },
  {
    id: 'specialty',
    title: 'Specialty Finishes',
    description:
      'Elevate your space with custom decorative finishes that add character, texture, and unmatched visual interest to any room.',
    icon: 'palette',
    imageUrl: '/images/premium-finishes.jpg',
    features: [
      'Venetian Plaster & Textured Finishes',
      'Faux Finishing Techniques',
      'Accent Wall Designs',
      'Metallic & Pearlescent Finishes',
      'Custom Stenciling & Patterns',
    ],
  },
] satisfies Service[];

// Testimonials configuration
export const testimonialsConfig = [
  {
    name: 'Sarah Johnson',
    role: 'Lake Charles Homeowner',
    content:
      'Ponce Painting transformed our outdated living room into a stunning space we love showing off to family and friends. Their attention to detail and clean work process made the experience stress-free.',
    image: '/testimonials/sarah-johnson.jpg',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Restaurant Owner',
    content:
      'As a restaurant owner, I needed painters who could work around our schedule with minimal disruption. Ponce Painting delivered on time, on budget, and the fresh look has our customers raving.',
    image: '/testimonials/michael-chen.jpg',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Property Manager',
    content:
      'Managing multiple properties requires reliable contractors. Ponce Painting has become our go-to for all painting needs. Their consistent quality, fair pricing, and professionalism are unmatched in Lake Charles.',
    image: '/testimonials/emma-wilson.jpg',
    rating: 4,
  },
] satisfies Testimonial[];

// Feature highlights configuration
export const featuresConfig = [
  {
    title: 'Premium Quality Results',
    description:
      'We use industry-leading, eco-friendly paints and professional techniques that ensure stunning, long-lasting finishes for your home or business.',
    icon: 'check-circle',
  },
  {
    title: 'Detail-Oriented Approach',
    description:
      'From thorough preparation to meticulous application and complete cleanup, we ensure every project detail exceeds your expectations.',
    icon: 'eye',
  },
  {
    title: 'Transparent Communication',
    description:
      'Experience stress-free project management with clear timelines, detailed estimates, and regular updates throughout your painting project.',
    icon: 'message-square',
  },
] satisfies Feature[];
