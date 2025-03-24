import { ReactNode } from 'react';

export type FormStep = 'address' | 'contact' | 'details' | 'success';

export interface QuoteFormData {
  address: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}

export interface FormFieldProps {
  id: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  className?: string;
  icon?: ReactNode;
  rows?: number;
}

export interface SelectFieldProps extends Omit<FormFieldProps, 'type' | 'rows'> {
  options: Array<{
    value: string;
    label: string;
    disabled?: boolean;
  }>;
}

export interface FormStepProps {
  formData: QuoteFormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleBack?: () => void;
  isSubmitting?: boolean;
}
