import React from 'react';

const HeadContent = () => {
  return (
    <>
      {/* Resource hints for performance optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* Font stylesheet with proper preconnect */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
        media="print"
        onLoad={() => {
          const self = document.currentScript as HTMLElement;
          if (self) (self as HTMLLinkElement).media = 'all';
        }}
      />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    </>
  );
};

export default HeadContent;
