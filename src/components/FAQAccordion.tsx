'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/config/icons';
import { FAQItem } from '@/config/faq';
import { useSectionBackground } from './ui/Section';

interface FAQAccordionProps {
  item: FAQItem;
  index: number;
}

const FAQAccordion = ({ item, index }: FAQAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkBackground } = useSectionBackground();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Determine appropriate colors based on background context
  const colors = {
    border: isDarkBackground ? 'border-gray-600' : 'border-gray-200',
    background: isDarkBackground ? 'bg-dark-gray/20' : 'bg-gray-50',
    questionText: isDarkBackground ? 'text-white' : 'text-primary-800',
    answerText: isDarkBackground ? 'text-white/80' : 'text-gray-600',
    iconActive: isDarkBackground ? 'text-white' : 'text-primary-600',
    iconInactive: isDarkBackground ? 'text-white/60' : 'text-primary-400',
    focusRing: isDarkBackground ? 'focus:ring-white/30' : 'focus:ring-gray-200',
  };

  return (
    <div 
      className={`border-b ${colors.border} ${isOpen ? colors.background : ''}`}
      data-testid={`faq-item-${index}`}
    >
      <button
        className={`w-full text-left py-5 px-4 flex items-center justify-between focus:outline-none focus:ring-2 ${colors.focusRing} focus:ring-inset`}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <h3 className={`text-lg font-medium ${colors.questionText}`}>{item.question}</h3>
        <span className="ml-4 flex-shrink-0">
          <Icon
            name={isOpen ? 'minus' : 'plus'}
            className={`h-5 w-5 transition-colors duration-200 ${
              isOpen ? colors.iconActive : colors.iconInactive
            }`}
          />
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-5 px-4">
              <p className={`text-base ${colors.answerText}`}>{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQAccordion; 