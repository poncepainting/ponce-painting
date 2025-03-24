'use client';

import { useState } from 'react';
import { FAQItem } from '@/config/faq';
import FAQAccordion from './FAQAccordion';
import { cn } from '@/utils';
import TabButton from './ui/TabButton';

interface FAQSectionProps {
  items: FAQItem[];
  categories?: string[];
  title?: string;
  description?: string;
  className?: string;
}

const FAQSection = ({
  items,
  categories = [],
  title = 'Frequently Asked Questions',
  description = 'Find answers to common questions about our services.',
  className,
}: FAQSectionProps) => {
  // Get unique categories if not provided
  const uniqueCategories = categories.length > 0 
    ? categories 
    : [...new Set(items.map(item => item.category))];
    
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Simplified filtering logic
  const filteredItems = activeCategory === 'All' 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <div className={cn('w-full max-w-4xl mx-auto', className)}>
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">{title}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
      </div>

      {/* Category tabs */}
      {uniqueCategories.length > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <TabButton
            key="All"
            isActive={activeCategory === 'All'}
            onClick={() => setActiveCategory('All')}
          >
            All
          </TabButton>
          
          {uniqueCategories.map((category) => (
            <TabButton
              key={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </TabButton>
          ))}
        </div>
      )}

      {/* FAQ items */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <FAQAccordion key={index} item={item} index={index} />
          ))
        ) : (
          <div className="py-10 px-4 text-center text-gray-500">
            No FAQs found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQSection; 