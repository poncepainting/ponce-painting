/**
 * Image configuration
 * Central place for image-related settings, paths, and configurations
 */

// Set common sizes for different image types
export const imageSizes = {
  thumbnail: {
    width: 300,
    height: 200,
    sizes: '(max-width: 640px) 100vw, 300px',
  },
  medium: {
    width: 600,
    height: 400,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px',
  },
  large: {
    width: 1200,
    height: 800,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px',
  },
  hero: {
    width: 1920,
    height: 1080,
    sizes: '100vw',
  },
  avatar: {
    width: 150,
    height: 150,
    sizes: '150px',
  },
  icon: {
    width: 40,
    height: 40,
    sizes: '40px',
  },
  logo: {
    width: 80,
    height: 40,
    sizes: '80px',
  },
  card: {
    width: 400,
    height: 300,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px',
  },
};

// Quality levels for different image purposes
export const imageQuality = {
  low: 60, // For thumbnails, placeholders
  medium: 75, // Default quality for most images
  high: 85, // For hero images, important product photos
  maximum: 100,
};

// Placeholder images paths
export const placeholderImages = {
  default: '/images/placeholders/placeholder.svg',
  person: '/images/placeholders/person-placeholder.svg',
  product: '/images/placeholders/product-placeholder.svg',
  landscape: '/images/placeholders/landscape-placeholder.svg',
  logo: '/images/ponce-painting-logo-blue.png',
  hero: '/images/hero/hero-placeholder.jpg',
};

// Common directories for different image types
export const imagePaths = {
  hero: '/images/hero/',
  team: '/images/team/',
  services: '/images/services/',
  gallery: '/images/gallery/',
  products: '/images/products/',
  testimonials: '/images/testimonials/',
  placeholders: '/images/placeholders/',
  logos: '/images/',
};

// Generate structured image metadata for SEO
export const generateImageMetadata = (src: string, alt: string, width: number, height: number) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourbusiness.com';
  const fullUrl = src.startsWith('http') ? src : `${baseUrl}${src}`;

  return {
    url: fullUrl,
    width,
    height,
    alt,
    type: src.endsWith('.svg')
      ? 'image/svg+xml'
      : src.endsWith('.png')
        ? 'image/png'
        : src.endsWith('.webp')
          ? 'image/webp'
          : 'image/jpeg',
  };
};

// Image metadata for SEO
export type ImageMetadata = {
  src: string;
  alt: string;
  description: string;
  keywords: string[];
  width: number;
  height: number;
};

// Centralized image metadata for SEO and accessibility
export const imageMetadata: Record<string, ImageMetadata> = {
  // Residential painting image metadata
  'exterior-residential-painting': {
    src: '/images/exterior-residential-painting.jpg',
    alt: 'Professional residential exterior painting by Ponce Painting in Lake Charles, LA',
    description:
      'High-quality exterior painting service for homes in Lake Charles, showcasing our premium workmanship and attention to detail.',
    keywords: [
      'residential painting',
      'exterior painting',
      'house painting',
      'Lake Charles painting contractor',
      'home improvement',
      'professional painters',
      'quality painting',
    ],
    width: 1600,
    height: 1200,
  },

  // Commercial painting image metadata
  'exterior-commercial-painting': {
    src: '/images/exterior-commercial-painting.jpg',
    alt: 'Professional commercial exterior painting services by Ponce Painting for businesses in Lake Charles, LA',
    description:
      'Expert commercial painting services for businesses in Lake Charles, displaying our commitment to quality and professionalism.',
    keywords: [
      'commercial painting',
      'business painting',
      'exterior commercial painting',
      'Lake Charles commercial painter',
      'professional painting service',
      'business improvement',
      'commercial property maintenance',
    ],
    width: 1600,
    height: 1200,
  },

  // Premium finishes image metadata
  'premium-finishes': {
    src: '/images/premium-finishes.jpg',
    alt: 'Specialty premium finishes and decorative painting techniques by Ponce Painting in Lake Charles, LA',
    description:
      'Artistic specialty finishes and decorative painting services that add elegance and character to interior spaces.',
    keywords: [
      'specialty finishes',
      'decorative painting',
      'faux finishes',
      'textured wall finishes',
      'premium wall treatments',
      'venetian plaster',
      'accent walls',
      'custom paint finishes',
      'Lake Charles decorative painting',
    ],
    width: 1600,
    height: 1200,
  },
};

// Helper function to get image metadata by key
export const getImageMetadata = (key: string): ImageMetadata | undefined => {
  return imageMetadata[key];
};

// Helper function to get image metadata by path
export const getImageMetadataByPath = (path: string): ImageMetadata | undefined => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  for (const key in imageMetadata) {
    if (imageMetadata[key].src === normalizedPath) {
      return imageMetadata[key];
    }
  }

  return undefined;
};
