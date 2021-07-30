import { ChangeEvent } from 'react';

type InputProps = {
  required?: boolean;
  placeholder?: string;
  name?: string;
  value?: string;
  theme?: 'light' | 'dark';
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'number' | 'password' | 'email';
};

const Input = ({
  placeholder,
  type,
  required,
  name,
  onChange,
  value,
  theme,
}: InputProps) => (
  <input
    onChange={(e) => onChange(e)}
    required={required}
    name={name}
    value={value}
    className={`rounded w-full h-10 my-1.5 ${
      theme === 'light'
        ? 'text-black indent-1'
        : 'text-indent bg-black border border-button indent-1'
    }`}
    placeholder={placeholder}
    type={type}
  />
);

Input.defaultProps = {
  theme: 'light',
  value: '',
  name: '',
  required: false,
  placeholder: '',
  type: 'text',
};
export default Input;
