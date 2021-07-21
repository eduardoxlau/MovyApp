import { ChangeEvent } from 'react';

type InputProps = {
  required?: boolean;
  placeholder?: string;
  name?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'number' | 'password' | 'email';
};

const Input = ({ placeholder, type, required, name, onChange }: InputProps) => (
  <input
    onChange={(e) => onChange(e)}
    required={required}
    name={name}
    className="rounded w-full h-10 my-1.5 text-black indent-1"
    placeholder={placeholder}
    type={type}
  />
);

Input.defaultProps = {
  name: '',
  required: false,
  placeholder: '',
  type: 'text',
};
export default Input;
