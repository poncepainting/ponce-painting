import { SelectFieldProps } from '@/types/forms';
import { designSystem } from '@/config/theme';

const SelectField = ({
  id,
  name,
  value,
  onChange,
  label,
  placeholder,
  required = false,
  className = '',
  icon,
  options,
}: SelectFieldProps) => {
  const selectClasses = `w-full px-4 py-3 border border-gray-300 ${
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
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={selectClasses}
          required={required}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map(option => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectField;
