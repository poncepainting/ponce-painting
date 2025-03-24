import React from 'react';
import { IconProps, baseSvgProps } from './types';

const ClockIcon = (props: IconProps) => (
  <svg {...baseSvgProps(props)}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default ClockIcon;
