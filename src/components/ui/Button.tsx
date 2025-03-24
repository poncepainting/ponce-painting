'use client';

import { forwardRef, KeyboardEvent } from 'react';
import Link from 'next/link';
import { Icon } from '@/config/icons';
import { buttonConfig } from '@/config/buttons';
import { ButtonProps, ButtonVariant, ButtonSize } from '@/types/buttons';

// Export types for backward compatibility
export type { ButtonVariant, ButtonSize } from '@/types/buttons';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      href,
      className = '',
      leftIcon,
      rightIcon,
      icon,
      iconOnly = false,
      fullWidth = false,
      isLoading = false,
      disabled = false,
      iconClassName = '',
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;
    const iconToShow = icon || leftIcon;
    const isTextVariant = variant === 'text';

    // Get the padding CSS directly based on size and icon status
    const getPaddingClasses = () => {
      if (isTextVariant) return 'p-0';
      if (iconOnly) {
        if (size === 'sm') return 'p-2';
        if (size === 'md') return 'p-3';
        return 'p-4'; // lg
      }
      if (size === 'sm') return 'px-4 py-2';
      if (size === 'md') return 'px-6 py-3';
      return 'px-8 py-4'; // lg
    };
    
    // Apply padding directly as inline style to ensure it can't be overridden
    const paddingStyle = {
      padding: iconOnly 
        ? (size === 'sm' ? '0.5rem' : size === 'md' ? '0.75rem' : '1rem')  // p-2, p-3, p-4
        : undefined,
      paddingLeft: !iconOnly && !isTextVariant 
        ? (size === 'sm' ? '1rem' : size === 'md' ? '1.5rem' : '2rem')  // px-4, px-6, px-8
        : undefined,
      paddingRight: !iconOnly && !isTextVariant
        ? (size === 'sm' ? '1rem' : size === 'md' ? '1.5rem' : '2rem')  // px-4, px-6, px-8
        : undefined,
      paddingTop: !iconOnly && !isTextVariant
        ? (size === 'sm' ? '0.5rem' : size === 'md' ? '0.75rem' : '1rem')  // py-2, py-3, py-4
        : undefined,
      paddingBottom: !iconOnly && !isTextVariant
        ? (size === 'sm' ? '0.5rem' : size === 'md' ? '0.75rem' : '1rem')  // py-2, py-3, py-4
        : undefined,
    };

    // Font size based on button size
    const fontSizeClass = size === 'sm' ? 'text-sm' : 'text-base';
    
    // Layout styles
    const layoutStyles = 'inline-flex items-center justify-center';
    
    // Typography styles 
    const typographyStyles = `font-medium ${fontSizeClass}`;
    
    // Visual styles
    const cornerStyles = iconOnly 
      ? buttonConfig.defaults.roundedIcon 
      : buttonConfig.defaults.rounded;
      
    const transitionStyles = 'transition-colors duration-200';
    
    // Variant styles (colors, etc.)
    const variantStyles = isDisabled
      ? buttonConfig.variants[variant].disabled
      : buttonConfig.variants[variant].base;
    
    // Width styles
    const widthStyles = fullWidth ? 'w-full' : '';
    
    // Join all styles together
    const buttonStyles = [
      layoutStyles,
      typographyStyles,
      cornerStyles,
      transitionStyles,
      getPaddingClasses(), // Apply padding classes for Tailwind
      variantStyles,
      widthStyles,
      className,
    ]
      .filter(Boolean)
      .join(' ')
      .trim();

    // Content generation
    const generateContent = () => {
      if (isLoading) {
        return (
          <>
            <span
              className={`${!iconOnly ? buttonConfig.icons.leftIconMargin : ''} inline-block animate-spin`}
            >
              <Icon
                name="clock"
                className={iconOnly ? buttonConfig.icons.defaultSize : buttonConfig.icons.smallSize}
              />
            </span>
            {!iconOnly && 'Loading...'}
          </>
        );
      }

      if (iconOnly && iconToShow) {
        return (
          <Icon
            name={iconToShow}
            className={`${buttonConfig.icons.defaultSize} ${iconClassName}`}
          />
        );
      }

      return (
        <>
          {leftIcon && (
            <Icon
              name={leftIcon}
              className={`${buttonConfig.icons.leftIconMargin} ${buttonConfig.icons.defaultSize} ${iconClassName}`}
            />
          )}
          {children}
          {rightIcon && (
            <Icon
              name={rightIcon}
              className={`${buttonConfig.icons.rightIconMargin} ${buttonConfig.icons.defaultSize} ${iconClassName}`}
            />
          )}
        </>
      );
    };

    const content = generateContent();
    const accessibilityProps = {
      'aria-label': ariaLabel || (typeof children === 'string' ? children : undefined),
    };

    // Handle keyboard events for accessibility
    const handleKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.currentTarget.click();
      }
    };

    // Render as Link if href is provided
    if (href && !isDisabled) {
      return (
        <Link
          href={href}
          className={buttonStyles}
          style={paddingStyle}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          {...(iconOnly ? accessibilityProps : {})}
        >
          {content}
        </Link>
      );
    }

    // Render as button
    return (
      <button
        ref={ref}
        className={buttonStyles}
        style={paddingStyle}
        disabled={isDisabled}
        {...(iconOnly ? accessibilityProps : {})}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
