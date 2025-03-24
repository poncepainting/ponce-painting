/**
 * Button configuration
 * Central place for button-related styles and settings
 * 
 * This configuration is designed to pull colors from CSS variables
 * so that when the global theme changes, button styles update automatically.
 */

import { themeConfig } from './theme';
import { designSystem } from './theme';

// Interface for variant styles
export interface VariantStyle {
  base: string;
  disabled: string;
}

// Function to create theme-aware button styles
const createThemeStyles = () => {
  return {
    // Button variants
    variants: {
      primary: {
        base: 'bg-primary-600 hover:bg-primary-700 text-white',
        disabled: 'bg-gray-200 text-gray-400 cursor-not-allowed',
      } as VariantStyle,
      secondary: {
        base: 'bg-gray-600 hover:bg-gray-700 text-white',
        disabled: 'bg-gray-200 text-gray-400 cursor-not-allowed',
      } as VariantStyle,
      outline: {
        base: 'bg-transparent hover:bg-gray-50 text-primary-600 border border-gray-300',
        disabled: 'bg-transparent text-gray-400 border border-gray-200 cursor-not-allowed',
      } as VariantStyle,
      ghost: {
        base: 'bg-transparent hover:bg-gray-50 text-primary-600',
        disabled: 'text-gray-400 cursor-not-allowed',
      } as VariantStyle,
      text: {
        base: 'bg-transparent hover:text-primary-700 text-primary-600 p-0',
        disabled: 'text-gray-400 cursor-not-allowed p-0',
      } as VariantStyle,
    },
    
    // Button sizes
    sizes: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-base',
    },
    
    // Icon-only button sizes
    iconSizes: {
      sm: 'p-2',
      md: 'p-3',
      lg: 'p-4',
    },
    
    // Default button properties
    defaults: {
      rounded: designSystem.borderRadius.button,
      roundedIcon: designSystem.borderRadius.button,
      fontWeight: 'font-medium',
      transition: 'transition-colors duration-200',
      display: 'inline-flex items-center justify-center',
    },
    
    // Icon properties
    icons: {
      leftIconMargin: 'mr-2',
      rightIconMargin: 'ml-2',
      defaultSize: 'h-5 w-5',
      smallSize: 'h-4 w-4',
    },
  };
};

// Create the button configuration using theme values
export const buttonConfig = createThemeStyles();

export default buttonConfig; 