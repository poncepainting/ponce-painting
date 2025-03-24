/**
 * Theme configuration
 * Centralized management of colors, spacing, typography and other design tokens
 */

export const themeConfig = {
  // Colors - simplified color scheme
  colors: {
    // Primary brand color - blue spectrum based on #7BAAF4
    primary: {
      DEFAULT: '#7BAAF4', // Base color
      50: '#ECF2FD',  // Lightest pastel - almost white
      100: '#D9E6FC', // Lighter pastel
      200: '#C5DAFC', // Light pastel (calculated)
      300: '#B1CEF9', // Light (calculated)
      400: '#9DC1F7', // Medium-light (calculated)
      500: '#7BAAF4', // Base color
      600: '#356BC0', // Dark mid-tone
      700: '#2A5699', // Darker (calculated)
      800: '#1A3560', // Darker deep
      900: '#142848', // Darkest deep
      950: '#0E1C31', // Even darker (calculated)
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
    info: '#7BAAF4',  // Updated to match our base color
  },

  // Restricted background color options (per client request)
  backgrounds: {
    // 2 light options
    light: {
      white: '#ffffff',          // Pure white
      gray: '#f9fafb',           // Very light gray (gray.50)
    },
    // 2 dark options
    dark: {
      primary: '#1A3560',        // Dark primary (primary.800)
      gray: '#1f2937',           // Dark gray (gray.800)
    }
  },

  // Section-specific background colors - using restricted palette
  sectionColors: {
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
  },

  // Typography configuration
  typography: {
    // Font families
    fonts: {
      sans: 'var(--font-geist-sans)',
      mono: 'var(--font-geist-mono)',
    },
    
    // Font sizes with associated line heights and letter spacing
    sizes: {
      xs: {
        fontSize: '0.75rem', // 12px
        lineHeight: '1rem', // 16px
        letterSpacing: '0.025em',
      },
      sm: {
        fontSize: '0.875rem', // 14px
        lineHeight: '1.25rem', // 20px
        letterSpacing: '0.0125em',
      },
      base: {
        fontSize: '1rem', // 16px
        lineHeight: '1.5rem', // 24px
        letterSpacing: '0',
      },
      lg: {
        fontSize: '1.125rem', // 18px
        lineHeight: '1.75rem', // 28px
        letterSpacing: '0',
      },
      xl: {
        fontSize: '1.25rem', // 20px
        lineHeight: '1.75rem', // 28px
        letterSpacing: '-0.0125em',
      },
      '2xl': {
        fontSize: '1.5rem', // 24px
        lineHeight: '2rem', // 32px
        letterSpacing: '-0.0125em',
      },
      '3xl': {
        fontSize: '1.875rem', // 30px
        lineHeight: '2.25rem', // 36px
        letterSpacing: '-0.0125em',
      },
      '4xl': {
        fontSize: '2.25rem', // 36px
        lineHeight: '2.5rem', // 40px
        letterSpacing: '-0.025em',
      },
      '5xl': {
        fontSize: '3rem', // 48px
        lineHeight: '1',
        letterSpacing: '-0.025em',
      },
      '6xl': {
        fontSize: '3.75rem', // 60px
        lineHeight: '1',
        letterSpacing: '-0.025em',
      },
    },
    
    // Font weights
    weights: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    
    // Text styles for consistent typography
    textStyles: {
      h1: {
        fontSize: '4xl',
        fontWeight: 'bold',
        color: 'primary.800', 
        dark: 'white',
      },
      h2: {
        fontSize: '3xl',
        fontWeight: 'bold',
        color: 'primary.800',
        dark: 'white',
      },
      h3: {
        fontSize: '2xl',
        fontWeight: 'bold',
        color: 'primary.800',
        dark: 'white',
      },
      h4: {
        fontSize: 'xl',
        fontWeight: 'bold',
        color: 'primary.800',
        dark: 'white',
      },
      h5: {
        fontSize: 'lg',
        fontWeight: 'bold',
        color: 'primary.800',
        dark: 'white',
      },
      h6: {
        fontSize: 'base',
        fontWeight: 'bold',
        color: 'primary.800',
        dark: 'white',
      },
      body: {
        fontSize: 'base',
        fontWeight: 'normal',
        color: 'gray.600',
        dark: 'white',
      },
      bodyLarge: {
        fontSize: 'lg',
        fontWeight: 'normal',
        color: 'gray.600',
        dark: 'white',
      },
      bodySmall: {
        fontSize: 'sm',
        fontWeight: 'normal',
        color: 'gray.500',
        dark: 'gray.300',
      },
      caption: {
        fontSize: 'xs',
        fontWeight: 'normal',
        color: 'gray.500',
        dark: 'gray.300',
      },
      button: {
        fontSize: 'sm',
        fontWeight: 'medium',
        letterSpacing: '0.025em',
      },
      overline: {
        fontSize: 'xs',
        fontWeight: 'semibold',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: 'primary.600',
        dark: 'primary.400',
      },
      link: {
        color: 'primary.600',
        dark: 'primary.400',
        hover: 'primary.700',
        darkHover: 'primary.300',
      },
    },
  },

  // Font options
  fonts: {
    // Font family names as defined in layout.tsx
    sans: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },

  // Site width configuration
  siteWidth: {
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
  },

  // Container sizes (used for Tailwind container class)
  container: {
    center: true,
    padding: '1rem',
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },

  // Responsive breakpoints (matches Tailwind defaults)
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Header configuration
  header: {
    height: {
      mobile: '64px', // 16 in tailwind (h-16)
      desktop: '80px', // 20 in tailwind (h-20)
    },
    breakpoint: 'md', // When to switch from mobile to desktop header
  },

  // Spacing/sizing scales
  spacing: {
    0: '0px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },

  // Border radius
  borderRadius: {
    none: '0px',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
};

// Design system exports for consistent styling across components
export const designSystem = {
  borderRadius: {
    button: 'rounded-full',
    card: 'rounded-xl',
    container: 'rounded-2xl',
    badge: 'rounded-full',
    header: 'rounded-xl',
    input: 'rounded-xl',
    form: 'rounded-xl',
  },
  shadows: {
    sm: 'shadow-sm',
    DEFAULT: 'shadow',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  },
};

export default themeConfig;
