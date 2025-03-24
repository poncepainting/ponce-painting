import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: `Accessibility Statement | ${siteConfig.name}`,
  description: 'Our commitment to digital accessibility for all users.',
};

export default function AccessibilityPage() {
  const lastUpdated = 'January 1, 2023'; // Update this with your actual date

  return (
    <main>
      <Section name="accessibility-hero" className="bg-gray-50">
        <SectionHeading
          title="Accessibility Statement"
          subtitle="Our commitment to accessibility for all users"
          centered
        />
      </Section>

      <Section name="accessibility-content">
        <Container className="max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <p className="text-sm text-gray-500 mb-8">Last Updated: {lastUpdated}</p>

            <section className="mb-12">
              <h2>Introduction</h2>
              <p>
                {siteConfig.name} is committed to ensuring digital accessibility for people with
                disabilities. We are continually improving the user experience for everyone and
                applying the relevant accessibility standards.
              </p>
            </section>

            <section className="mb-12">
              <h2>Conformance Status</h2>
              <p>
                The Web Content Accessibility Guidelines (WCAG) define requirements for designers
                and developers to improve accessibility for people with disabilities. It defines
                three levels of conformance: Level A, Level AA, and Level AAA.
              </p>
              <p>
                We strive for our website to be compliant with WCAG 2.1 level AA standards. We are
                actively working to increase the accessibility and usability of our website.
              </p>
            </section>

            <section className="mb-12">
              <h2>Measures We Take</h2>
              <p>We take the following measures to ensure accessibility of our website:</p>
              <ul>
                <li>Include accessibility as part of our mission</li>
                <li>Include accessibility throughout our design and development process</li>
                <li>Use appropriate semantic markup to structure our content</li>
                <li>Provide descriptive alt text for images</li>
                <li>Ensure adequate color contrast for text and interface elements</li>
                <li>Ensure keyboard navigation is possible throughout our website</li>
                <li>Provide clear focus indicators for interactive elements</li>
                <li>Test for screen reader compatibility</li>
                <li>Regularly audit our site for accessibility issues</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2>Compatibility with Browsers and Assistive Technologies</h2>
              <p>We aim to support the following browsers and assistive technologies:</p>
              <ul>
                <li>Latest versions of Chrome, Firefox, Safari, and Edge</li>
                <li>Screen readers including NVDA, JAWS, and VoiceOver</li>
                <li>Zoom and other magnification software</li>
                <li>Speech recognition software</li>
                <li>Keyboard-only navigation</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2>Known Limitations</h2>
              <p>
                Despite our best efforts to ensure accessibility of our website, there may be some
                limitations. Below is a list of known limitations that we are currently working to
                resolve:
              </p>
              <ul>
                <li>
                  Some older PDF documents may not be fully accessible. We are working to update
                  these documents.
                </li>
                <li>
                  Some third-party plugins or widgets may not be fully accessible. We are evaluating
                  alternatives where necessary.
                </li>
                <li>Some content may not be fully accessible on very small screen sizes.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2>Feedback</h2>
              <p>
                We welcome your feedback on the accessibility of our website. Please let us know if
                you encounter accessibility barriers on our website. We will make every reasonable
                effort to address the issue.
              </p>
              <p>
                Email: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                <br />
                Phone: <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
                <br />
                Address: {siteConfig.contact.address}
              </p>
            </section>

            <section className="mb-12">
              <h2>Assessment Approach</h2>
              <p>
                {siteConfig.name} assesses the accessibility of our website by the following
                approaches:
              </p>
              <ul>
                <li>Self-evaluation</li>
                <li>External evaluation by accessibility consultants (when applicable)</li>
                <li>User feedback and testing</li>
                <li>Automated testing tools</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2>Formal Approval</h2>
              <p>
                This accessibility statement was approved by the management of {siteConfig.name} on
                [date].
              </p>
            </section>

            <section className="mb-12">
              <h2>Ongoing Improvements</h2>
              <p>
                We are committed to continually improving the accessibility of our website. If you
                encounter any issues or have suggestions for improvements, please contact us using
                the information provided in the "Feedback" section.
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  );
}
