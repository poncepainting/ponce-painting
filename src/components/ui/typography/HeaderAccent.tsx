'use client';

import { ReactNode, useMemo } from 'react';
import { designSystem } from '@/config/theme';
import { getTextColors } from '@/utils/colorUtils';

export interface HeaderAccentProps {
  /**
   * Color of the accent element (tailwind class)
   * Use color.<number> format for specific shades (e.g. 'primary.50')
   */
  color?: string;

  /**
   * Width of the accent element
   */
  width?: string;

  /**
   * Height of the accent element
   */
  height?: string;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Children elements to render inside the accent
   */
  children?: ReactNode;

  /**
   * Center the accent horizontally
   */
  centered?: boolean;

  /**
   * Text content for the accent element
   */
  text?: string;

  /**
   * Whether the accent should function as a subheading with text
   */
  useAsSubheading?: boolean;

  /**
   * Whether this accent is being rendered on a dark background
   */
  onDarkBackground?: boolean;
}

/**
 * A decorative accent div that can be placed above headers
 * Can also function as a subheading with text
 * Uses the same border radius as defined in the design system
 */
export function HeaderAccent({
  color = 'primary.600',
  text,
  useAsSubheading = false,
  width = useAsSubheading ? 'auto' : 'w-16',
  height = useAsSubheading ? 'auto' : 'h-2',
  className = '',
  children,
  centered = false,
  onDarkBackground = false,
}: HeaderAccentProps) {
  // Convert color string to actual bg class and determine text color
  const { bgColorClass, textColorClass } = useMemo(() => {
    // Always use white text for header accents to ensure brand consistency
    const textColor = 'text-white';

    // Parse the color to handle different formats
    // If it's already a full tailwind class like 'bg-primary-50', use it directly
    if (color.startsWith('bg-')) {
      return { bgColorClass: color, textColorClass: textColor };
    }

    // If it's a color path like 'primary.50', convert to tailwind class
    const [colorName, shade = '600'] = color.split('.');

    // Always use the main brand color (600) or a predefined shade
    // Ignore any input that would result in a light background color
    const bgClass = `bg-${colorName}-${shade}`;

    return { bgColorClass: bgClass, textColorClass: textColor };
  }, [color]);

  const borderRadius = useAsSubheading ? `rounded-full` : `rounded-full`;

  // A dynamic class string that builds our styles
  const accentClasses = [
    bgColorClass,
    width,
    height,
    borderRadius,
    useAsSubheading
      ? `px-4 py-1 inline-block ${textColorClass} text-xs font-medium tracking-wide uppercase`
      : '',
    'mb-4',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const wrapperClasses = [
    useAsSubheading && centered ? 'text-center w-full' : '',
    useAsSubheading && !centered ? 'block w-full' : '',
  ]
    .filter(Boolean)
    .join(' ');

  if (useAsSubheading) {
    return (
      <div className={wrapperClasses}>
        <div className={accentClasses}>{text || children}</div>
      </div>
    );
  }

  return <div className={`${accentClasses} ${centered ? 'mx-auto' : ''}`}>{children}</div>;
}

export default HeaderAccent;
