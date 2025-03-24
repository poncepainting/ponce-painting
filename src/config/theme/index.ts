/**
 * Theme configuration index
 * Export all theme configuration from a single import
 */

// Import and re-export theme components
export * from './colors';
export * from './typography';
export * from './layout';
export * from './spacing';
export { designSystem } from './design-system';

// Import modules for themeConfig object
import * as colors from './colors';
import * as typography from './typography';
import * as layout from './layout';
import * as spacing from './spacing';
import { designSystem } from './design-system';

// Main theme configuration object
export const themeConfig = {
  colors: colors.colors,
  backgrounds: colors.backgrounds,
  sectionColors: colors.sectionColors,
  typography: typography.typography,
  fonts: typography.fonts,
  siteWidth: layout.siteWidth,
  container: layout.container,
  breakpoints: layout.breakpoints,
  header: layout.header,
  spacing: spacing.spacing,
  borderRadius: spacing.borderRadius,
};

export default themeConfig;
