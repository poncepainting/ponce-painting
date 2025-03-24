/**
 * Config index file
 * Export all configuration from a single import
 */

// Site configuration
export * from './site';

// Navigation configuration
export * from './navigation';

// Content configuration (services, testimonials, features)
export * from './content';

// Call to action configuration
export * from './cta';

// Theme configuration
export * from './theme';

// Image configuration
export * from './images';

// SEO configuration
export * from './seo';

// Button configuration
export * from './buttons';

// Icon configuration
export { Icon } from '@/components/icons';
export type { IconName } from '@/components/icons';

// Schema.org configuration
export * from './schema';

// FAQ configuration
export * from './faq';

// Import the modules
import * as site from './site';
import * as navigation from './navigation';
import * as content from './content';
import * as cta from './cta';
import * as theme from './theme';
import * as images from './images';
import * as buttons from './buttons';
import * as schema from './schema';
import * as seo from './seo';
import { Icon } from '@/components/icons';
import { designSystem } from './theme';

// Default export with namespaced config
export default {
  site,
  navigation,
  content,
  cta,
  theme,
  images,
  buttons,
  Icon,
  schema,
  seo,
  designSystem,
};
