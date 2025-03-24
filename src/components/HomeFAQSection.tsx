'use client';

import { useState } from 'react';
import { getFaqByCategory, faqCategories, faqItems, FAQItem } from '@/config/faq';
import FAQAccordion from './FAQAccordion';
import { cn } from '@/utils';
import Button from '@/components/ui/Button';
import { Icon } from '@/config/icons';
import { useSectionBackground } from './ui/Section';
import TabButton from './ui/TabButton';

interface HomeFAQSectionProps {
  className?: string;
  showHeader?: boolean;
  title?: string;
  description?: string;
  maxItems?: number;
  showCategories?: boolean;
  categories?: string[];
  showAllOption?: boolean;
}

const HomeFAQSection = ({
  className,
  showHeader = false,
  title = 'Frequently Asked Questions',
  description = 'Find quick answers to common questions about our services.',
  maxItems = 4,
  showCategories = false,
  categories = ['General'],
  showAllOption = true,
}: HomeFAQSectionProps) => {
  const [activeCategory, setActiveCategory] = useState(showAllOption ? 'All' : categories[0]);
  const { isDarkBackground } = useSectionBackground();

  // Simplified filtering logic
  let displayFaqs: FAQItem[] = [];

  if (activeCategory === 'All') {
    // Show all FAQs from selected categories
    displayFaqs = faqItems.filter(item => categories.includes(item.category)).slice(0, maxItems);
  } else {
    // Show only FAQs from active category
    displayFaqs = faqItems.filter(item => item.category === activeCategory).slice(0, maxItems);
  }

  // Colors based on background
  const colors = {
    container: isDarkBackground ? 'bg-dark-gray/70 border-gray-600' : 'bg-white border-gray-200',
    divider: isDarkBackground ? 'divide-gray-700' : 'divide-gray-200',
    noFaqsText: isDarkBackground ? 'text-gray-200' : 'text-gray-500',
    contactBg: isDarkBackground ? 'bg-dark-gray/70 border-gray-600' : 'bg-gray-50 border-gray-200',
    contactIconBg: isDarkBackground ? 'bg-dark-primary' : 'bg-white',
    contactIconColor: isDarkBackground ? 'text-white' : 'text-primary-600',
    contactTitle: isDarkBackground ? 'text-white' : 'text-primary-600',
    contactText: isDarkBackground ? 'text-gray-200' : 'text-gray-600',
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Optional Header - only show if showHeader is true */}
      {showHeader && (
        <div className="text-center mb-10">
          <h2
            className={cn(
              'text-3xl font-bold sm:text-4xl mb-4',
              isDarkBackground ? 'text-white' : 'text-primary-600'
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              'text-xl max-w-2xl mx-auto',
              isDarkBackground ? 'text-gray-200' : 'text-gray-600'
            )}
          >
            {description}
          </p>
        </div>
      )}

      {/* Category tabs - only show if showCategories is true and we have multiple categories */}
      {showCategories && (categories.length > 1 || showAllOption) && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {showAllOption && (
            <TabButton
              key="All"
              isActive={activeCategory === 'All'}
              onClick={() => setActiveCategory('All')}
              onDarkBackground={isDarkBackground}
            >
              All
            </TabButton>
          )}

          {categories.map(category => (
            <TabButton
              key={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              onDarkBackground={isDarkBackground}
            >
              {category}
            </TabButton>
          ))}
        </div>
      )}

      {/* FAQ items */}
      <div
        className={`rounded-lg shadow-sm border ${colors.container} divide-y ${colors.divider} mb-8`}
      >
        {displayFaqs.length > 0 ? (
          displayFaqs.map((item, index) => (
            <FAQAccordion
              key={`${item.category}-${item.question.toLowerCase().replace(/\s+/g, '-')}`}
              item={item}
              index={index}
            />
          ))
        ) : (
          <div className={`py-10 px-4 text-center ${colors.noFaqsText}`}>
            No FAQs found for this category.
          </div>
        )}
      </div>

      {/* Have more questions section */}
      <div className={`rounded-xl shadow-sm border p-6 mb-8 text-center ${colors.contactBg}`}>
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
          <div
            className={`rounded-full p-3 mb-4 shadow-sm ${colors.contactIconBg} ${colors.contactIconColor}`}
          >
            <Icon name="mail" size={28} />
          </div>
          <h3 className={`text-2xl font-bold mb-2 ${colors.contactTitle}`}>Have more questions?</h3>
          <p className={`mb-6 ${colors.contactText}`}>
            Our team is ready to help with any additional questions you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button
              href="/contact"
              variant={isDarkBackground ? 'outline' : 'primary'}
              size="lg"
              className={`flex-1 sm:max-w-[160px] flex items-center justify-center gap-2 ${
                isDarkBackground ? '!border-white !text-white hover:!bg-gray-700/50' : ''
              }`}
            >
              Contact Us <Icon name="chevron-right" size={16} />
            </Button>
            <Button
              href="/faq"
              variant={isDarkBackground ? 'outline' : 'primary'}
              size="lg"
              className={`flex-1 sm:max-w-[160px] flex items-center justify-center gap-2 ${
                isDarkBackground ? '!border-white !text-white hover:!bg-gray-700/50' : ''
              }`}
            >
              View All FAQs <Icon name="chevron-right" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFAQSection;
