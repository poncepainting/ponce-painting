import { IconProps, baseSvgProps } from './types';

const StarIcon = (props: IconProps) => {
  return (
    <svg {...baseSvgProps(props)}>
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
};

export default StarIcon;
