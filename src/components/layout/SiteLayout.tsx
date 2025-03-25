import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomFloatingMenu from '@/components/BottomFloatingMenu';
import PageTransition from '@/components/ui/PageTransition';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

interface SiteLayoutProps {
  children: React.ReactNode;
  fontClass: string;
}

/**
 * SiteLayout component that handles the main site structure
 * This provides better organization of the overall layout structure
 */
const SiteLayout: React.FC<SiteLayoutProps> = ({ children, fontClass }) => {
  return (
    <body className={`${fontClass} antialiased bg-white font-sans`}>
      <Header />
      <main className="pt-16 md:pt-20 bg-white min-h-screen">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <BottomFloatingMenu />
      <div className="h-12 md:h-0" aria-hidden="true"></div>
      <Analytics />
      <SpeedInsights />
    </body>
  );
};

export default SiteLayout;
