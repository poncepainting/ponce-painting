'use client';

import React, { useContext, useMemo } from 'react';
import HeaderAccent from './ui/HeaderAccent';
import { SectionBackgroundContext, useSectionBackground } from './ui/Section';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  showAccent?: boolean;
  accentColor?: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  subheadingText?: string;
  useSubheading?: boolean;
  titleClass?: string;
  subtitleClass?: string;
  onDarkBackground?: boolean;
}

/**
 * A reusable section heading component that can include a subtitle
 * and a decorative accent above it using the design system's styling
 */
const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  showAccent = true,
  accentColor = 'primary.600',
  as: Component = 'h2',
  className = '',
  subheadingText = '',
  useSubheading = false,
  titleClass = '',
  subtitleClass = '',
  onDarkBackground,
}: SectionHeadingProps) => {
  // Get section background context
  const { isDarkBackground } = useSectionBackground();

  // Use explicitly provided value or detect from context
  const isOnDarkBackground = onDarkBackground !== undefined ? onDarkBackground : isDarkBackground;

  // Dynamically set default text colors based on background
  const defaultTextColors = useMemo(() => {
    if (isOnDarkBackground) {
      return {
        title: 'text-white',
        subtitle: 'text-gray-100',
      };
    }
    return {
      title: 'text-primary-800',
      subtitle: 'text-gray-600',
    };
  }, [isOnDarkBackground]);

  // Classes for the heading element
  const headingClasses = [
    'font-bold',
    Component === 'h1' ? 'text-4xl md:text-5xl' : '',
    Component === 'h2' ? 'text-3xl md:text-4xl' : '',
    Component === 'h3' ? 'text-2xl md:text-3xl' : '',
    centered ? 'text-center' : '',
    titleClass || defaultTextColors.title,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Classes for the subtitle
  const subtitleClasses = [
    'mt-4',
    Component === 'h1' ? 'text-xl' : '',
    Component === 'h2' ? 'text-lg' : '',
    Component === 'h3' ? 'text-base' : '',
    centered ? 'text-center' : '',
    subtitleClass || defaultTextColors.subtitle,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="mb-10">
      {useSubheading ? (
        <HeaderAccent
          useAsSubheading
          text={subheadingText}
          color={accentColor}
          centered={centered}
          onDarkBackground={isOnDarkBackground}
        />
      ) : showAccent ? (
        <HeaderAccent
          color={accentColor}
          centered={centered}
          onDarkBackground={isOnDarkBackground}
        />
      ) : null}

      <Component className={headingClasses}>{title}</Component>
      {subtitle && <p className={subtitleClasses}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
