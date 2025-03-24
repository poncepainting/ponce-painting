import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Cookie Policy | ${siteConfig.name}`,
  description: 'Learn how we use cookies and similar technologies.',
};

export default function CookiePolicyPage() {
  const lastUpdated = 'January 1, 2023'; // Update this with your actual date

  return (
    <main>
      <Section name="cookies-hero" className="bg-gray-50">
        <SectionHeading
          title="Cookie Policy"
          subtitle="How we use cookies and similar technologies on our website"
          centered
        />
      </Section>

      <Section name="cookies-content" bgColor="light.white">
        <Container className="max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <p className="text-sm text-gray-500 mb-8">Last Updated: {lastUpdated}</p>

            <section className="mb-12">
              <h2>Introduction</h2>
              <p>
                This Cookie Policy explains how {siteConfig.name} ("<strong>we</strong>", "<strong>our</strong>", or "<strong>us</strong>") 
                uses cookies and similar technologies when you visit our website at <a href={siteConfig.url}>{siteConfig.url}</a>.
              </p>
              <p>
                This Cookie Policy should be read alongside our <Link href="/privacy" className="text-primary-600 hover:text-primary-800">Privacy Policy</Link> and 
                our <Link href="/terms" className="text-primary-600 hover:text-primary-800">Terms of Service</Link>.
              </p>
            </section>

            <section className="mb-12">
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your computer, tablet, mobile phone, or other device when you visit a website. 
                They are widely used to make websites work more efficiently, provide a better user experience, and give website owners information 
                about how the site is being used.
              </p>
              <p>
                Cookies may be set by the website you are visiting (first-party cookies) or by other websites that provide content on the page 
                you are viewing (third-party cookies).
              </p>
            </section>

            <section className="mb-12">
              <h2>Types of Cookies We Use</h2>
              <p>We use the following types of cookies on our website:</p>

              <h3>Essential Cookies</h3>
              <p>
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure areas, 
                and shopping carts. The website cannot function properly without these cookies, and they can only be disabled by changing your 
                browser preferences.
              </p>

              <h3>Performance and Analytics Cookies</h3>
              <p>
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. 
                They help us improve the functionality and user experience of our website.
              </p>

              <h3>Functionality Cookies</h3>
              <p>
                These cookies allow our website to remember choices you make (such as your username, language, or region) and provide enhanced, 
                personalized features. They may also be used to provide services you have requested, such as watching a video or commenting on a blog.
              </p>

              <h3>Targeting/Advertising Cookies</h3>
              <p>
                These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the 
                number of times you see an advertisement and help measure the effectiveness of advertising campaigns. They are usually placed by 
                advertising networks with the website operator's permission.
              </p>
            </section>

            <section className="mb-12">
              <h2>Third-Party Cookies</h2>
              <p>
                We may allow third parties to place cookies on your device through our website. These third parties may include analytics providers, 
                advertising networks, and social media platforms. The third-party cookies enable these services to track your activity over time and 
                across websites.
              </p>
              <p>
                Please note that these third parties have their own privacy policies, and we do not accept any responsibility or liability for these 
                policies or the third parties' practices.
              </p>
            </section>

            <section className="mb-12">
              <h2>How to Manage Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to 
                set cookies, you may impact your overall user experience and certain features of our website may not function properly.
              </p>
              <p>To manage cookies through your web browser, you can:</p>
              <ul>
                <li><strong>Google Chrome</strong>: Menu &gt; Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                <li><strong>Mozilla Firefox</strong>: Menu &gt; Options &gt; Privacy & Security &gt; Cookies and Site Data</li>
                <li><strong>Safari</strong>: Preferences &gt; Privacy &gt; Cookies and website data</li>
                <li><strong>Microsoft Edge</strong>: Menu &gt; Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
              </ul>
              <p>
                Additionally, you can opt out of some third-party cookies directly on the third party's website.
              </p>
            </section>

            <section className="mb-12">
              <h2>Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes 
                will be posted on this page with an updated "Last Updated" date at the top of this page. We encourage you to review this Cookie Policy 
                periodically to stay informed about our use of cookies.
              </p>
            </section>

            <section className="mb-12">
              <h2>Contact Us</h2>
              <p>
                If you have any questions or concerns about our Cookie Policy or our use of cookies, please contact us at:
              </p>
              <p>
                Email: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a><br />
                Phone: <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a><br />
                Address: {siteConfig.contact.address}
              </p>
            </section>
          </div>
        </Container>
      </Section>
    </main>
  );
} 