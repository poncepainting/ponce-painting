import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import Section from '@/components/ui/Section';
import SEO from '@/components/SEO';
import Button from '@/components/ui/Button';

export const metadata = {
  title: `Thank You | ${siteConfig.name}`,
  description: 'Thank you for contacting us. We will get back to you shortly.',
};

export default function ThankYouPage() {
  return (
    <main>
      {/* SEO Component with noindex, nofollow */}
      <SEO
        title={metadata.title}
        description={metadata.description}
        canonical="/thank-you"
        noIndex={true}
        noFollow={true}
        additionalMetaTags={[{ name: 'robots', content: 'noindex, nofollow' }]}
      />

      <Section name="thank-you">
        <div className="text-center py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Thank You!</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your message has been received. We appreciate your interest and will get back to you
            shortly.
          </p>
          <Button href="/" variant="primary">
            Return to Home
          </Button>
        </div>
      </Section>
    </main>
  );
}
