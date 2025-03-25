import type { Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/config/schema';
import { ThemeProvider } from '@/components/theme';
import { SiteHead, SiteLayout } from '@/components/layout';
import { generateBaseMetadata } from '@/utils/metadataUtils';

// Load Plus Jakarta Sans font with defined subsetting for optimization
const jakartaSans = Plus_Jakarta_Sans({
  variable: '--font-jakarta-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700', '800'],
  adjustFontFallback: false,
});

// Define viewport settings
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
  viewportFit: 'cover',
  colorScheme: 'light',
  userScalable: true,
};

// Use the metadata utility to generate base metadata
export const metadata = generateBaseMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate base schema markup for all pages
  const baseSchemas = [generateWebsiteSchema(), generateOrganizationSchema()];

  return (
    <html lang="en" className={jakartaSans.variable}>
      <SiteHead schemas={baseSchemas} />
      <ThemeProvider>
        <SiteLayout>{children}</SiteLayout>
      </ThemeProvider>
    </html>
  );
}
