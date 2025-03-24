/**
 * DEPRECATED: Icon configuration - FOR BACKWARD COMPATIBILITY ONLY
 * Please import icons from @/components/icons instead
 * This file will be removed in a future update
 */

import { Icon as NewIcon, IconProps, IconName } from '@/components/icons';

export type { IconProps, IconName };

// Re-export the Icon component for backward compatibility
export const Icon = NewIcon;

// Export a default for backward compatibility
const icons = {};
export default icons;
