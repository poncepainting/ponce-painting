'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FormStep, QuoteFormData } from '@/types/forms';
import { designSystem } from '@/config/theme';
import { submitForm } from '@/utils/formSubmission';
import AddressStep from '@/components/forms/steps/AddressStep';
import ContactStep from '@/components/forms/steps/ContactStep';
import DetailsStep from '@/components/forms/steps/DetailsStep';
import SuccessStep from '@/components/forms/steps/SuccessStep';

const QuoteForm = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>('address');
  const [formData, setFormData] = useState<QuoteFormData>({
    address: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  // Progress percentage for the progress bar
  const progressPercentage =
    currentStep === 'address'
      ? 25
      : currentStep === 'contact'
        ? 50
        : currentStep === 'details'
          ? 75
          : 100;

  // Animation variants for the form steps
  const formVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

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

    if (currentStep === 'address') {
      // Validate address
      if (!formData.address.trim()) return;
      setCurrentStep('contact');
      return;
    }

    if (currentStep === 'contact') {
      // Validate contact info
      if (!formData.name.trim() || !formData.email.trim()) return;
      setCurrentStep('details');
      return;
    }

    if (currentStep === 'details') {
      // Clear any previous error
      setSubmissionError(null);
      setIsSubmitting(true);

      try {
        // Submit the form data using our utility
        const result = await submitForm(formData);

        if (result.success) {
          setCurrentStep('success');
        } else {
          setSubmissionError(result.message);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmissionError('An unexpected error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Go back to previous step
  const handleBack = () => {
    if (currentStep === 'contact') setCurrentStep('address');
    if (currentStep === 'details') setCurrentStep('contact');
  };

  // Reset the form
  const handleReset = () => {
    setFormData({
      address: '',
      name: '',
      email: '',
      phone: '',
      message: '',
      service: '',
    });
    setCurrentStep('address');
    setSubmissionError(null);
  };

  return (
    <div
      className={`w-full max-w-md mx-auto ${designSystem.borderRadius.form} bg-white shadow-xl overflow-hidden`}
    >
      {/* Progress bar */}
      <div className="h-1.5 bg-gray-100">
        <motion.div
          className="h-full bg-primary-600"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="p-6">
        {/* Form title - changes based on step */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {currentStep === 'address' && 'Get a Quick Quote'}
            {currentStep === 'contact' && 'Your Contact Info'}
            {currentStep === 'details' && 'Additional Details'}
            {currentStep === 'success' && 'Quote Request Sent!'}
          </h3>
          <p className="text-sm text-gray-600">
            {currentStep === 'address' && 'Enter your address to get started'}
            {currentStep === 'contact' && 'Tell us who you are'}
            {currentStep === 'details' && 'Almost there! Just a few more details'}
            {currentStep === 'success' && "We'll contact you shortly"}
          </p>
        </div>

        {/* Display submission error if any */}
        {submissionError && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
            {submissionError}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {/* Address Step */}
            {currentStep === 'address' && (
              <motion.div
                key="address-step"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <AddressStep formData={formData} handleChange={handleChange} />
              </motion.div>
            )}

            {/* Contact Step */}
            {currentStep === 'contact' && (
              <motion.div
                key="contact-step"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ContactStep
                  formData={formData}
                  handleChange={handleChange}
                  handleBack={handleBack}
                />
              </motion.div>
            )}

            {/* Details Step */}
            {currentStep === 'details' && (
              <motion.div
                key="details-step"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <DetailsStep
                  formData={formData}
                  handleChange={handleChange}
                  handleBack={handleBack}
                  isSubmitting={isSubmitting}
                />
              </motion.div>
            )}

            {/* Success Step */}
            {currentStep === 'success' && (
              <motion.div
                key="success-step"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <SuccessStep handleReset={handleReset} />
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
