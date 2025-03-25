'use client';

import { FC } from 'react';
import Carousel from '@/components/common/Carousel';
import OptimizedImage from '@/components/common/OptimizedImage';
import StarRating from '@/components/common/StarRating';
import { siteConfig } from '@/config/site';
import { Icon } from '@/components/icons';

interface TestimonialCarouselProps {
  className?: string;
  autoplay?: boolean;
}

const TestimonialCarousel: FC<TestimonialCarouselProps> = ({
  className = '',
  autoplay = false,
}) => {
  return (
    <div className={`testimonial-carousel ${className}`}>
      <Carousel
        slidesToShow={3}
        mobileSlidesToShow={1}
        autoplay={autoplay}
        autoplaySpeed={5000}
        showDots={true}
        swipe={true}
        draggable={true}
        swipeCursor="grab"
        className="pb-2"
      >
        {siteConfig.testimonials.map(testimonial => (
          <div
            key={testimonial.name}
            className="bg-gray-50 p-6 rounded-xl h-full shadow-sm border border-gray-200"
          >
            <div className="mb-4 flex items-center">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-100 border border-primary-200">
                  <div className="w-full h-full flex items-center justify-center text-primary-700">
                    <Icon name="star" size={24} />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary-800">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <StarRating rating={testimonial.rating} className="mb-3" />
            <p className="text-gray-700 italic">"{testimonial.content}"</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
