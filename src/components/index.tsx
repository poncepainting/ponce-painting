// Re-export from various component directories
export * from './common';
export * from './feature';
export * from './ui';
// Export SEO components directly to avoid case sensitivity issues
export { SEO, PageSEO, SchemaMarkup, HeadContent } from './seo/index';
export * from './layout';
export * from './theme';
export * from './icons';
export * from './forms';
export * from './carousel';

// Direct exports of components in the root directory
export { default as Header } from './Header';
export { default as ServiceCarousel } from './ServiceCarousel';
export { default as TestimonialCarousel } from './TestimonialCarousel';
