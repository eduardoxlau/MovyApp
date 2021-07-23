import { ChangeEvent } from 'react';

type InputProps = {
  required?: boolean;
  placeholder?: string;
  name?: string;
  value?: string;
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
}: InputProps) => (
  <input
    onChange={(e) => onChange(e)}
    required={required}
    name={name}
    value={value}
    className="rounded w-full h-10 my-1.5 text-black indent-1"
    placeholder={placeholder}
    type={type}
  />
);

Input.defaultProps = {
  value: '',
  name: '',
  required: false,
  placeholder: '',
  type: 'text',
};
export default Input;
