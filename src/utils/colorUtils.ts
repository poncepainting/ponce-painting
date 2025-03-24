import { themeConfig } from '@/config/theme';

/**
 * Color utilities for working with the theme colors
 */

// Define types for the theme colors
type ColorShades = {
  DEFAULT: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

interface ThemeColors {
  primary: ColorShades;
  gray: ColorShades;
  [key: string]: ColorShades | string;
}

type SectionColors = {
  [key: string]: string;
};

// Type for the restricted background colors
interface BackgroundColors {
  light: {
    white: string;
    gray: string;
  };
  dark: {
    primary: string;
    gray: string;
  };
}

type LightColorKey = keyof BackgroundColors['light'];
type DarkColorKey = keyof BackgroundColors['dark'];

/**
 * Gets a color value from the theme by its path (e.g., 'primary.500', 'secondary.200')
 * @param colorPath - Path to the color in the theme config
 * @returns The color value or fallback to a default if not found
 */
export const getThemeColor = (colorPath: string): string => {
  if (!colorPath) return '#000000';

  // Handle direct color values
  if (colorPath.startsWith('#')) return colorPath;

  // Handle named colors like 'white', 'black', 'transparent'
  if (colorPath === 'white') return '#ffffff';
  if (colorPath === 'black') return '#000000';
  if (colorPath === 'transparent') return 'transparent';

  // Handle new background color scheme (light.white, dark.primary, etc.)
  if (colorPath.includes('light.') || colorPath.includes('dark.')) {
    const [category, colorName] = colorPath.split('.');
    if (category === 'light') {
      return (themeConfig.backgrounds as BackgroundColors).light[colorName as LightColorKey] || '#ffffff';
    } else if (category === 'dark') {
      return (themeConfig.backgrounds as BackgroundColors).dark[colorName as DarkColorKey] || '#1f2937';
    }
  }

  // Handle theme color paths like 'primary.500'
  const parts = colorPath.split('.');

  // Default to the primary color if no path is provided
  if (parts.length === 1) {
    const [colorName] = parts;
    const color = (themeConfig.colors as any)[colorName];
    return typeof color === 'object' ? color.DEFAULT : (color || '#000000');
  }

  // Get nested color value
  const [colorName, shade] = parts;
  const colorObj = (themeConfig.colors as any)[colorName];
  return (colorObj && typeof colorObj === 'object') ? colorObj[shade] || '#000000' : '#000000';
};

/**
 * Returns a background color for a specific section based on theme config
 * @param sectionName - Name of the section (e.g., 'hero', 'features')
 * @returns The background color for the section
 */
export const getSectionBgColor = (sectionName: string): string => {
  const colorPath = (themeConfig.sectionColors as SectionColors)[sectionName];
  return getThemeColor(colorPath);
};

/**
 * Get complementary colors for text based on background color
 * @param bgColorPath - Path to the background color
 * @returns Object with text, heading, and muted text colors
 */
export const getTextColors = (bgColorPath: string) => {
  const bgColor = getThemeColor(bgColorPath);

  // Check if the background color is a dark one from our restricted palette
  const isDark = 
    bgColorPath.startsWith('dark.') || 
    bgColor === (themeConfig.backgrounds as BackgroundColors).dark.primary || 
    bgColor === (themeConfig.backgrounds as BackgroundColors).dark.gray;

  if (isDark) {
    return {
      text: '#ffffff', // White text
      heading: '#ffffff', // White headings
      muted: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white for muted text
    };
  }

  // For light backgrounds
  return {
    text: '#4b5563', // Gray-600 for better readability
    heading: '#1f2937', // Gray-800 for headings
    muted: '#6b7280', // Gray-500 for muted text
  };
};

/**
 * Generate a light background color variation
 * @returns Light gray background color
 */
export const getLightBgVariation = (): string => {
  // Return light gray background
  return (themeConfig.backgrounds as BackgroundColors).light.gray;
};

/**
 * Generates CSS variables for all theme colors
 * @returns Object with CSS variable declarations
 */
export const generateColorCssVars = () => {
  const cssVars: Record<string, string> = {};

  // Add regular color variables from primary and gray
  const colors = themeConfig.colors as any;
  
  // Process primary colors
  if (colors.primary && typeof colors.primary === 'object') {
    Object.entries(colors.primary).forEach(([shade, value]) => {
      if (shade === 'DEFAULT') {
        cssVars[`--color-primary`] = value as string;
      } else {
        cssVars[`--color-primary-${shade}`] = value as string;
      }
    });
  }
  
  // Process gray colors
  if (colors.gray && typeof colors.gray === 'object') {
    Object.entries(colors.gray).forEach(([shade, value]) => {
      if (shade === 'DEFAULT') {
        cssVars[`--color-gray`] = value as string;
      } else {
        cssVars[`--color-gray-${shade}`] = value as string;
      }
    });
  }

  // Add the restricted background colors
  const backgrounds = themeConfig.backgrounds as BackgroundColors;
  
  // Light backgrounds
  cssVars['--bg-light-white'] = backgrounds.light.white;
  cssVars['--bg-light-gray'] = backgrounds.light.gray;
  
  // Dark backgrounds
  cssVars['--bg-dark-primary'] = backgrounds.dark.primary;
  cssVars['--bg-dark-gray'] = backgrounds.dark.gray;

  return cssVars;
};
