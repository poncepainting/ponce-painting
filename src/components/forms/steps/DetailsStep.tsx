import { FormStepProps } from '@/types/forms';
import FormField from '@/components/forms/FormField';
import SelectField from '@/components/forms/SelectField';
import Button from '@/components/ui/buttons/Button';
import { Icon } from '@/config/icons';
import { servicesConfig } from '@/config/content';

const DetailsStep = ({
  formData,
  handleChange,
  handleBack,
  isSubmitting = false,
}: FormStepProps) => {
  // Create service options from the servicesConfig
  const serviceOptions = [
    { value: '', label: 'Select a service', disabled: true },
    ...servicesConfig.map(service => ({
      value: service.title,
      label: service.title,
    })),
    { value: 'Other', label: 'Other Services' },
  ];

  return (
    <>
      <FormField
        id="phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        label="Phone Number (Optional)"
        placeholder="(123) 456-7890"
      />

      <SelectField
        id="service"
        name="service"
        value={formData.service}
        onChange={handleChange}
        label="Service Needed"
        options={serviceOptions}
        required
      />

      <FormField
        id="message"
        name="message"
        type="textarea"
        value={formData.message}
        onChange={handleChange}
        label="Additional Information (Optional)"
        placeholder="Tell us more about what you need..."
        rows={3}
      />

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <Button type="button" variant="outline" onClick={handleBack} size="lg">
          Back
        </Button>

        <Button
          type="submit"
          variant="primary"
          className="flex-1"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <Icon name="clock" className="animate-spin mr-2" size={16} />
              Submitting...
            </span>
          ) : (
            'Submit Request'
          )}
        </Button>
      </div>
    </>
  );
};

export default DetailsStep;
