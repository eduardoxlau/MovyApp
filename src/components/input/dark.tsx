import { FunctionComponent } from "react";

type InputProps = {
  placeholder?: string;
  type?: "text" | "number" | "password";
};

const Input: FunctionComponent<InputProps> = ({
  placeholder,
  type = "text",
}) => (
  <input
    className="rounded w-full h-10 my-1.5 text-indent bg-black border border-button indent-1"
    placeholder={placeholder}
    type={type}
  />
);
export default Input;
