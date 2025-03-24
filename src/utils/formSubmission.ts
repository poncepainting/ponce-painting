import { QuoteFormData } from '@/types/forms';
import { formConfig, FormType } from '@/config/forms';
import emailjs from '@emailjs/browser';

export type FormSubmissionResult = {
  success: boolean;
  message: string;
  data?: unknown;
};

/**
 * Submit form data using the configured handler method
 */
export const submitForm = async (formData: QuoteFormData, formType: FormType = 'lead'): Promise<FormSubmissionResult> => {
  const handler = formConfig.handler || 'formspree';

  switch (handler) {
    case 'api':
      return submitFormData(formData);
    case 'formspree':
      return submitToFormspree(formData, formType);
    case 'emailjs':
      return submitToEmailJS(formData);
    default:
      return submitToFormspree(formData, formType); // Default fallback
  }
};

/**
 * Submit form data to the Next.js API route
 * Best for Vercel deployments with server-side functionality
 */
export const submitFormData = async (formData: QuoteFormData): Promise<FormSubmissionResult> => {
  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit form');
    }

    return {
      success: true,
      message: result.message || 'Form submitted successfully',
      data: result,
    };
  } catch (error) {
    console.error('Error submitting form:', error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred while submitting the form',
    };
  }
};

/**
 * Submit form data to Formspree
 * Works anywhere without server configuration
 */
export const submitToFormspree = async (formData: QuoteFormData, formType: FormType = 'lead'): Promise<FormSubmissionResult> => {
  try {
    // Select the appropriate form ID based on the form type
    let formId: string;
    
    if (formType === 'contact') {
      formId = formConfig.formspree.contactFormId;
    } else {
      formId = formConfig.formspree.leadFormId;
    }

    if (!formId || formId === 'YOUR_FORMSPREE_FORM_ID') {
      console.warn(
        `Formspree form ID not configured for ${formType} form. Please set the appropriate env variable or update the form config.`
      );
      return {
        success: false,
        message:
          'Form submission service not properly configured. Please contact the site administrator.',
      };
    }

    const FORMSPREE_ENDPOINT = `https://formspree.io/f/${formId}`;

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit form');
    }

    return {
      success: true,
      message: 'Form submitted successfully',
      data: result,
    };
  } catch (error) {
    console.error('Error submitting to Formspree:', error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred while submitting the form',
    };
  }
};

/**
 * Submit form data using EmailJS
 * Another option that works without server configuration
 */
export const submitToEmailJS = async (formData: QuoteFormData): Promise<FormSubmissionResult> => {
  try {
    const { serviceId, templateId, publicKey } = formConfig.emailjs;

    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId === 'YOUR_EMAILJS_SERVICE_ID' ||
      templateId === 'YOUR_EMAILJS_TEMPLATE_ID' ||
      publicKey === 'YOUR_EMAILJS_PUBLIC_KEY'
    ) {
      console.warn(
        'EmailJS not properly configured. Please set the required environment variables or update the form config.'
      );
      return {
        success: false,
        message:
          'Form submission service not properly configured. Please contact the site administrator.',
      };
    }

    // Format the template parameters to match EmailJS expectations
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      service: formData.service,
      message: formData.message,
    };

    const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);

    return {
      success: true,
      message: 'Form submitted successfully',
      data: result,
    };
  } catch (error) {
    console.error('Error submitting with EmailJS:', error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred while submitting the form',
    };
  }
};
