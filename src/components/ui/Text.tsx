import React from 'react';
import { getTextStyleClass } from '@/utils/themeUtils';
import { themeConfig } from '@/config/theme';

type TextStyleType = keyof typeof themeConfig.typography.textStyles;

// Define a type that can handle any HTML element attributes
type TextProps<E extends React.ElementType = React.ElementType> = {
  children: React.ReactNode;
  variant?: TextStyleType;
  as?: E;
  className?: string;
} & React.ComponentPropsWithoutRef<E>;

/**
 * Text component that applies consistent text styling based on the theme
 */
const Text = <E extends React.ElementType = 'p'>({
  children,
  variant = 'body',
  as,
  className = '',
  ...rest
}: TextProps<E>) => {
  const Component = as || getDefaultElementForVariant(variant);
  const textStyleClass = getTextStyleClass(variant);
  
  return (
    <Component className={`${textStyleClass} ${className}`} {...rest}>
      {children}
    </Component>
  );
};

/**
 * Helper function to get the default HTML element based on the text variant
 */
function getDefaultElementForVariant(variant: TextStyleType): React.ElementType {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    case 'bodyLarge':
    case 'body':
    case 'bodySmall':
      return 'p';
    case 'overline':
      return 'span';
    case 'button':
      return 'span';
    case 'link':
      return 'a';
    case 'caption':
      return 'span';
    default:
      return 'p';
  }
}

export default Text; 