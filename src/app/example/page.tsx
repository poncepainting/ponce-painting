'use client';

import { designSystem } from '@/config/theme';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/SectionHeading';
import HeaderAccent from '@/components/ui/HeaderAccent';

/**
 * Example page to demonstrate the use of HeaderAccent and SectionHeading components
 */
export default function ExamplePage() {
  return (
    <main>
      {/* Standard section with SectionHeading */}
      <Section name="primary">
        <SectionHeading 
          title="Section with Accent" 
          subtitle="This section uses the SectionHeading component with default settings"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              The SectionHeading component automatically adds a rounded accent above the heading, 
              matching the border radius defined in our design system.
            </p>
            <p>
              All styling is derived from the central design system configuration, ensuring 
              consistency across the entire site.
            </p>
          </div>
          <div>
            <p className="mb-4">
              If the rounding style changes in the design system, it will automatically update
              everywhere the HeaderAccent or SectionHeading components are used.
            </p>
            <p>
              This approach follows the DRY (Don't Repeat Yourself) principle and enhances 
              maintainability.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Examples of different HeaderAccent styles */}
      <Section>
        <SectionHeading 
          title="Header Accent Examples" 
          subtitle="Different variations of the HeaderAccent component"
          showAccent={false}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Default accent */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <HeaderAccent />
            <h3 className="text-xl font-bold mb-2">Default Accent</h3>
            <p>Primary color, default width and height.</p>
          </div>
          
          {/* Custom color accent */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <HeaderAccent color="bg-secondary-500" />
            <h3 className="text-xl font-bold mb-2">Custom Color</h3>
            <p>Secondary color with default dimensions.</p>
          </div>
          
          {/* Wide accent */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <HeaderAccent width="w-24" height="h-1" />
            <h3 className="text-xl font-bold mb-2">Wide & Thin</h3>
            <p>Wider but thinner accent design.</p>
          </div>
          
          {/* Left-aligned accent */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <HeaderAccent centered={false} />
            <h3 className="text-xl font-bold mb-2">Left Aligned</h3>
            <p>Accent aligned to the left instead of centered.</p>
          </div>
          
          {/* Custom gradient accent */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <HeaderAccent color="bg-gradient-to-r from-primary-500 to-secondary-500" />
            <h3 className="text-xl font-bold mb-2">Gradient</h3>
            <p>Custom gradient background using Tailwind classes.</p>
          </div>
          
          {/* Taller accent */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <HeaderAccent height="h-3" />
            <h3 className="text-xl font-bold mb-2">Taller Accent</h3>
            <p>A taller accent for more emphasis.</p>
          </div>
        </div>
      </Section>
      
      {/* Design System Reference */}
      <Section bgColor="#f8f9fa">
        <SectionHeading 
          title="Design System Border Radius" 
          subtitle="Reference of border radius values used across the site"
          accentColor="bg-gray-400"
        />
        
        <div className="overflow-x-auto">
          <table className="w-full mt-8 bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Component</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Border Radius Class</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preview</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {Object.entries(designSystem.borderRadius).map(([key, value]) => (
                <tr key={key}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {value}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div 
                      className={`w-16 h-8 bg-primary-500 ${value}`} 
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </main>
  );
} 