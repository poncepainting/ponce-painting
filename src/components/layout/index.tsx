import React, { ReactNode } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Head from 'next/head';

interface SiteLayoutProps {
  children: ReactNode;
  fontClass: string;
}

export const SiteLayout = ({ children, fontClass }: SiteLayoutProps) => {
  return (
    <body className={`${fontClass} min-h-screen flex flex-col`}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </body>
  );
};

interface SiteHeadProps {
  schemas: object[];
}

export const SiteHead = ({ schemas }: SiteHeadProps) => {
  return (
    <Head>
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </Head>
  );
};
