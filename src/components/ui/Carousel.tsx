'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { themeConfig } from '@/config/theme';
import { generateCarouselStyles, CustomPaging } from '@/utils';

// Import slick required CSS
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface CarouselProps {
  /** Children to be rendered as slides */
  children: React.ReactNode;
  /** Optional custom className for the carousel container */
  className?: string;
  /** Number of slides to show at once on desktop (default: 3) */
  slidesToShow?: number;
  /** Number of slides to show at once on mobile (default: 1) */
  mobileSlidesToShow?: number;
  /** Number of slides to scroll per navigation (default: 1) */
  slidesToScroll?: number;
  /** Whether to automatically cycle through slides (default: false) */
  autoplay?: boolean;
  /** Delay between each auto scroll (ms) */
  autoplaySpeed?: number;
  /** Whether to show navigation dots (default: true) */
  showDots?: boolean;
  /** Whether to infinitely loop the carousel (default: true) */
  infinite?: boolean;
  /** Whether to center slides (default: false) */
  centerMode?: boolean;
  /** Add padding when in center mode (default: 50px) */
  centerPadding?: string;
  /** Breakpoint for switching from desktop to mobile view (default: md) */
  breakpoint?: 'sm' | 'md' | 'lg' | 'xl';
  /** Whether to enable swipe on touch devices (default: true) */
  swipe?: boolean;
  /** Whether to enable drag with cursor (default: true) */
  draggable?: boolean;
  /** CSS cursor type when dragging (default: grab) */
  swipeCursor?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  className = '',
  slidesToShow = 3,
  mobileSlidesToShow = 1,
  slidesToScroll = 1,
  autoplay = false,
  autoplaySpeed = 3000,
  showDots = true,
  infinite = true,
  centerMode = false,
  centerPadding = '50px',
  breakpoint = 'md',
  swipe = true,
  draggable = true,
  swipeCursor = 'grab',
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  // Get the numerical breakpoint value
  const getBreakpointValue = () => {
    const breakpointMap: { [key: string]: string } = themeConfig.breakpoints;
    return parseInt(breakpointMap[breakpoint] || breakpointMap.md);
  };

  // Check if we're on desktop or mobile based on the breakpoint
  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= getBreakpointValue());
    };

    // Check on mount and when window resizes
    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);
    setIsMounted(true);

    return () => {
      window.removeEventListener('resize', checkIfDesktop);
    };
  }, [breakpoint]);

  // Configure carousel settings
  const settings = {
    dots: showDots,
    dotsClass: 'slick-dots non-clickable-dots',
    customPaging: () => <CustomPaging />,
    infinite: infinite,
    speed: 500,
    slidesToShow: isDesktop ? slidesToShow : mobileSlidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    arrows: false,
    centerMode: centerMode,
    centerPadding: centerMode ? centerPadding : '0',
    swipe: swipe,
    draggable: draggable,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: getBreakpointValue(),
        settings: {
          slidesToShow: mobileSlidesToShow,
          slidesToScroll: 1,
          centerMode: centerMode,
          centerPadding: centerMode ? '30px' : '0',
        },
      },
    ],
    className: `carousel-container ${className}`,
  };

  // Get carousel styles from utility
  const carouselStyles = generateCarouselStyles(swipe ? swipeCursor : 'default');

  if (!isMounted) {
    // SSR-friendly version before client hydration
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <div className="flex flex-nowrap">
          {React.Children.map(children, (child, index) => {
            if (index < slidesToShow) {
              return (
                <div
                  className={`${isDesktop ? `w-1/${slidesToShow}` : 'w-full'} flex-shrink-0 px-2`}
                >
                  {child}
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }

  return (
    <>
      <style jsx global>
        {carouselStyles}
      </style>
      <div className="relative w-full">
        <Slider {...settings}>
          {React.Children.map(children, child => (
            <div className="px-2 h-full">{child}</div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
