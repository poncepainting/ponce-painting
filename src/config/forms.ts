/**
 * Configuration for form submissions
 */

// Form handling method options
export type FormHandlerType = 'api' | 'formspree' | 'emailjs';

// Default form handler configuration
export const formConfig = {
  // The form handling method to use
  // 'api': Uses the built-in Next.js API route (optimal for Vercel deployment)
  // 'formspree': Uses Formspree for form handling (works anywhere, no server config needed)
  // 'emailjs': Uses EmailJS for form handling (works anywhere, no server config needed)
  handler: process.env.NEXT_PUBLIC_FORM_HANDLER as FormHandlerType || 'formspree',
  
  // Formspree configuration (used when handler is 'formspree')
  formspree: {
    formId: process.env.NEXT_PUBLIC_FORMSPREE_ID || 'YOUR_FORMSPREE_FORM_ID',
    // Example: 'xrgodlkp'
  },
  
  // EmailJS configuration (used when handler is 'emailjs')
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_EMAILJS_SERVICE_ID',
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_EMAILJS_TEMPLATE_ID',
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY',
    // You can sign up at https://www.emailjs.com/
  }
}; 