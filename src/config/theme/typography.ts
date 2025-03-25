/**
 * Theme typography configuration
 * Centralized management of typography
 */

// Typography configuration
export const typography = {
  // Font families
  fonts: {
    sans: 'var(--font-jakarta-sans)',
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
};

// Font options
export const fonts = {
  // Font family names as defined in layout.tsx
  sans: 'var(--font-jakarta-sans)',
  mono: 'var(--font-geist-mono)',
};
