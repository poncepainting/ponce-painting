import React from 'react';
import { useThemeStyles } from '@/utils/themeUtils';
import { themeConfig } from '@/config/theme';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  border?: boolean;
  hover?: boolean;
  as?: React.ElementType;
  onClick?: () => void;
};

/**
 * Card component with consistent styling based on the theme system
 */
const Card = ({
  children,
  className = '',
  backgroundColor = 'white',
  borderColor = 'gray.200',
  textColor,
  rounded = 'lg',
  shadow = 'none',
  padding = 'lg',
  border = true,
  hover = false,
  as: Component = 'div',
  onClick,
  ...rest
}: CardProps & React.HTMLAttributes<HTMLElement>) => {
  // Get padding value based on size
  const getPaddingValue = (size: string) => {
    switch (size) {
      case 'sm':
        return 4;
      case 'md':
        return 6;
      case 'lg':
        return 8;
      case 'xl':
        return 10;
      case 'none':
        return 0;
      default:
        return 6;
    }
  };

  // Apply theme styles
  const { style, className: themeClassName } = useThemeStyles({
    backgroundColor,
    textColor,
    padding: getPaddingValue(padding),
    rounded: rounded === 'none' ? 'none' : rounded,
    border,
    borderColor,
    shadow,
  });

  // Add hover effects if needed
  const hoverClasses = hover
    ? 'transition-all duration-200 hover:shadow-md hover:border-gray-300'
    : '';

  // Combine all classes
  const combinedClassName = `${themeClassName} ${hoverClasses} ${className}`;

  return (
    <Component className={combinedClassName} style={style} onClick={onClick} {...rest}>
      {children}
    </Component>
  );
};

export default Card;
