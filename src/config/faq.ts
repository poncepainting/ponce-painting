/**
 * FAQ configuration
 * Organized by categories for easy management and display
 */

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const faqCategories = [
  {
    id: 'residential',
    name: 'Residential Painting',
    description: 'Common questions about our residential painting services.',
  },
  {
    id: 'commercial',
    name: 'Commercial Painting',
    description: 'Information about our commercial painting services.',
  },
  {
    id: 'process',
    name: 'Our Process',
    description: 'Learn about our painting process and what to expect.',
  },
  {
    id: 'pricing',
    name: 'Pricing & Estimates',
    description: 'Questions about our pricing and estimate process.',
  },
];

export const faqItems: FAQItem[] = [
  // General FAQs
  {
    id: 'general-business-history',
    categoryId: 'general',
    question: 'How long has your business been operating?',
    answer:
      'Our business has been operating for over 10 years, with a proven track record of successful projects and satisfied clients.',
    category: 'General',
  },
  {
    id: 'general-service-areas',
    categoryId: 'general',
    question: 'What areas do you serve?',
    answer:
      'We provide services nationwide, with a focus on major metropolitan areas. For international clients, we offer remote consulting and digital services.',
    category: 'General',
  },
  {
    id: 'general-insurance',
    categoryId: 'general',
    question: 'Are you insured and licensed?',
    answer:
      'We are fully insured and licensed to operate in all the areas we serve. We are happy to provide verification upon request.',
    category: 'General',
  },
  {
    id: 'general-support',
    categoryId: 'general',
    question: 'How can I contact customer support?',
    answer:
      'You can reach our customer support team via email at support@example.com, by phone at (555) 123-4567, or through the contact form on our website. We aim to respond to all inquiries within 24 hours.',
    category: 'General',
  },

  // Services FAQs
  {
    id: 'services-offered',
    categoryId: 'services',
    question: 'What services do you offer?',
    answer:
      'We offer a comprehensive range of services including web development, digital marketing, content creation, SEO optimization, and business consulting. Each service is customizable to meet your specific needs.',
    category: 'Services',
  },
  {
    id: 'services-emergency',
    categoryId: 'services',
    question: 'Do you offer emergency services?',
    answer:
      'Yes, we provide emergency services for critical issues. For urgent matters, please contact our priority support line mentioned in your service agreement.',
    category: 'Services',
  },
  {
    id: 'services-customization',
    categoryId: 'services',
    question: 'Can I customize services to my specific needs?',
    answer:
      'We will discuss your specific requirements during the initial consultation and tailor our services to meet your unique goals and challenges.',
    category: 'Services',
  },
  {
    id: 'services-difference',
    categoryId: 'services',
    question: 'What makes your services different from competitors?',
    answer:
      'Our services stand out due to our experienced team, personalized approach, commitment to quality, and excellent post-project support. We focus on delivering results that align with your business objectives.',
    category: 'Services',
  },

  // Pricing FAQs
  {
    id: 'pricing-determination',
    categoryId: 'pricing',
    question: 'How do you determine pricing for your services?',
    answer:
      'Our pricing is based on project scope, complexity, timeline, and required resources. We provide detailed quotes after the initial consultation, so you will know exactly what to expect.',
    category: 'Pricing',
  },
  {
    id: 'pricing-discounts',
    categoryId: 'pricing',
    question: 'Do you offer any discounts or promotions?',
    answer:
      'We occasionally offer seasonal promotions and discounts for returning clients or multiple services. Sign up for our newsletter to stay informed about special offers.',
    category: 'Pricing',
  },
  {
    id: 'pricing-payment',
    categoryId: 'pricing',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, bank transfers, and PayPal. For larger projects, we can arrange a payment schedule that works for your budget.',
    category: 'Pricing',
  },
  {
    id: 'pricing-refund',
    categoryId: 'pricing',
    question: 'Is there a refund policy?',
    answer:
      'Our refund policy varies depending on the service. Details are outlined in our service agreement, which you will receive before the project begins.',
    category: 'Pricing',
  },

  // Process FAQs
  {
    id: 'process-new-clients',
    categoryId: 'process',
    question: 'What is your typical process for new clients?',
    answer:
      'Our process begins with an initial consultation to understand your needs, followed by a proposal with scope and pricing. Once approved, we develop a project plan, execute the work with regular updates, and complete with a final review and follow-up.',
    category: 'Process',
  },
  {
    id: 'process-timeline',
    categoryId: 'process',
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on scope and complexity. Small projects may take a few weeks, while larger ones can extend to several months. We provide estimated timelines during the proposal phase.',
    category: 'Process',
  },
  {
    id: 'process-preparation',
    categoryId: 'process',
    question: 'What should I do to prepare for your service?',
    answer:
      'To prepare, gather any relevant information about your goals, current challenges, brand guidelines, and examples of work you admire. This helps us understand your vision better.',
    category: 'Process',
  },
  {
    id: 'process-support',
    categoryId: 'process',
    question: 'Do you provide ongoing support after project completion?',
    answer:
      'We are always available for ongoing support after project completion. We offer various maintenance packages and can provide training for your team if needed.',
    category: 'Process',
  },

  // Residential Painting FAQs
  {
    id: 'residential-interior',
    categoryId: 'residential',
    question: 'What residential interior painting services do you offer?',
    answer:
      'We offer comprehensive interior painting services including wall painting, trim work, ceilings, doors, and cabinets. Our services include color consultation, surface preparation, and thorough cleanup. We use high-quality paints and techniques to ensure a lasting finish.',
    category: 'residential',
  },
  {
    id: 'residential-exterior',
    categoryId: 'residential',
    question: 'Do you provide exterior residential painting services?',
    answer:
      'Yes, we specialize in exterior residential painting including siding, trim, decks, and fences. We properly prepare surfaces, use weather-resistant paints, and ensure all work is done safely and efficiently.',
    category: 'residential',
  },

  // Commercial Painting FAQs
  {
    id: 'commercial-interior',
    categoryId: 'commercial',
    question: 'What commercial interior painting services do you provide?',
    answer:
      'Our commercial interior painting services include office spaces, retail locations, and industrial facilities. We work around your business hours to minimize disruption and use commercial-grade paints for durability.',
    category: 'commercial',
  },
  {
    id: 'commercial-exterior',
    categoryId: 'commercial',
    question: 'Can you handle large commercial exterior projects?',
    answer:
      'Yes, we have experience with commercial exterior projects of all sizes. We use industrial-grade equipment and materials, follow safety protocols, and can work around your business schedule.',
    category: 'commercial',
  },

  // Painting Process FAQs
  {
    id: 'process-timeline',
    categoryId: 'process',
    question: 'How long does a typical painting project take?',
    answer:
      'Project timelines vary based on size and complexity. A typical interior room might take 1-2 days, while a complete house exterior could take 3-5 days. We provide detailed timelines during our free estimate.',
    category: 'process',
  },
  {
    id: 'process-prep',
    categoryId: 'process',
    question: 'What preparation work do you do before painting?',
    answer:
      'Our preparation process includes cleaning surfaces, repairing damage, sanding, priming, and protecting surrounding areas. We also move furniture and cover floors when needed. Proper preparation ensures a lasting finish.',
    category: 'process',
  },

  // Pricing FAQs
  {
    id: 'pricing-estimate',
    categoryId: 'pricing',
    question: 'How do you determine painting project costs?',
    answer:
      'We provide free, detailed estimates based on square footage, surface condition, paint quality, and project complexity. Our estimates include all materials, labor, and preparation work.',
    category: 'pricing',
  },
  {
    id: 'pricing-payment',
    categoryId: 'pricing',
    question: 'What payment options do you accept?',
    answer:
      'We accept all major credit cards, checks, and cash. For larger projects, we offer payment plans and can work with your insurance company if needed.',
    category: 'pricing',
  },

  // Process FAQs
  {
    id: 'process-warranty',
    categoryId: 'process',
    question: 'Do you offer any warranties on your work?',
    answer:
      'Yes, we offer a 2-year warranty on all our painting work. This covers peeling, cracking, and other paint failures due to our application. We also provide manufacturer warranties on the paint products we use.',
    category: 'process',
  },
  {
    id: 'process-schedule',
    categoryId: 'process',
    question: 'How do I schedule a painting project?',
    answer:
      "You can schedule a free estimate by calling us at 337-304-7936 or filling out our contact form. We'll visit your property, assess the work needed, and provide a detailed estimate within 24 hours.",
    category: 'process',
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
