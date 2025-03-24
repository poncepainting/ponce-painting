'use client';

import { FC } from 'react';
import Carousel from './ui/Carousel';
import OptimizedImage from './ui/OptimizedImage';
import Button from './ui/Button';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

interface ServiceCarouselProps {
  className?: string;
  autoplay?: boolean;
}

const ServiceCarousel: FC<ServiceCarouselProps> = ({ 
  className = '',
  autoplay = false,
}) => {
  return (
    <div className={`service-carousel ${className}`}>
      <Carousel 
        slidesToShow={3} 
        mobileSlidesToShow={1}
        slidesToScroll={1}
        infinite={true}
        showDots={true}
        swipe={true}
        draggable={true}
        swipeCursor="grab"
        autoplay={autoplay}
        className="pb-2"
      >
        {siteConfig.services.map(service => {
          const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '-');
          return (
            <div 
              className="bg-white rounded-xl overflow-hidden border border-gray-200 h-full transition-all duration-300 hover:shadow-md hover:border-gray-300"
              key={service.title}
            >
              <div className="relative h-48">
                <OptimizedImage
                  src={service.imageUrl}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="object-cover"
                  fallbackText="Service image"
                  useFill={true}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services/${serviceSlug}`}
                  className="text-primary-600 hover:text-primary-700"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ServiceCarousel; 