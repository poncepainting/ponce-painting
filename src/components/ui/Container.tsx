'use client';

import { themeConfig } from '@/config/theme';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  fullWidth?: boolean;
  noPadding?: boolean;
};

/**
 * Container component that applies consistent max width and padding
 * to all sections of the site.
 */
const Container = ({
  children,
  className = '',
  as: Component = 'div',
  fullWidth = false,
  noPadding = false,
}: ContainerProps) => {
  // Use the site width configuration from themeConfig
  const { maxWidth } = themeConfig.siteWidth;

  // Determine container styling based on props
  const containerStyle = fullWidth ? {} : { maxWidth };

  // Padding classes
  const paddingClasses = noPadding ? '' : 'px-4 sm:px-6 lg:px-8';

  return (
    <Component className={`mx-auto w-full ${paddingClasses} ${className}`} style={containerStyle}>
      {children}
    </Component>
  );
};

export default Container;
