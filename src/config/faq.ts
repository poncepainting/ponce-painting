/**
 * FAQ configuration
 * Organized by categories for easy management and display
 */

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = ['General', 'Services', 'Pricing', 'Process'];

export const faqItems: FAQItem[] = [
  // General FAQs
  {
    question: 'How long has your business been operating?',
    answer: 'Our business has been operating for over 10 years, with a proven track record of successful projects and satisfied clients.',
    category: 'General',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide services nationwide, with a focus on major metropolitan areas. For international clients, we offer remote consulting and digital services.',
    category: 'General',
  },
  {
    question: 'Are you insured and licensed?',
    answer: 'We are fully insured and licensed to operate in all the areas we serve. We are happy to provide verification upon request.',
    category: 'General',
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can reach our customer support team via email at support@example.com, by phone at (555) 123-4567, or through the contact form on our website. We aim to respond to all inquiries within 24 hours.',
    category: 'General',
  },

  // Services FAQs
  {
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of services including web development, digital marketing, content creation, SEO optimization, and business consulting. Each service is customizable to meet your specific needs.',
    category: 'Services',
  },
  {
    question: 'Do you offer emergency services?',
    answer: 'Yes, we provide emergency services for critical issues. For urgent matters, please contact our priority support line mentioned in your service agreement.',
    category: 'Services',
  },
  {
    question: 'Can I customize services to my specific needs?',
    answer: 'We will discuss your specific requirements during the initial consultation and tailor our services to meet your unique goals and challenges.',
    category: 'Services',
  },
  {
    question: 'What makes your services different from competitors?',
    answer: 'Our services stand out due to our experienced team, personalized approach, commitment to quality, and excellent post-project support. We focus on delivering results that align with your business objectives.',
    category: 'Services',
  },

  // Pricing FAQs
  {
    question: 'How do you determine pricing for your services?',
    answer: 'Our pricing is based on project scope, complexity, timeline, and required resources. We provide detailed quotes after the initial consultation, so you will know exactly what to expect.',
    category: 'Pricing',
  },
  {
    question: 'Do you offer any discounts or promotions?',
    answer: 'We occasionally offer seasonal promotions and discounts for returning clients or multiple services. Sign up for our newsletter to stay informed about special offers.',
    category: 'Pricing',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and PayPal. For larger projects, we can arrange a payment schedule that works for your budget.',
    category: 'Pricing',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'Our refund policy varies depending on the service. Details are outlined in our service agreement, which you will receive before the project begins.',
    category: 'Pricing',
  },

  // Process FAQs
  {
    question: 'What is your typical process for new clients?',
    answer: 'Our process begins with an initial consultation to understand your needs, followed by a proposal with scope and pricing. Once approved, we develop a project plan, execute the work with regular updates, and complete with a final review and follow-up.',
    category: 'Process',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. Small projects may take a few weeks, while larger ones can extend to several months. We provide estimated timelines during the proposal phase.',
    category: 'Process',
  },
  {
    question: 'What should I do to prepare for your service?',
    answer: 'To prepare, gather any relevant information about your goals, current challenges, brand guidelines, and examples of work you admire. This helps us understand your vision better.',
    category: 'Process',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'We are always available for ongoing support after project completion. We offer various maintenance packages and can provide training for your team if needed.',
    category: 'Process',
  },
];

/**
 * Get FAQ items by category
 * @param category - The category to filter by, or 'all' for all FAQs
 * @returns Array of FAQ items filtered by category, or all FAQs if category is 'all'
 */
export function getFaqByCategory(category: string | 'all' = 'all'): FAQItem[] {
  if (category === 'all') {
    return faqItems;
  }
  
  return faqItems.filter(item => item.category === category);
} 