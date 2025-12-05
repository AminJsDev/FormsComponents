import { TextField } from '@mui/material';

interface NumberInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  const formatNumber = (val: string): string => {
    const digits = val.replace(/\D/g, '');
    if (!digits) return '';
    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const digits = input.replace(/\D/g, '');
    onChange(digits);
  };

  return (
    <TextField
      fullWidth
      label={label}
      value={formatNumber(value)}
      onChange={handleChange}
      placeholder={placeholder}
      variant="outlined"
    />
  );
};

export default NumberInput;
