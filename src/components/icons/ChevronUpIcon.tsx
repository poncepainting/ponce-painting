import React from 'react';
import { IconProps, baseSvgProps } from './types';

const ChevronUpIcon = (props: IconProps) => (
  <svg {...baseSvgProps(props)}>
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

export default ChevronUpIcon;
