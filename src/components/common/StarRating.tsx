import React from 'react';
import { Icon } from '@/components/icons';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  color?: string;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 18,
  color = 'text-yellow-500',
  className = '',
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(maxRating)].map((_, i) => (
        <Icon
          key={i}
          name="star"
          className={`${i < rating ? color : 'text-gray-300'}`}
          size={size}
        />
      ))}
    </div>
  );
};

export default StarRating;
