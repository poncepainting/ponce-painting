/**
 * Theme color configuration
 * Centralized management of colors
 */

export const colors = {
  // Primary brand color - blue spectrum based on #006aae
  primary: {
    DEFAULT: '#006aae', // Base color
    50: '#e6f2f9', // Lightest pastel - almost white
    100: '#cce5f3', // Lighter pastel
    200: '#99cbe7', // Light pastel
    300: '#66b0db', // Light
    400: '#3396cf', // Medium-light
    500: '#006aae', // Base color
    600: '#00558c', // Darker mid-tone
    700: '#00406a', // Darker
    800: '#002b47', // Darker deep
    900: '#001525', // Darkest deep
    950: '#000a12', // Even darker
  },
  // Neutral colors - white, black, gray
  white: '#ffffff',
  black: '#000000',
  gray: {
    DEFAULT: '#6b7280', // gray-500
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
    950: '#030712',
  },
  // Simplified functional colors
  success: '#16a34a',
  warning: '#ca8a04',
  error: '#dc2626',
  info: '#006aae', // Updated to match our base color
};

// Restricted background color options (per client request)
export const backgrounds = {
  // 2 light options
  light: {
    white: '#ffffff', // Pure white
    gray: '#f9fafb', // Very light gray (gray.50)
  },
  // 2 dark options
  dark: {
    primary: '#002b47', // Dark primary (primary.800)
    gray: '#1f2937', // Dark gray (gray.800)
  },
};

// Section-specific background colors - using restricted palette
export const sectionColors = {
  hero: 'dark.primary',
  features: 'light.white',
  services: 'light.gray',
  testimonials: 'light.white',
  cta: 'dark.primary',
  footer: 'dark.gray',
  about: 'light.white',
  contact: 'light.gray',
  pricing: 'light.gray',
  faq: 'light.gray',
};
