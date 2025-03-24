/**
 * Theme layout configuration
 * Centralized management of layout and spacing
 */

// Site width configuration
export const siteWidth = {
  // The maximum width of the site content
  maxWidth: '1280px', // Default max width (Tailwind xl)
  // Different max widths for different screen sizes
  responsive: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  // Default content padding
  contentPadding: '1rem',
  // Content padding for different screen sizes
  responsivePadding: {
    sm: '1rem',
    md: '2rem',
    lg: '2rem',
    xl: '2rem',
    '2xl': '2rem',
  },
};

// Container sizes (used for Tailwind container class)
export const container = {
  center: true,
  padding: '1rem',
  maxWidth: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

// Responsive breakpoints (matches Tailwind defaults)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Header configuration
export const header = {
  height: {
    mobile: '64px', // 16 in tailwind (h-16)
    desktop: '80px', // 20 in tailwind (h-20)
  },
  breakpoint: 'md', // When to switch from mobile to desktop header
};
