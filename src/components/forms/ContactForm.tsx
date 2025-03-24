'use client';

import { useState } from 'react';
import FormField from '@/components/forms/FormField';
import Button from '@/components/ui/Button';
import { submitForm } from '@/utils/formSubmission';
import { QuoteFormData } from '@/types/forms';

const ContactForm = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    address: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'Contact Form Message',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      setErrorMessage('Please fill out all required fields');
      return;
    }
    
    setIsSubmitting(true);
    setFormStatus('idle');
    setErrorMessage('');

    try {
      const result = await submitForm(formData, 'contact');
      
      if (result.success) {
        setFormStatus('success');
        // Reset form
        setFormData({
          address: '',
          name: '',
          email: '',
          phone: '',
          message: '',
          service: 'Contact Form Message',
        });
      } else {
        setFormStatus('error');
        setErrorMessage(result.message);
      }
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg">
          Your message has been sent! We'll get back to you as soon as possible.
        </div>
      )}
      
      {formStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
          {errorMessage || 'An error occurred. Please try again.'}
        </div>
      )}
      
      <div className="space-y-4">
        <FormField
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          label="Your Name"
          placeholder="John Doe"
          required
        />

        <FormField
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          label="Email Address"
          placeholder="john@example.com"
          required
        />
        
        <FormField
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          label="Phone Number (Optional)"
          placeholder="(123) 456-7890"
        />
        
        <FormField
          id="message"
          name="message"
          type="textarea"
          value={formData.message}
          onChange={handleChange}
          label="Message"
          placeholder="How can we help you?"
          required
          rows={5}
        />

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm; 