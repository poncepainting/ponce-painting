/**
 * DEPRECATED: Theme configuration - FOR BACKWARD COMPATIBILITY ONLY
 * Please import from @/config/theme/ directory instead
 * This file will be removed in a future update
 */

// Re-export from the modularized theme directory
export * from './theme/';

// Import and re-export themeConfig and designSystem
import { themeConfig, designSystem } from './theme/';
export { themeConfig, designSystem };

export default themeConfig;
