import { FormStepProps } from '@/types/forms';
import FormField from '@/components/forms/FormField';
import Button from '@/components/ui/Button';

const ContactStep = ({ formData, handleChange, handleBack }: FormStepProps) => {
  return (
    <>
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
        placeholder="johndoe@example.com"
        required
      />
      
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <Button
          type="button"
          variant="outline"
          onClick={handleBack}
          size="lg"
        >
          Back
        </Button>
        
        <Button
          type="submit"
          variant="primary"
          className="flex-1"
          size="lg"
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export default ContactStep; 