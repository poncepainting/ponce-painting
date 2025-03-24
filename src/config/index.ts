/**
 * Config index file
 * Export all configuration from a single import
 */

// Site configuration
export * from './site';

// Theme configuration
export * from './theme';

// Image configuration
export * from './images';

// SEO configuration
export * from './seo';

// Button configuration
export * from './buttons';

// Icon configuration
export { Icon } from './icons';
export type { IconName } from './icons';

// Schema.org configuration
export * from './schema';

// FAQ configuration
export * from './faq';

// Import the modules
import * as site from './site';
import * as theme from './theme';
import * as images from './images';
import * as buttons from './buttons';
import * as icons from './icons';
import * as schema from './schema';
import * as seo from './seo';
import { designSystem } from './theme';

// Default export with namespaced config
export default {
  site,
  theme,
  images,
  buttons,
  icons,
  schema,
  seo,
  designSystem,
};
