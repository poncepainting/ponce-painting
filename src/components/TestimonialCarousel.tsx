'use client';

import { FC } from 'react';
import Carousel from './ui/Carousel';
import OptimizedImage from './ui/OptimizedImage';
import { siteConfig } from '@/config/site';
import { imageSizes } from '@/config/images';

interface TestimonialCarouselProps {
  className?: string;
  autoplay?: boolean;
}

const TestimonialCarousel: FC<TestimonialCarouselProps> = ({ 
  className = '',
  autoplay = false
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
          <div key={testimonial.id} className="bg-gray-50 p-6 rounded-xl h-full shadow-sm border border-gray-200">
            <div className="mb-4 flex items-center">
              <div className="flex-shrink-0 mr-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  {testimonial.imageUrl ? (
                    <OptimizedImage
                      src={testimonial.imageUrl}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-primary-700">
                      {testimonial.author.charAt(0)}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <h4 className="font-bold text-primary-800">{testimonial.author}</h4>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel; 