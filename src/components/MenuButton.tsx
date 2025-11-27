import { ChevronRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

interface MenuButtonProps {
  icon: React.ReactNode;
  text: string;
  rightText?: string;
  navigateTo?: string;
  onClick?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  icon,
  text,
  rightText,
  navigateTo,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
    onClick?.();
  };
  return (
    <button
      className="border-none outline-none bg-transparent hover:bg-[#F7F7F7] flex justify-between items-center cursor-pointer px-4! py-3!"
      onClick={handleClick}
    >
      <div className="flex flex-row justify-start items-center gap-3">
        <div className="flex justify-center items-center">{icon}</div>
        <p className="text-[#1f1f1f] text-sm md:text-[15.75px] font-poppins font-normal">
          {text}
        </p>
      </div>
      {rightText ? (
        <div className="flex flex-row items-center gap-2">
          <p className="text-[#767676] font-poppins font-normal text-xs md:text-[13.5px]">
            {rightText}
          </p>
          <ChevronRight size={16} color="#D6D6D6" strokeWidth={1.5} />
        </div>
      ) : (
        <ChevronRight size={16} color="#D6D6D6" strokeWidth={1.5} />
      )}
    </button>
  );
};

export default MenuButton;
