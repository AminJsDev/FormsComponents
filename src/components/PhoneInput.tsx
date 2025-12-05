import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';

interface PhoneInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const validatePhone = (phone: string): boolean => {
    const regex = /^09[0-9]{9}$/;
    return regex.test(phone);
  };

  useEffect(() => {
    if (value.length === 0) {
      setError(false);
      setHelperText('');
    } else if (!validatePhone(value)) {
      setError(true);
      setHelperText('شماره موبایل نامعتبر است (باید با 09 شروع شود و 11 رقم باشد)');
    } else {
      setError(false);
      setHelperText('');
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    onChange(input);
  };

  return (
    <TextField
      fullWidth
      label={label}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      variant="outlined"
    />
  );
};

export default PhoneInput;
