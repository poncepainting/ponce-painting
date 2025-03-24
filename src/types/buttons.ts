import { ReactNode, ButtonHTMLAttributes } from 'react';
import type { IconName } from '@/config/icons';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface BaseButtonProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
  icon?: IconName;
  iconOnly?: boolean;
  fullWidth?: boolean;
  isLoading?: boolean;
  iconClassName?: string;
  'aria-label'?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseButtonProps {
  // Additional button-specific props can be added here
}

export interface InteractiveButtonProps extends BaseButtonProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  target?: string;
  rel?: string;
}
