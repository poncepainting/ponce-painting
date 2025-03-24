import { FormFieldProps } from '@/types/forms';
import { designSystem } from '@/config/theme';

const FormField = ({
  id,
  name,
  value,
  onChange,
  label,
  placeholder,
  required = false,
  type = 'text',
  className = '',
  icon,
  rows,
}: FormFieldProps) => {
  const isTextarea = type === 'textarea';
  const inputClasses = `w-full px-4 py-3 border border-gray-300 ${
    designSystem.borderRadius.input
  } focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition ${
    icon ? 'pl-10' : ''
  } ${className}`;

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        {isTextarea ? (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows || 3}
            className={inputClasses}
            required={required}
          />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={inputClasses}
            required={required}
          />
        )}
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormField;
