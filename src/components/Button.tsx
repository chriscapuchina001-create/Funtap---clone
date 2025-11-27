import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const ButtonApp: React.FC<ButtonProps> = ({
  type = "button",
  children,
  isLoading = false,
  disabled = false,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
}) => {
  const baseClasses =
    "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-[4px] text-white uppercase cursor-pointer transition-colors duration-200";

  const variantClasses = {
    primary: "bg-[#f04406] hover:bg-[#e03d05]",
    secondary: "bg-[#e0e0e0] hover:bg-gray-700",
    outline:
      "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  const sizeClasses = {
    sm: "py-1 px-3 text-xs",
    md: "py-2 px-4 text-sm",
    lg: "py-3 px-6 text-base",
  };

  const isDisabled = isLoading || disabled;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        isDisabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {isLoading ? "Đang đăng nhập..." : children}
    </button>
  );
};

export default ButtonApp;
