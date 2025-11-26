import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useAuthStore } from "@/store/authStore";
import {
  BookUser,
  ChartColumnStacked,
  ChevronRight,
  Columns4,
  FilePenLine,
  Gem,
  Gift,
  History,
  List,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { footerNavItems } from "../../../public/mock-api/homeData";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen bg-[#F3F4F4] flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl">
        <Header
          isAuthenticated={isAuthenticated}
          user={user}
          navigate={navigate}
          logout={logout}
        />

        <div className="w-full flex flex-row justify-start items-start gap-1 bg-white py-[11.25px]! px-6! text-xs md:text-[13.5px] font-poppins font-normal">
          <p className="text-[#7e7e7e]">Trang chủ &gt;</p>
          <p className="text-[#ee4623]">Tài khoản</p>
        </div>

        <div className="bg-linear-to-r! from-[#ff753a] to-[#fb5f14] clip-path-ellipse! w-full max-w-3xl h-[178px] flex flex-row justify-between items-center z-0 absolute top-24 rounded-bl-[90px] rounded-br-[90px]">
          <div className="flex flex-row items-center pt-0! md:pt-4! pb-20! pl-7! pr-7! gap-3">
            {isAuthenticated && user ? (
              <>
                <div className="w-12.5 h-12.5 flex justify-center items-center bg-linear-to-r bg-[#67AD3F] rounded-full text-white">
                  {user?.loginType === "email" ? (
                    <p className="text-[16.66px] font-poppins font-medium">G</p>
                  ) : (
                    <p className="text-[16.66px] font-poppins font-medium">F</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <h2 className="text-white text-xl md:text-[22.5px] font-roboto font-semibold">
                    {user?.username}
                  </h2>
                  <p className="text-white text-base md:text-lg font-roboto font-normal">
                    ID: <span>{user?.id}</span>
                  </p>
                </div>
              </>
            ) : (
              <div className="flex flex-row items-center gap-3">
                <div className="w-12.5 h-12.5 rounded-full bg-[#F3F4F4] flex justify-center items-center">
                  <User size={30} color="#767676" />
                </div>
                <h2 className="text-white text-[22px] font-poppins font-semibold">
                  Đăng nhập
                </h2>
              </div>
            )}
          </div>
          {isAuthenticated && user && (
            <button className="pb-20! pr-7! cursor-pointer">
              <p className="text-white text-xs md:text-[13.5px] font-poppins font-medium">
                Cập nhật
              </p>
            </button>
          )}
        </div>

        {isAuthenticated && user ? (
          <div className="w-full mt-26! bg-white flex flex-col items-center">
            <div className="flex flex-col w-full max-w-[736px] items-center px-4!">
              <div className="w-full flex flex-col bg-white shadow-md rounded-lg mb-4! py-2! relative">
                <MenuButton
                  icon={
                    <Gem color="#BBBBBB" className="w-5 md:w-6 h-5 md:h-6" />
                  }
                  text="Giftcode của tôi"
                />
                <MenuButton
                  icon={
                    <ChartColumnStacked
                      color="#BBBBBB"
                      className="w-5 md:w-6 h-5 md:h-6"
                    />
                  }
                  text="Funvip"
                  rightText="Hạng Hội Viên"
                />
                <MenuButton
                  icon={
                    <FilePenLine
                      color="#BBBBBB"
                      className="w-5 md:w-6 h-5 md:h-6"
                    />
                  }
                  text="Theo dõi yêu cầu hỗ trợ"
                />
              </div>

              <div className="w-full flex flex-col bg-white shadow-md rounded-lg mb-4! py-2!">
                <MenuButton
                  icon={
                    <Settings
                      color="#BBBBBB"
                      className="w-5 md:w-6 h-5 md:h-6"
                    />
                  }
                  text="Cài đặt"
                  rightText="Mật khẩu & Thanh toán"
                />
                <MenuButton
                  icon={
                    <History
                      color="#BBBBBB"
                      className="w-5 md:w-6 h-5 md:h-6"
                    />
                  }
                  text="Lịch sử đăng nhập"
                />
              </div>

              <div className="w-full flex flex-col bg-white shadow-md rounded-lg mb-4! py-2!">
                <MenuButton
                  icon={
                    <List color="#BBBBBB" className="w-5 md:w-6 h-5 md:h-6" />
                  }
                  text="Điều khoản sử dụng"
                />
                <MenuButton
                  icon={
                    <Columns4
                      color="#BBBBBB"
                      className="w-5 md:w-6 h-5 md:h-6"
                    />
                  }
                  text="Chính sách bảo mật"
                />
                <MenuButton
                  icon={
                    <BookUser
                      color="#BBBBBB"
                      className="w-5 md:w-6 h-5 md:h-6"
                    />
                  }
                  text="Liên hệ"
                />
              </div>

              <div className="w-full mb-4!">
                <button
                  className="border-none outline-none w-full bg-white shadow-md rounded-lg cursor-pointer"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  <div className="flex flex-row justify-center items-center gap-2 px-4! py-3!">
                    <LogOut color="#ee4623" size={20} />
                    <p className="text-[#ee4623] text-sm md:text-base font-poppins font-normal">
                      Đăng xuất
                    </p>
                  </div>
                </button>
              </div>
            </div>

            <Footer />
          </div>
        ) : (
          <div className="flex flex-col w-full items-center mt-26! bg-white">
            <div className="w-full max-w-[736px] flex flex-col bg-white shadow-md rounded-lg mb-4! py-2! relative">
              <MenuButton icon={<Gift />} text="Hướng dẫn" />
              <MenuButton icon={<Gift />} text="Tin tức" />
              <MenuButton icon={<Gift />} text="Hỗ trợ" />
            </div>
            <Footer />
          </div>
        )}

        <div className="w-full flex justify-center items-center sticky bottom-0 left-0 z-40">
          <div className="w-full flex flex-row justify-center items-center bg-white border-t! border-[#dadada]! relative">
            <Navbar footerNavItems={footerNavItems} navigate={navigate} />
          </div>
        </div>
      </div>
    </div>
  );
};

type MenuButtonProps = {
  icon: React.ReactNode;
  text: string;
  rightText?: string;
};

const MenuButton: React.FC<MenuButtonProps> = ({ icon, text, rightText }) => {
  return (
    <button className="border-none outline-none bg-transparent hover:bg-[#F7F7F7] flex justify-between items-center cursor-pointer px-4! py-3!">
      <div className="flex flex-row justify-start items-center gap-3">
        <p className="flex justify-center items-center">{icon}</p>
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

export default ProfilePage;
