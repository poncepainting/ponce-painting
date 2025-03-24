import { themeConfig, designSystem } from '@/config/theme';

/**
 * Theme utility functions to generate CSS variables and access theme values
 */

/**
 * Flattens a nested object into a flat object with dot notation keys
 * @param obj - The object to flatten
 * @param prefix - The prefix for the keys
 * @returns A flattened object
 */
export const flattenObject = (obj: any, prefix = ''): Record<string, string> => {
  return Object.keys(obj).reduce((acc: Record<string, string>, k) => {
    const pre = prefix.length ? `${prefix}-` : '';
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k]) && k !== 'dark' && k !== 'hover' && k !== 'darkHover') {
      Object.assign(acc, flattenObject(obj[k], `${pre}${k}`));
    } else {
      acc[`${pre}${k}`] = obj[k];
    }
    return acc;
  }, {});
};

/**
 * Generates CSS variables for the entire theme
 * @returns CSS variables as a string
 */
export const generateThemeCssVariables = (): string => {
  const variables: Record<string, string> = {};
  
  // Process colors
  const colors = flattenObject(themeConfig.colors);
  Object.entries(colors).forEach(([key, value]) => {
    variables[`--color-${key}`] = value;
  });
  
  // Process backgrounds
  const lightBgs = flattenObject(themeConfig.backgrounds.light);
  Object.entries(lightBgs).forEach(([key, value]) => {
    variables[`--bg-light-${key}`] = value;
  });
  
  const darkBgs = flattenObject(themeConfig.backgrounds.dark);
  Object.entries(darkBgs).forEach(([key, value]) => {
    variables[`--bg-dark-${key}`] = value;
  });
  
  // Process typography sizes
  Object.entries(themeConfig.typography.sizes).forEach(([key, value]) => {
    variables[`--font-size-${key}`] = value.fontSize;
    variables[`--line-height-${key}`] = value.lineHeight;
    variables[`--letter-spacing-${key}`] = value.letterSpacing;
  });
  
  // Process font weights
  Object.entries(themeConfig.typography.weights).forEach(([key, value]) => {
    variables[`--font-weight-${key}`] = value;
  });
  
  // Process spacing
  Object.entries(themeConfig.spacing).forEach(([key, value]) => {
    variables[`--spacing-${key}`] = value;
  });
  
  // Process border radius
  Object.entries(themeConfig.borderRadius).forEach(([key, value]) => {
    const variableKey = key === 'DEFAULT' ? 'default' : key;
    variables[`--radius-${variableKey}`] = value;
  });
  
  // Convert to CSS string
  return Object.entries(variables)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n');
};

/**
 * Generates CSS classes for text styles
 * @returns CSS classes as a string
 */
export const generateTextStyleClasses = (): string => {
  const classes: string[] = [];
  
  // Process text styles
  Object.entries(themeConfig.typography.textStyles).forEach(([style, config]) => {
    // Skip if the config doesn't have required properties
    if (!('fontSize' in config) || !('fontWeight' in config)) {
      // Handle special case for links which might have different structure
      if (style === 'link' && 'hover' in config) {
        // Handle links with hover states but without font size/weight
        // Process hover styles below
      } else {
        return; // Skip this text style if it doesn't have the required properties
      }
    }
    
    let colorValue = '';
    if ('color' in config && typeof config.color === 'string') {
      if (config.color.includes('.')) {
        const [colorName, shade] = config.color.split('.');
        colorValue = `var(--color-${colorName}${shade === 'DEFAULT' ? '' : `-${shade}`})`;
      } else {
        colorValue = `var(--color-${config.color})`;
      }
    }
    
    // Generate regular style
    if ('fontSize' in config && 'fontWeight' in config) {
      const fontSizeKey = config.fontSize as keyof typeof themeConfig.typography.sizes;
      const fontSize = themeConfig.typography.sizes[fontSizeKey];
      
      classes.push(`
        .text-style-${style} {
          font-size: var(--font-size-${config.fontSize});
          line-height: var(--line-height-${config.fontSize});
          font-weight: var(--font-weight-${config.fontWeight});
          ${fontSize.letterSpacing ? `letter-spacing: var(--letter-spacing-${config.fontSize});` : ''}
          ${colorValue ? `color: ${colorValue};` : ''}
          ${('textTransform' in config && config.textTransform) ? `text-transform: ${config.textTransform};` : ''}
        }
      `);
    }
    
    // Generate dark mode style if it exists
    if ('dark' in config && config.dark) {
      let darkColorValue = '';
      if (typeof config.dark === 'string' && config.dark.includes('.')) {
        const [colorName, shade] = config.dark.split('.');
        darkColorValue = `var(--color-${colorName}${shade === 'DEFAULT' ? '' : `-${shade}`})`;
      } else {
        darkColorValue = `var(--color-${config.dark})`;
      }
      
      classes.push(`
        .dark .text-style-${style} {
          color: ${darkColorValue};
        }
      `);
    }
    
    // Generate hover style for links
    if (style === 'link' && 'hover' in config && config.hover) {
      let hoverColorValue = '';
      if (typeof config.hover === 'string' && config.hover.includes('.')) {
        const [colorName, shade] = config.hover.split('.');
        hoverColorValue = `var(--color-${colorName}${shade === 'DEFAULT' ? '' : `-${shade}`})`;
      } else {
        hoverColorValue = `var(--color-${config.hover})`;
      }
      
      classes.push(`
        .text-style-${style}:hover {
          color: ${hoverColorValue};
        }
      `);
      
      if ('darkHover' in config && config.darkHover) {
        let darkHoverColorValue = '';
        if (typeof config.darkHover === 'string' && config.darkHover.includes('.')) {
          const [colorName, shade] = config.darkHover.split('.');
          darkHoverColorValue = `var(--color-${colorName}${shade === 'DEFAULT' ? '' : `-${shade}`})`;
        } else {
          darkHoverColorValue = `var(--color-${config.darkHover})`;
        }
        
        classes.push(`
          .dark .text-style-${style}:hover {
            color: ${darkHoverColorValue};
          }
        `);
      }
    }
  });
  
  return classes.join('\n');
};

/**
 * Gets a theme value by key path
 * @param path - The key path to the value
 * @returns The theme value or undefined if not found
 */
export const getThemeValue = (path: string): any => {
  const keys = path.split('.');
  let result = themeConfig as any;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return undefined;
    }
  }
  
  return result;
};

/**
 * Gets a CSS variable for a color
 * @param colorPath - The color path (e.g., 'primary.500')
 * @returns The CSS variable
 */
export const getCssColorVariable = (colorPath: string): string => {
  if (!colorPath) return 'inherit';
  
  // Handle direct color values
  if (colorPath.startsWith('#') || colorPath.startsWith('rgb')) {
    return colorPath;
  }
  
  if (colorPath === 'white' || colorPath === 'black' || colorPath === 'transparent') {
    return `var(--color-${colorPath})`;
  }
  
  // Handle theme color paths like 'primary.500'
  const parts = colorPath.split('.');
  
  if (parts.length === 1) {
    return `var(--color-${parts[0]})`;
  }
  
  const [colorName, shade] = parts;
  return `var(--color-${colorName}${shade === 'DEFAULT' ? '' : `-${shade}`})`;
};

/**
 * Gets a CSS variable for a background color
 * @param bgType - The background type ('light' or 'dark')
 * @param variant - The background variant
 * @returns The CSS variable
 */
export const getCssBackgroundVariable = (bgType: 'light' | 'dark', variant: string): string => {
  return `var(--bg-${bgType}-${variant})`;
};

/**
 * Gets a CSS class name for text styling
 * @param style - The text style name (e.g., 'h1', 'body')
 * @returns The CSS class name
 */
export const getTextStyleClass = (style: keyof typeof themeConfig.typography.textStyles): string => {
  return `text-style-${style}`;
};

/**
 * Creates CSS variables for colors that can be injected into global styles
 */
export const createCssColorVariables = () => {
  return `
    :root {
      ${generateThemeCssVariables()}
    }
    
    ${generateTextStyleClasses()}
  `;
};

/**
 * Helper function to apply theme styles to a component
 * @param options - The styling options
 * @returns The style object and className to apply
 */
export const useThemeStyles = (options: {
  backgroundColor?: string;
  textColor?: string;
  padding?: keyof typeof themeConfig.spacing | 'none';
  rounded?: keyof typeof themeConfig.borderRadius | 'none';
  border?: boolean;
  borderColor?: string;
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
  width?: 'full' | 'auto' | number;
  height?: 'full' | 'auto' | number;
  margin?: keyof typeof themeConfig.spacing | 'none';
}) => {
  const style: React.CSSProperties = {};
  const classNames: string[] = [];
  
  // Background color
  if (options.backgroundColor) {
    style.backgroundColor = getCssColorVariable(options.backgroundColor);
  }
  
  // Text color
  if (options.textColor) {
    style.color = getCssColorVariable(options.textColor);
  }
  
  // Padding
  if (options.padding && options.padding !== 'none') {
    const padding = themeConfig.spacing[options.padding];
    style.padding = padding;
  }
  
  // Border radius
  if (options.rounded && options.rounded !== 'none') {
    const borderRadius = themeConfig.borderRadius[options.rounded as keyof typeof themeConfig.borderRadius];
    style.borderRadius = borderRadius;
  }
  
  // Border
  if (options.border) {
    style.borderWidth = '1px';
    style.borderStyle = 'solid';
    
    if (options.borderColor) {
      style.borderColor = getCssColorVariable(options.borderColor);
    } else {
      style.borderColor = getCssColorVariable('gray.200');
    }
  }
  
  // Shadow
  if (options.shadow && options.shadow !== 'none') {
    switch (options.shadow) {
      case 'sm':
        classNames.push('shadow-sm');
        break;
      case 'md':
        classNames.push('shadow');
        break;
      case 'lg':
        classNames.push('shadow-lg');
        break;
      case 'xl':
        classNames.push('shadow-xl');
        break;
      case '2xl':
        classNames.push('shadow-2xl');
        break;
    }
  }
  
  // Width
  if (options.width) {
    if (options.width === 'full') {
      style.width = '100%';
    } else if (options.width === 'auto') {
      style.width = 'auto';
    } else {
      style.width = `${options.width}px`;
    }
  }
  
  // Height
  if (options.height) {
    if (options.height === 'full') {
      style.height = '100%';
    } else if (options.height === 'auto') {
      style.height = 'auto';
    } else {
      style.height = `${options.height}px`;
    }
  }
  
  // Margin
  if (options.margin && options.margin !== 'none') {
    const margin = themeConfig.spacing[options.margin];
    style.margin = margin;
  }
  
  return {
    style,
    className: classNames.join(' ')
  };
};

/**
 * Creates a color palette object that can be used in components
 * @returns Color palette object with all theme colors
 */
export const createColorPalette = () => {
  const palette: Record<string, Record<string, string>> = {
    primary: {},
    gray: {},
    functional: {}
  };
  
  // Add primary colors
  Object.entries(themeConfig.colors.primary).forEach(([shade, color]) => {
    palette.primary[shade === 'DEFAULT' ? 'default' : shade] = color;
  });
  
  // Add gray colors
  Object.entries(themeConfig.colors.gray).forEach(([shade, color]) => {
    palette.gray[shade === 'DEFAULT' ? 'default' : shade] = color;
  });
  
  // Add functional colors
  ['success', 'warning', 'error', 'info'].forEach(colorName => {
    const color = themeConfig.colors[colorName as keyof typeof themeConfig.colors];
    if (typeof color === 'string') {
      palette.functional[colorName] = color;
    }
  });
  
  // Add base colors
  palette.base = {
    white: themeConfig.colors.white,
    black: themeConfig.colors.black,
    transparent: 'transparent'
  };
  
  return palette;
};

/**
 * Helper function to apply semantic background color from the theme's section colors
 * @param sectionName - The name of the section from the theme config
 * @returns The background color CSS variable
 */
export const getSectionBackgroundColor = (sectionName: keyof typeof themeConfig.sectionColors) => {
  const colorPath = themeConfig.sectionColors[sectionName];
  if (!colorPath) return '';
  
  const [type, name] = colorPath.split('.');
  return `var(--bg-${type}-${name})`;
};

/**
 * Gets the border radius class for form inputs from the design system
 * @returns The input border radius class
 */
export const getFormInputClass = (): string => {
  return designSystem.borderRadius.input;
};

/**
 * Gets the border radius class for form containers from the design system
 * @returns The form container border radius class
 */
export const getFormContainerClass = (): string => {
  return designSystem.borderRadius.form;
}; 