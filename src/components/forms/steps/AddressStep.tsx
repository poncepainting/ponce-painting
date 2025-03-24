import { FormStepProps } from '@/types/forms';
import FormField from '@/components/forms/FormField';
import Button from '@/components/ui/Button';
import { Icon } from '@/config/icons';

const AddressStep = ({ formData, handleChange }: FormStepProps) => {
  return (
    <>
      <FormField
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        label="Your Address"
        placeholder="123 Main St, City, State"
        required
        icon={<Icon name="map-pin" size={16} />}
      />

      <Button type="submit" variant="primary" className="w-full" size="lg">
        Get My Quote
      </Button>
    </>
  );
};

export default AddressStep;
