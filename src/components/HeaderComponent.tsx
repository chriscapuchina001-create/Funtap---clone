import { EllipsisVertical } from "lucide-react";
import type { NavigateFunction } from "react-router";
import logo from "../assets/logo/logo-funtap.png";
import DropdownNotification from "./Dropdowns/DropdownNotification";
import { SheetHomePage } from "./SheetHomePage";
import { formatText } from "@/utils/formatUtils";

type User = {
  id: string;
  username: string;
  loginType: string;
};

type HeaderComponentProps = {
  navigate: NavigateFunction;
  isAuthenticated: boolean;
  user: User | null;
  setIsDialogOpen: (isOpen: boolean) => void;
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  navigate,
  isAuthenticated,
  user,
  setIsDialogOpen,
}) => {
  return (
    <header className="sticky top-0 left-0 z-40 w-full grid place-items-center">
      <div className="w-full flex justify-between items-center px-4 py-2 h-14 bg-white border-b! border-[#eeeeee]! shadow-md">
        <div className="flex flex-row items-center gap-1">
          <SheetHomePage />

          <img
            src={logo}
            alt="logo"
            className="w-[120px] sm:w-[140px] sm:h-[41px]"
            style={{
              userSelect: "none",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
            }}
          />
        </div>
        {isAuthenticated && user ? (
          <div className="flex flex-row items-center pr-[15px]! gap-[15px]">
            <DropdownNotification />
            <button
              className="cursor-pointer flex flex-row items-center gap-2"
              onClick={() => setIsDialogOpen(true)}
            >
              <div className="flex flex-row items-center gap-[5px]">
                {user.loginType === "email" ? (
                  <p className="w-6 h-6 rounded-full bg-[#f8941e] text-white uppercase flex justify-center items-center font-poppins text-sm font-bold">
                    G
                  </p>
                ) : (
                  <p>F</p>
                )}
                <p className="text-[#61616a] font-poppins text-xs font-normal">
                  {formatText(user.username, 7)}
                </p>
              </div>
              <EllipsisVertical size={20} color="#8E8E93" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="opacity-90 hover:opacity-100 px-3 py-2 bg-[#ff753a] flex justify-center items-center border-none outline-none cursor-pointer rounded max-h-8 mr-[15px] h-8"
          >
            <p
              className="text-white leading-6"
              style={{ fontFamily: "Roboto, sans-serif", fontSize: 13 }}
            >
              Đăng nhập
            </p>
          </button>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
