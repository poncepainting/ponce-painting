/**
 * Icon component types
 * Type definitions for icon components
 */

import { CSSProperties, SVGProps } from 'react';

export type IconProps = {
  className?: string;
  size?: number;
  color?: string;
  style?: CSSProperties;
};

export type IconName =
  | 'check-circle'
  | 'clock'
  | 'users'
  | 'menu'
  | 'x'
  | 'phone'
  | 'mail'
  | 'map-pin'
  | 'facebook'
  | 'twitter'
  | 'instagram'
  | 'linkedin'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevron-down'
  | 'plus'
  | 'minus'
  | 'eye'
  | 'message-square'
  | 'home'
  | 'building'
  | 'palette'
  | 'star';

// Common SVG attributes for consistent rendering
export const baseSvgProps = (props: IconProps): SVGProps<SVGSVGElement> => ({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  width: props.size || 24,
  height: props.size || 24,
  className: props.className,
  style: props.color ? { color: props.color, ...props.style } : props.style,
});
