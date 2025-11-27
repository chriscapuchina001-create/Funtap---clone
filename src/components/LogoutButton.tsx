import { LogOut } from "lucide-react";
import React from "react";

interface LogoutButtonProps {
  onLogout: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  return (
    <div className="w-full mb-4!">
      <button
        className="border-none outline-none w-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.16)] rounded-lg cursor-pointer"
        onClick={onLogout}
      >
        <div className="flex flex-row justify-center items-center gap-2 px-4! py-3!">
          <LogOut color="#ee4623" size={20} />
          <p className="text-[#ee4623] text-sm md:text-base font-poppins font-normal">
            Đăng xuất
          </p>
        </div>
      </button>
    </div>
  );
};

export default LogoutButton;
