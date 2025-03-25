'use client';

import HeroSection from '@/components/HeroSection';
import Section from '@/components/ui/Section';
import SectionHeading from '@/components/SectionHeading';
import HeaderAccent from '@/components/ui/HeaderAccent';
import { designSystem } from '@/config/theme';

/**
 * Example page to demonstrate the HeaderAccent component
 */
export default function HeaderAccentsPage() {
  return (
    <main>
      <HeroSection
        title="Header Accents"
        subtitle="Consistently styled accent elements for headers"
        imageUrl="/images/hero/hero-image.jpg"
        imageAlt="Header accents example"
        primaryCTA={{
          text: 'View Examples',
          href: '#examples',
        }}
        secondaryCTA={{
          text: 'Design System',
          href: '#design-system',
        }}
        height="medium"
      />

      <Section>
        <div id="examples">
          <SectionHeading
            title="Header Accent Examples"
            subtitle="Different ways to use the HeaderAccent component"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Default accent */}
            <div className="p-8 bg-white rounded-xl shadow-md">
              <HeaderAccent />
              <h3 className="text-xl font-bold mb-4">Default Accent</h3>
              <p className="text-gray-600">
                The default HeaderAccent uses primary brand color with standard dimensions.
              </p>
              <pre className="mt-4 bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                {`<HeaderAccent />`}
              </pre>
            </div>

            {/* Custom color accent */}
            <div className="p-8 bg-white rounded-xl shadow-md">
              <HeaderAccent color="bg-secondary-500" />
              <h3 className="text-xl font-bold mb-4">Custom Color</h3>
              <p className="text-gray-600">
                Easily change the color using any Tailwind color class.
              </p>
              <pre className="mt-4 bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                {`<HeaderAccent color="bg-secondary-500" />`}
              </pre>
            </div>

            {/* Wide accent */}
            <div className="p-8 bg-white rounded-xl shadow-md">
              <HeaderAccent width="w-24" height="h-1" />
              <h3 className="text-xl font-bold mb-4">Custom Dimensions</h3>
              <p className="text-gray-600">
                Adjust width and height for different visual emphasis.
              </p>
              <pre className="mt-4 bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                {`<HeaderAccent width="w-24" height="h-1" />`}
              </pre>
            </div>

            {/* Left-aligned accent */}
            <div className="p-8 bg-white rounded-xl shadow-md">
              <HeaderAccent centered={false} />
              <h3 className="text-xl font-bold mb-4">Left Aligned</h3>
              <p className="text-gray-600">
                Align the accent to the left for left-aligned headers.
              </p>
              <pre className="mt-4 bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                {`<HeaderAccent centered={false} />`}
              </pre>
            </div>

            {/* Gradient accent */}
            <div className="p-8 bg-white rounded-xl shadow-md">
              <HeaderAccent color="bg-gradient-to-r from-primary-500 to-secondary-500" />
              <h3 className="text-xl font-bold mb-4">Gradient Accent</h3>
              <p className="text-gray-600">
                Use Tailwind gradient classes for more visual interest.
              </p>
              <pre className="mt-4 bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                {`<HeaderAccent color="bg-gradient-to-r from-primary-500 to-secondary-500" />`}
              </pre>
            </div>

            {/* Custom class accent */}
            <div className="p-8 bg-white rounded-xl shadow-md">
              <HeaderAccent className="shadow-sm" height="h-3" />
              <h3 className="text-xl font-bold mb-4">Custom Classes</h3>
              <p className="text-gray-600">
                Add any additional Tailwind classes via the className prop.
              </p>
              <pre className="mt-4 bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                {`<HeaderAccent className="shadow-sm" height="h-3" />`}
              </pre>
            </div>

            {/* Subheading accent with text */}
            <div className="p-8 bg-white rounded-xl shadow-md">
              <HeaderAccent useAsSubheading text="NEW FEATURE" color="bg-secondary-600" />
              <h3 className="text-xl font-bold mb-4">Subheading Text</h3>
              <p className="text-gray-600">Use the accent as a subheading with text content.</p>
              <pre className="mt-4 bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                {`<HeaderAccent 
  useAsSubheading 
  text="NEW FEATURE" 
  color="bg-secondary-600"
/>`}
              </pre>
            </div>
          </div>
        </div>
      </Section>

      <Section bgColor="#f8f9fa">
        <div id="design-system">
          <SectionHeading
            title="Design System Integration"
            subtitle="How header accents connect to your design system"
            accentColor="bg-gray-400"
          />

          <div className="mt-8 p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Border Radius Consistency</h3>
            <p className="mb-4">
              The HeaderAccent component automatically uses the border radius defined in your design
              system. This ensures visual consistency across your entire application.
            </p>

            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <h4 className="font-bold mb-2">Current Design System Settings:</h4>
              <pre className="bg-white p-3 rounded overflow-x-auto">
                {`// From design system (theme.ts)
export const designSystem = {
  borderRadius: {
    header: "${designSystem.borderRadius.header}",
    button: "${designSystem.borderRadius.button}",
    card: "${designSystem.borderRadius.card}",
    // ...other values
  }
}`}
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Using with SectionHeading</h3>
              <p className="mb-4">
                The SectionHeading component incorporates HeaderAccent for a complete solution:
              </p>
              <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                {`<SectionHeading
  title="My Section Title"
  subtitle="Optional subtitle text"
  showAccent={true}
  accentColor="bg-primary-500"
  centered={true}
/>`}
              </pre>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Benefits</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Consistent styling across all headers</li>
                <li>Single source of truth for border radius values</li>
                <li>Easy to update entire site by changing design system</li>
                <li>Configurable appearance with sensible defaults</li>
                <li>Maintains consistent spacing and proportions</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
