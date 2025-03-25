import React from 'react';
import { IconProps, baseSvgProps } from './types';

const ChevronLeftIcon = (props: IconProps) => (
  <svg {...baseSvgProps(props)}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export default ChevronLeftIcon;
