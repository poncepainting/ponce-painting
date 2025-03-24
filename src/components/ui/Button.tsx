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

    // Base styles
    const baseStyles = [
      !isTextVariant &&
        (iconOnly ? buttonConfig.defaults.roundedIcon : buttonConfig.defaults.rounded),
      buttonConfig.defaults.fontWeight,
      buttonConfig.defaults.transition,
      !isTextVariant && buttonConfig.defaults.display,
    ]
      .filter(Boolean)
      .join(' ');

    // Variant styles
    const variantStyles = isDisabled
      ? buttonConfig.variants[variant].disabled
      : buttonConfig.variants[variant].base;

    // Size styles
    const sizeStyles = isTextVariant
      ? ''
      : iconOnly
        ? buttonConfig.iconSizes[size]
        : buttonConfig.sizes[size];

    // Combined styles
    const buttonStyles = `${baseStyles} ${variantStyles} ${sizeStyles} ${
      fullWidth ? 'w-full' : ''
    } ${isTextVariant ? 'inline-flex items-center' : ''} ${className}`;

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
