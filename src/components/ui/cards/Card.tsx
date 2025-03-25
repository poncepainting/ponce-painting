import React from 'react';
import { useThemeStyles } from '@/utils/themeUtils';
import { themeConfig } from '@/config/theme';
import { componentSpacing } from '@/config/theme/spacing';
import { getCssColorVariable } from '@/utils/themeUtils';

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
  // Get padding value from theme configuration
  const paddingValue = componentSpacing.card.padding[padding] as keyof typeof themeConfig.spacing;

  // Apply theme styles
  const { style, className: themeClassName } = useThemeStyles({
    backgroundColor,
    textColor,
    padding: paddingValue,
    rounded: rounded === 'none' ? 'none' : rounded,
    border,
    borderColor,
    shadow,
  });

  // Add hover effects if needed
  const hoverClasses = hover
    ? `transition-all duration-200 hover:shadow-md hover:border-[${getCssColorVariable('gray.300')}]`
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
