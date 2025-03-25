export interface FAQItem {
  id: string;
  categoryId: string;
  question: string;
  answer: string;
  category: string;
}

export interface FAQCategory {
  id: string;
  name: string;
  description: string;
}
