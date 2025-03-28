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
import ChevronUpIcon from './ChevronUpIcon';
import ChevronDownIcon from './ChevronDownIcon';
import ChevronLeftIcon from './ChevronLeftIcon';
import ChevronRightIcon from './ChevronRightIcon';
import MailIcon from './MailIcon';
import MapPinIcon from './MapPinIcon';
import PhoneIcon from './PhoneIcon';
import FacebookIcon from './FacebookIcon';
import TwitterIcon from './TwitterIcon';
import InstagramIcon from './InstagramIcon';
import LinkedinIcon from './LinkedinIcon';

// Icon mapping for easy reference by name
const iconComponents = {
  'check-circle': CheckCircleIcon,
  clock: ClockIcon,
  menu: MenuIcon,
  x: XIcon,
  home: HomeIcon,
  star: StarIcon,
  'chevron-up': ChevronUpIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  mail: MailIcon,
  'map-pin': MapPinIcon,
  phone: PhoneIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
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
export { default as PhoneIcon } from './PhoneIcon';
export { default as FacebookIcon } from './FacebookIcon';
export { default as TwitterIcon } from './TwitterIcon';
export { default as InstagramIcon } from './InstagramIcon';
export { default as LinkedinIcon } from './LinkedinIcon';

// Export types
export * from './types';
