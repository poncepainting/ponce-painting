'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { getSectionBgColor, getTextColors } from '@/utils/colorUtils';
import Container from './Container';

// Create a context to share background state
export const SectionBackgroundContext = createContext<{ isDarkBackground: boolean }>({
  isDarkBackground: false,
});

type SectionProps = {
  as?: 'section' | 'div' | 'article' | 'main';
  name?: string;
  bgColor?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  py?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
};

// Helper function to determine if a background color is dark
const isDarkBackground = (className = ''): boolean => {
  // Only the background classes with 'dark.' prefix are dark
  const darkBackgroundPatterns = ['dark.primary', 'dark.gray', 'bg-dark-primary', 'bg-dark-gray'];

  return darkBackgroundPatterns.some(pattern => className.includes(pattern));
};

/**
 * A reusable section component that applies theme colors based on section name
 * and provides consistent spacing and styling across the site.
 */
const Section = ({
  as: Component = 'section',
  name,
  bgColor,
  className = '',
  containerClassName = '',
  children,
  fullWidth = false,
  py = 'lg',
}: SectionProps) => {
  // Get section background color from theme or use provided bgColor
  const sectionBgColor = bgColor || (name ? getSectionBgColor(name) : 'light.white');

  // Get appropriate text colors based on background
  const { text, heading, muted } = getTextColors(sectionBgColor);

  // Generate CSS variables for text colors based on background
  const colorStyle = {
    '--section-bg-color': sectionBgColor,
    '--section-text-color': text,
    '--section-heading-color': heading,
    '--section-muted-color': muted,
  } as React.CSSProperties;

  const paddingClasses = {
    none: '',
    sm: 'py-9',
    md: 'py-14',
    lg: 'py-20',
    xl: 'py-28',
  };

  // Determine if this section has a dark background
  const isDark = useMemo(
    () =>
      isDarkBackground(className) ||
      sectionBgColor.startsWith('dark.') ||
      isDarkBackground(sectionBgColor),
    [className, sectionBgColor]
  );

  // Context value to share with children
  const contextValue = useMemo(() => ({ isDarkBackground: isDark }), [isDark]);

  return (
    <SectionBackgroundContext.Provider value={contextValue}>
      <Component className={`${paddingClasses[py]} ${className}`} style={colorStyle} id={name}>
        {fullWidth ? children : <Container className={containerClassName}>{children}</Container>}
      </Component>
    </SectionBackgroundContext.Provider>
  );
};

// Custom hook to use the section background context
export const useSectionBackground = () => useContext(SectionBackgroundContext);

export default Section;
