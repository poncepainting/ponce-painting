'use client';

import Link from 'next/link';
import Container from '@/components/ui/containers/Container';
import Section from '@/components/ui/containers/Section';
import Button from '@/components/ui/buttons/Button';

/**
 * Simple 404 page without tracking functionality for now
 */
export default function NotFound() {
  return (
    <Section className="py-20">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-8xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>

          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted,
            or never existed.
          </p>

          <div className="space-y-4">
            <Button href="/" variant="primary">
              Return to Home
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-gray-500 text-sm">
            <p>
              If you believe this is an error, please{' '}
              <Link href="/contact" className="text-primary-600 hover:underline">
                contact us
              </Link>{' '}
              and let us know what you were looking for.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
