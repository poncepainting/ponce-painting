/**
 * Image optimization utilities for the website
 */

import { imageQuality, imageSizes, placeholderImages, imagePaths } from '@/config/images';

// Re-export specific items from config/images.ts
export { imageQuality, imageSizes, placeholderImages, imagePaths };

/**
 * Utility functions for working with images
 */

// Create simple shimmer effect SVG for placeholder
export const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#e2e8f0" offset="20%" />
      <stop stop-color="#f8fafc" offset="50%" />
      <stop stop-color="#e2e8f0" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#e2e8f0" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
</svg>`;

// Convert a string to a base64 string
export const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

// Generate a base64 encoded SVG placeholder for use with next/image
export const generatePlaceholderDataUrl = (width: number | string, height: number | string, enabled = true) => {
  if (!enabled) return undefined;
  
  const w = typeof width === 'number' ? width : 700;
  const h = typeof height === 'number' ? height : 475;
  
  return `data:image/svg+xml;base64,${toBase64(shimmer(w, h))}`;
};

// Get the image filename from a path
export const getImageName = (src: string | object) => {
  return typeof src === 'string' ? src.split('/').pop() || 'image' : 'unknown';
};
