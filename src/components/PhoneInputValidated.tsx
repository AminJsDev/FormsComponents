import { TextField } from '@mui/material';
import { useState, useEffect } from 'react';

interface PhoneInputValidatedProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const PhoneInputValidated: React.FC<PhoneInputValidatedProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const validatePhone = (phone: string): boolean => {
    const regex = /^0912[0-9]{7}$/;
    return regex.test(phone);
  };

  useEffect(() => {
    if (value.length === 0) {
      setError(false);
      setHelperText('');
    } else if (!validatePhone(value)) {
      setError(true);
      setHelperText('شماره باید با 0912 شروع شود و 11 رقم باشد');
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

export default PhoneInputValidated;
