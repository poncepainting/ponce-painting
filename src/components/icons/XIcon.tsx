import React from 'react';
import { IconProps, baseSvgProps } from './types';

const XIcon = (props: IconProps) => (
  <svg {...baseSvgProps(props)}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default XIcon;
