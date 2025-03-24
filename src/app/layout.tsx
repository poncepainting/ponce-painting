import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomFloatingMenu from '@/components/BottomFloatingMenu';
import { siteConfig } from '@/config/site';
import { themeConfig } from '@/config/theme';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/config/schema';
import SchemaMarkup from '@/components/SchemaMarkup';
import PageTransition from '@/components/ui/PageTransition';
import { createCssColorVariables } from '@/utils/themeUtils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Load Plus Jakarta Sans font with defined subsetting for optimization
const jakartaSans = Plus_Jakarta_Sans({
  variable: '--font-jakarta-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700', '800'],
  adjustFontFallback: true,
});

// Define viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

// Generate theme CSS variables
const themeCssVariables = createCssColorVariables();

// Define base metadata for all pages
export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: typeof siteConfig.defaultMetadata.title === 'string' 
      ? siteConfig.defaultMetadata.title 
      : `${siteConfig.name} - Professional Painting Services`,
  },
  description: siteConfig.defaultMetadata.description,
  keywords: siteConfig.defaultMetadata.keywords,
  manifest: '/manifest.json',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.defaultMetadata.description,
    images: [
      {
        url: siteConfig.defaultMetadata.openGraph.images[0].url,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.defaultMetadata.description,
    images: [siteConfig.defaultMetadata.openGraph.images[0].url],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate base schema markup for all pages
  const baseSchemas = [generateWebsiteSchema(), generateOrganizationSchema()];

  return (
    <html lang="en">
      <head>
        <SchemaMarkup schemas={baseSchemas} />
        <style dangerouslySetInnerHTML={{ __html: themeCssVariables }} />
      </head>
      <body className={`${jakartaSans.variable} antialiased bg-white font-sans`}>
        <Header />
        <div className="pt-16 md:pt-20 bg-white min-h-screen">
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />
        <BottomFloatingMenu />
        <div className="h-12 md:h-0" aria-hidden="true"></div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
