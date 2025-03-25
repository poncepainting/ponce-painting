/**
 * Icon components index
 * Centralized export for all icon components
 */

import React from 'react';
import { IconProps, IconName } from './types';

// Import all icon components
import CheckCircleIcon from './CheckCircleIcon';
import ClockIcon from './ClockIcon';
import MenuIcon from './MenuIcon';
import XIcon from './XIcon';
import HomeIcon from './HomeIcon';
import StarIcon from './StarIcon';

// Icon mapping for easy reference by name
const iconComponents = {
  'check-circle': CheckCircleIcon,
  clock: ClockIcon,
  menu: MenuIcon,
  x: XIcon,
  home: HomeIcon,
  star: StarIcon,
  // Add other icons here as they are implemented
};

// Dynamic Icon component that renders the appropriate icon based on name
export const Icon = ({
  name,
  ...props
}: IconProps & {
  name: IconName;
}) => {
  const IconComponent = iconComponents[name as keyof typeof iconComponents];

  if (!IconComponent) {
    console.warn(`Icon "${name}" does not exist in the icon library.`);
    return null;
  }

  return <IconComponent {...props} />;
};

// Export individual icon components
export { default as CheckCircleIcon } from './CheckCircleIcon';
export { default as ClockIcon } from './ClockIcon';
export { default as MenuIcon } from './MenuIcon';
export { default as XIcon } from './XIcon';
export { default as HomeIcon } from './HomeIcon';

// Export types
export * from './types';
