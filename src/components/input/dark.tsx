type InputProps = {
  placeholder?: string;
  type?: 'text' | 'number' | 'password';
};

const Input = ({ placeholder, type }: InputProps) => (
  <input
    className="rounded w-full h-10 my-1.5 text-indent bg-black border border-button indent-1"
    placeholder={placeholder}
    type={type}
  />
);

Input.defaultProps = {
  placeholder: '',
  type: 'text',
};
export default Input;
