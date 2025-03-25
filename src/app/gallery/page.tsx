'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { imageSizes, imageQuality } from '@/config/images';
import { Icon } from '@/config/icons';
import { Section } from '@/components/ui/containers';
import { generatePageSchema } from '@/config/schema';
import SEO from '@/components/seo/SEO';
import SchemaMarkup from '@/components/seo/SchemaMarkup';
import { SectionHeading } from '@/components/feature';
import { OptimizedImage } from '@/components/common';
import { Button } from '@/components/ui/buttons';
import { AnimationWrapper } from '@/components/ui/animations';

// Page metadata (for SEO component only, not exported)
const pageMetadata = {
  title: `Gallery | ${siteConfig.name}`,
  description: 'See our portfolio and previous work.',
};

// Sample gallery items - in a real implementation, this would come from a CMS or data source
const galleryItems = [
  {
    id: 'gallery1',
    title: 'Project One',
    description: 'Description of project one showcasing our work.',
    category: 'commercial',
    imageUrl: '/images/placeholders/landscape-placeholder.svg',
  },
  {
    id: 'gallery2',
    title: 'Project Two',
    description: 'Description of project two showcasing our work.',
    category: 'residential',
    imageUrl: '/images/placeholders/landscape-placeholder.svg',
  },
  {
    id: 'gallery3',
    title: 'Project Three',
    description: 'Description of project three showcasing our work.',
    category: 'commercial',
    imageUrl: '/images/placeholders/landscape-placeholder.svg',
  },
  {
    id: 'gallery4',
    title: 'Project Four',
    description: 'Description of project four showcasing our work.',
    category: 'residential',
    imageUrl: '/images/placeholders/landscape-placeholder.svg',
  },
  {
    id: 'gallery5',
    title: 'Project Five',
    description: 'Description of project five showcasing our work.',
    category: 'commercial',
    imageUrl: '/images/placeholders/landscape-placeholder.svg',
  },
  {
    id: 'gallery6',
    title: 'Project Six',
    description: 'Description of project six showcasing our work.',
    category: 'residential',
    imageUrl: '/images/placeholders/landscape-placeholder.svg',
  },
];

// Gallery categories for filtering
const categories = ['all', 'commercial', 'residential'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Filter gallery items based on selected category
  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter(item => item.category === selectedCategory);

  // Handle modal open/close
  const handleOpenModal = (id: string) => {
    setActiveItem(id);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const handleCloseModal = () => {
    setActiveItem(null);
    document.body.style.overflow = ''; // Restore scrolling
  };

  // Generate gallery page schema
  const gallerySchemas = generatePageSchema('gallery');

  return (
    <main>
      {/* SEO Component */}
      <SEO title={pageMetadata.title} description={pageMetadata.description} canonical="/gallery" />

      {/* Schema markup specific to gallery page */}
      <SchemaMarkup schemas={gallerySchemas} />

      <Section name="gallery-hero" className="bg-primary-50">
        <SectionHeading
          title="Our Portfolio"
          subtitle="Browse through our projects and see examples of our work."
          useSubheading={true}
          subheadingText="GALLERY"
          accentColor="primary.600"
        />
      </Section>

      <Section name="gallery-filter" bgColor="light.white" className="py-16">
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => handleOpenModal(item.id)}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
            >
              <div className="relative h-48">
                <OptimizedImage
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  useFill
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <div className="mt-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No projects found</h3>
            <p className="text-gray-500 mb-6">
              There are no projects matching your selected filter.
            </p>
            <Button onClick={() => setSelectedCategory('all')} variant="secondary">
              View All Projects
            </Button>
          </div>
        )}
      </Section>

      {/* CTA Section */}
      <Section name="gallery-cta" className="bg-primary-800 text-white">
        <AnimationWrapper type="slide-up">
          <SectionHeading
            title="Ready to Start Your Project?"
            subtitle="Contact us today to discuss your needs and how we can help you achieve your goals."
            accentColor="primary.200"
            useSubheading={true}
            subheadingText="GET STARTED"
            onDarkBackground={true}
          />
        </AnimationWrapper>

        <AnimationWrapper type="scale" delay={0.2} className="text-center">
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="bg-white text-primary-600 border-white hover:bg-gray-50"
          >
            Contact Us
          </Button>
        </AnimationWrapper>
      </Section>

      {/* Modal for expanded view */}
      {activeItem && (
        <div className="fixed inset-0 bg-primary-800 bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto">
            {/* Close button */}
            <div className="p-4 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="rounded-full p-2 bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal content */}
            {(() => {
              const item = galleryItems.find(item => item.id === activeItem);
              if (!item) return null;

              return (
                <div className="p-4 pt-0">
                  <div className="relative h-64 md:h-80">
                    <OptimizedImage
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      useFill
                      className="rounded-lg"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mt-6">{item.title}</h2>
                  <span className="inline-block mt-2 px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 rounded-full">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                  <p className="mt-4 text-gray-600">{item.description}</p>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold">Project Details</h3>
                    <p className="mt-2 text-gray-600">
                      This is a placeholder for additional project details. In a real
                      implementation, you would include information like the project scope,
                      completion date, client testimonial, and other relevant details.
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Button href="/contact" variant="primary" className="w-full">
                      Discuss a Similar Project
                    </Button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </main>
  );
}
