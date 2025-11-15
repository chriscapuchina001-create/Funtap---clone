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
  className?: string;
  error?: string;
};

const Input: React.FC<InputProps> = ({
  type,
  label = "",
  value,
  onChange,
  placeholder = "",
  required = false,
  disabled = false,
  className = "",
  error = "",
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
    <div className={`${className}`}>
      <div className="relative">
        <input
          aria-label={label}
          type={getInputType()}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`
            font-display w-full py-2 border-b-2 focus:border-[#F04308] outline-none text-[#353535] pr-10
            ${error ? "border-red-500" : "border-gray-300"}
            ${disabled ? "bg-transparent opacity-50" : "bg-transparent"}
          `}
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: 400,
            fontSize: 16,
          }}
        />

        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            disabled={disabled}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none disabled:opacity-50 cursor-pointer"
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
