import React from 'react';

/**
 * Carousel CSS styles as template literals
 * This allows for dynamic styling while keeping the component code clean
 */

export const generateCarouselStyles = (swipeCursor = 'grab') => `
  .carousel-container .non-clickable-dots {
    bottom: -14px;
    pointer-events: none;
    display: flex !important;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .carousel-container .non-clickable-dots li {
    margin: 0 1.62px;
  }
  
  .carousel-container .non-clickable-dots .custom-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--color-primary-200);
    opacity: 0.5;
  }
  
  .carousel-container .non-clickable-dots .slick-active .custom-dot {
    opacity: 1;
    background-color: var(--color-primary-600);
  }
  
  .carousel-container .slick-track {
    display: flex !important;
  }
  
  .carousel-container .slick-slide {
    height: inherit !important;
    display: flex !important;
  }
  
  .carousel-container .slick-slide > div {
    display: flex;
    width: 100%;
    height: 100%;
  }
  
  .carousel-container {
    padding-bottom: 20px;
  }
  
  .carousel-container .slick-list {
    cursor: ${swipeCursor};
  }
  
  .carousel-container .slick-list:active {
    cursor: ${swipeCursor === 'grab' ? 'grabbing' : swipeCursor};
  }
`;

// Component for non-clickable carousel paging dots
export const CustomPaging: React.FC = () => {
  return <div className="custom-dot" />;
};
