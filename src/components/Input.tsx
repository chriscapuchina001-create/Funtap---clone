import { Eye, EyeOff } from "lucide-react";
import React from "react";

type InputProps = {
  type: "text" | "password" | "email";
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  wrapperClassName?: string;
  inputClassName?: string;
  error?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

const Input: React.FC<InputProps> = ({
  type,
  label = "",
  value,
  onChange,
  placeholder = "",
  required = false,
  disabled = false,
  wrapperClassName = "",
  inputClassName = "",
  error = "",
  ...rest
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const getInputType = () => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    }
    return type;
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${wrapperClassName}`}>
      <div className="relative">
        <input
          {...rest}
          aria-label={label}
          type={getInputType()}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`
            font-roboto font-normal text-base w-full py-2 border-b-2 focus:border-[#F04308] outline-none text-[#000000] pr-8.5
            ${error ? "border-red-500" : "border-gray-300"}
            ${disabled ? "bg-transparent opacity-50" : "bg-transparent"}
            ${inputClassName}
            ${rest.className || ""}
          `}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            disabled={disabled}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none disabled:opacity-50 cursor-pointer"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-2! text-red-600 font-roboto font-medium text-xs">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
