/**
 * FAQ configuration
 * Organized by categories for easy management and display
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  categoryId: string;
}

export const faqCategories = [
  {
    id: 'residential',
    name: 'Residential Painting',
    description: 'Common questions about our residential painting services in Lake Charles.',
  },
  {
    id: 'commercial',
    name: 'Commercial Painting',
    description:
      'Information about our commercial painting services throughout Southwest Louisiana.',
  },
  {
    id: 'process',
    name: 'Our Process',
    description:
      'Learn about our painting process and what to expect when working with Ponce Painting.',
  },
  {
    id: 'pricing',
    name: 'Pricing & Estimates',
    description: 'Questions about our free painting estimates and pricing in Lake Charles.',
  },
  {
    id: 'general',
    name: 'General',
    description: 'General questions about Ponce Painting services and company information.',
  },
  {
    id: 'services',
    name: 'Services',
    description:
      'Information about the professional painting services we offer in Lake Charles and Southwest Louisiana.',
  },
];

export const faqItems: FAQItem[] = [
  // General FAQs
  {
    id: 'general-operating-time',
    categoryId: 'general',
    question: 'How long has Ponce Painting been operating in Lake Charles?',
    answer:
      "Ponce Painting has been serving Lake Charles and Southwest Louisiana since 2010. With over 13 years of experience, we've built a solid reputation for quality craftsmanship, reliability, and exceptional customer service throughout the region.",
    category: 'General',
  },
  {
    id: 'general-service-areas',
    categoryId: 'general',
    question: 'What areas of Louisiana does Ponce Painting serve?',
    answer:
      'Ponce Painting proudly serves Lake Charles and the surrounding communities throughout Southwest Louisiana, including Sulphur, Iowa, Moss Bluff, Vinton, and Westlake. Our local team is familiar with the unique challenges of our Gulf Coast climate and provides specialized painting solutions for homes and businesses in our region.',
    category: 'General',
  },
  {
    id: 'general-insurance',
    categoryId: 'general',
    question: 'Is Ponce Painting licensed and insured?',
    answer:
      "Yes, Ponce Painting is fully licensed, bonded, and insured in Louisiana. We maintain comprehensive liability insurance and workers' compensation coverage for all our projects. This provides complete peace of mind for our clients knowing that they're protected when we work on their properties.",
    category: 'General',
  },
  {
    id: 'general-support',
    categoryId: 'general',
    question: 'How can I contact Ponce Painting for a quote?',
    answer:
      "Contacting us is easy! You can reach our Lake Charles team by calling (337) 304-7936, emailing info@ponce-painting.com, or by filling out the contact form on our website. We aim to respond to all inquiries within 24 hours and can schedule a free on-site estimate at a time that's convenient for you.",
    category: 'General',
  },

  // Services FAQs
  {
    id: 'services-offered',
    categoryId: 'services',
    question: 'What painting services does Ponce Painting offer in Lake Charles?',
    answer:
      "Ponce Painting offers a complete range of professional painting services in Lake Charles including interior painting, exterior painting, cabinet refinishing, deck staining, fence painting, concrete floor coating, color consulting, and pressure washing. We use premium paints and materials specifically selected for Louisiana's unique climate to ensure long-lasting results for your home or business.",
    category: 'Services',
  },
  {
    id: 'services-weather',
    categoryId: 'services',
    question: "How does Ponce Painting handle Louisiana's humid climate for exterior projects?",
    answer:
      'As local Lake Charles painting professionals, we understand the challenges of our Gulf Coast climate. For exterior painting projects, we carefully monitor weather conditions, use moisture-resistant primers, and select premium paints with mildew and UV protection specifically formulated for high-humidity environments. Our preparation process includes thorough cleaning and moisture testing to ensure proper adhesion and a long-lasting finish that stands up to Louisiana weather.',
    category: 'Services',
  },
  {
    id: 'services-customize',
    categoryId: 'services',
    question: 'Does Ponce Painting offer color consultation services?',
    answer:
      'Yes! Our professional color consultation service helps Lake Charles homeowners and businesses select the perfect colors for their properties. Our experienced painters understand color theory, current trends, and can recommend palettes that complement your existing features and reflect your personal style. We can provide digital color renderings, sample boards, and test patches to help you visualize the final result before making your decision.',
    category: 'Services',
  },
  {
    id: 'services-difference',
    categoryId: 'services',
    question: 'What makes Ponce Painting different from other Lake Charles painting contractors?',
    answer:
      "What sets Ponce Painting apart is our unwavering commitment to quality, our detailed preparation process, our use of premium paints and materials, and our exceptional customer service. As a locally-owned Lake Charles painting company since 2010, we understand the unique needs of Southwest Louisiana properties. Our team consists of highly trained, background-checked professionals who take pride in their craftsmanship. We're not satisfied until you're delighted with the results.",
    category: 'Services',
  },

  // Pricing FAQs
  {
    id: 'pricing-determination',
    categoryId: 'pricing',
    question: 'How does Ponce Painting determine the cost of a painting project in Lake Charles?',
    answer:
      'Our Lake Charles painting estimates are based on several factors: the size of the area to be painted, surface conditions and required preparation, paint quality and number of coats needed, accessibility of the areas, and project complexity. We provide detailed, transparent quotes after our free on-site assessment, with no hidden fees or surprises. Each estimate includes labor, materials, preparation, and cleanup.',
    category: 'Pricing',
  },
  {
    id: 'pricing-discounts',
    categoryId: 'pricing',
    question: 'Does Ponce Painting offer any seasonal specials or discounts?',
    answer:
      'Yes, we regularly offer seasonal painting promotions for Lake Charles homeowners and businesses. We provide special discounts for seniors, military personnel, and first responders. We also offer savings for clients booking multiple services (such as interior and exterior painting) and returning customers. Contact us to learn about our current painting specials and how you can save on your next project.',
    category: 'Pricing',
  },
  {
    id: 'pricing-payment-methods',
    categoryId: 'pricing',
    question: 'What payment methods does Ponce Painting accept?',
    answer:
      'Ponce Painting accepts multiple payment methods for your convenience, including major credit cards, checks, and electronic payments. For larger painting projects in Lake Charles, we offer flexible payment schedules that can be arranged to align with project milestones. We never require full payment upfront—only a reasonable deposit to secure your place on our schedule.',
    category: 'Pricing',
  },
  {
    id: 'pricing-warranty',
    categoryId: 'pricing',
    question: 'Does Ponce Painting offer a warranty on painting services?',
    answer:
      'Absolutely! Ponce Painting stands behind our work with one of the best warranties in Lake Charles. We offer a 2-year warranty on most interior painting projects and a 5-year warranty on exterior painting projects. Our warranty covers paint peeling, blistering, excessive fading, and flaking due to improper application. This reflects our confidence in our workmanship and the premium materials we use.',
    category: 'Pricing',
  },

  // Process FAQs
  {
    id: 'process-new-clients',
    categoryId: 'process',
    question: "What is Ponce Painting's process for new Lake Charles clients?",
    answer:
      "Our process begins with a free consultation and detailed estimate. Once approved, we'll schedule your project and confirm color selections. On the first day, our Lake Charles painting crew will protect your belongings, prepare surfaces, and address any repairs. Throughout the painting process, our project manager will keep you updated and conduct quality checks. We finish with a thorough cleanup and final walkthrough to ensure your complete satisfaction before considering the job complete.",
    category: 'Process',
  },
  {
    id: 'process-timeline',
    categoryId: 'process',
    question: 'How long does a typical Ponce Painting project take in Lake Charles?',
    answer:
      'Project timelines vary based on size and complexity. For Lake Charles homes, a single room interior painting typically takes 1-2 days, while a complete interior might take 3-5 days. Exterior painting of an average-sized home usually requires 3-7 days, depending on weather conditions and necessary preparation. Commercial projects vary widely, but we provide detailed timelines during the estimation process and work efficiently to minimize disruption to your home or business.',
    category: 'Process',
  },
  {
    id: 'process-preparation',
    categoryId: 'process',
    question: 'How should I prepare my Lake Charles home before Ponce Painting arrives?',
    answer:
      "To prepare for our arrival, we recommend removing small items and personal belongings from the areas to be painted. For interior projects, clearing shelves and moving smaller furniture to the center of the room is helpful. Our Lake Charles painting team will cover and protect larger furniture, floors, and fixtures. For exterior projects, clearing items away from the house perimeter and trimming back bushes provides better access. We'll discuss specific preparation steps during your consultation.",
    category: 'Process',
  },
  {
    id: 'process-support',
    categoryId: 'process',
    question: 'Does Ponce Painting provide touch-ups after project completion?',
    answer:
      "Yes, we stand behind our work in Lake Charles with excellent after-service support. We conduct a detailed final walkthrough with you to identify any areas needing touch-ups, which we'll address immediately. If you notice any issues after we've completed the project, simply contact us, and we'll schedule a time to return and make it right. Our goal is your complete satisfaction with every painting project.",
    category: 'Process',
  },

  // Residential Painting FAQs
  {
    id: 'residential-interior',
    categoryId: 'residential',
    question:
      'What residential interior painting services does Ponce Painting offer in Lake Charles?',
    answer:
      'Our Lake Charles interior painting services include walls, ceilings, trim, doors, cabinets, and more. We provide complete surface preparation including patching, sanding, and priming. Our professional painters use low-VOC, premium paints with excellent coverage, washability, and durability. We offer specialized techniques including accent walls, faux finishes, and trim enhancements. Every project includes careful protection of your furnishings and thorough cleanup upon completion.',
    category: 'Residential',
  },
  {
    id: 'residential-exterior',
    categoryId: 'residential',
    question:
      'What exterior residential painting services does Ponce Painting provide in Lake Charles?',
    answer:
      "Our exterior painting services in Lake Charles include siding, trim, doors, shutters, decks, fences, and outbuildings. We properly prepare all surfaces by pressure washing, scraping, sanding, caulking, and priming as needed. We use premium, weather-resistant paints specifically formulated for Louisiana's humid climate to resist fading, mildew, and peeling. Our exterior painting process includes thorough protection of landscaping and non-painted surfaces, plus complete cleanup upon completion.",
    category: 'Residential',
  },

  // Commercial Painting FAQs
  {
    id: 'commercial-interior',
    categoryId: 'commercial',
    question: 'What commercial painting services does Ponce Painting offer in Lake Charles?',
    answer:
      'Ponce Painting provides comprehensive commercial painting services for Lake Charles businesses including office spaces, retail stores, restaurants, medical facilities, and industrial buildings. Our commercial interior painting includes walls, ceilings, trim, doors, and specialty coatings for high-traffic areas. We use low-odor, commercial-grade paints and can schedule work during off-hours or weekends to minimize disruption to your business operations.',
    category: 'Commercial',
  },
  {
    id: 'commercial-exterior',
    categoryId: 'commercial',
    question: 'Can Ponce Painting handle large commercial exterior projects in Lake Charles?',
    answer:
      'Yes, Ponce Painting has the expertise, equipment, and team to handle commercial exterior painting projects of all sizes throughout Lake Charles and Southwest Louisiana. We work with shopping centers, office buildings, warehouses, churches, and multi-unit residential properties. Our commercial painting process includes thorough preparation, high-quality coatings designed for durability in our Gulf Coast climate, and strict adherence to safety protocols. We can provide detailed project timelines and work around your business schedule.',
    category: 'Commercial',
  },

  // Additional Process FAQs
  {
    id: 'process-prep',
    categoryId: 'process',
    question: 'What preparation work does Ponce Painting do before painting in Lake Charles homes?',
    answer:
      "Proper preparation is the foundation of a quality paint job, especially in Louisiana's climate. Our preparation includes thoroughly cleaning surfaces, removing flaking paint, filling holes and cracks, sanding rough areas, addressing water damage, caulking gaps, spot priming, and protecting non-painted surfaces. For exterior projects in Lake Charles, we typically pressure wash surfaces and treat for mildew before painting. This comprehensive preparation ensures superior adhesion and longevity of your paint job.",
    category: 'Process',
  },
  {
    id: 'paint-choice',
    categoryId: 'general',
    question: 'What type of paint does Ponce Painting use for Lake Charles homes?',
    answer:
      "Ponce Painting uses premium Sherwin-Williams and Benjamin Moore paints that are specifically formulated for Southwest Louisiana's unique climate conditions. For exteriors, we select paints with excellent UV resistance, mildew resistance, and moisture protection. For interiors, we recommend paints with good washability, coverage, and low VOC content for better indoor air quality. We help clients select the right sheen for each surface based on its use, lighting conditions, and desired aesthetic.",
    category: 'General',
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

  return faqItems.filter(item => item.category.toLowerCase() === category.toLowerCase());
}
