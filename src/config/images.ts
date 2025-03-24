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
};

// Placeholder images paths
export const placeholderImages = {
  default: '/images/placeholders/placeholder.svg',
  person: '/images/placeholders/person-placeholder.svg',
  product: '/images/placeholders/product-placeholder.svg',
  landscape: '/images/placeholders/landscape-placeholder.svg',
  logo: '/images/logo.svg',
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
