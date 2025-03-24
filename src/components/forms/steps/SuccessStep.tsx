import Button from '@/components/ui/Button';
import { Icon } from '@/config/icons';

interface SuccessStepProps {
  handleReset: () => void;
}

const SuccessStep = ({ handleReset }: SuccessStepProps) => {
  return (
    <div className="text-center py-4">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
        <Icon name="check-circle" size={32} className="text-primary-600" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">Quote Request Received!</h3>
      <p className="text-gray-600 mb-6">
        Thank you for your request. We'll review your information and get back to you as soon as possible with a personalized quote.
      </p>
      
      <Button
        type="button"
        variant="primary"
        onClick={handleReset}
        size="lg"
        className="w-full"
      >
        Start New Quote
      </Button>
    </div>
  );
};

export default SuccessStep; 