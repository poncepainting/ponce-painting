'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils';
import { FAQItem } from '@/types/faq';

interface FAQAccordionProps {
  item: FAQItem;
  _index: number;
}

const FAQAccordion = ({ item, _index }: FAQAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex w-full items-center justify-between py-4 px-6 text-left hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-${item.id}`}
      >
        <span className="text-lg font-medium text-gray-900">{item.question}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 text-gray-500 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        id={`faq-${item.id}`}
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
      </div>
    </div>
  );
};

export default FAQAccordion;
