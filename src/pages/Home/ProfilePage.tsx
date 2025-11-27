import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useAuthStore } from "@/store/authStore";
import {
  BookText,
  BookUser,
  ChartColumnStacked,
  CircleChevronRight,
  Columns4,
  Disc3,
  FilePenLine,
  Gem,
  History,
  List,
  LogOut,
  Settings,
  SquareAsterisk,
  User,
} from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { footerNavItems } from "../../../public/mock-api/homeData";
import Footer2 from "@/components/Footer2";
import MenuButton from "@/components/MenuButton";
import UserInfo from "@/components/UserInfo";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLogin = () => {
    navigate("/login");
  };

  const handleEditProfile = () => {
    if (user) {
      navigate("/personal-info", {
        state: {
          user: user,
        },
      });
    }
  };

  const handleSetting = () => {
    if (user) {
      navigate("/settings", {
        state: {
          user: user,
        },
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F3F4F4] flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl">
        <Header
          isAuthenticated={isAuthenticated}
          user={user}
          navigate={navigate}
          logout={logout}
        />

        {isAuthenticated && user && (
          <div className="w-full flex flex-row justify-start items-start gap-1 py-[11.25px]! px-4! md:px-6! pr-4! md:pr-6! pt-3! bg-white">
            <div className="flex flex-row items-center gap-1.5 text-xs md:text-[13.5px] font-poppins font-normal">
              <p className="text-[#7e7e7e]">Trang chủ &gt;</p>
              <p className="text-[#ee4623]">Tài khoản</p>
            </div>
          </div>
        )}

        <div
          className={`
          bg-linear-to-r! from-[#ff753a] to-[#fb5f14] clip-path-ellipse! 
          w-full max-w-3xl h-[178px] flex flex-row justify-between items-center 
          z-0 absolute 
          ${isAuthenticated && user ? "top-24" : "top-14"} 
          rounded-bl-[90px] rounded-br-[90px]
        `}
        >
          <div className="flex flex-row items-center pt-0! md:pt-4! pb-20! pl-7! pr-7! gap-3">
            {isAuthenticated && user ? (
              <UserInfo user={user} />
            ) : (
              <button
                className="flex flex-row items-center gap-3"
                onClick={handleLogin}
              >
                <div className="w-12.5 h-12.5 rounded-full bg-[#F3F4F4] flex justify-center items-center">
                  <User size={30} color="#767676" />
                </div>
                <h2 className="text-white text-[22px] font-poppins font-semibold">
                  Đăng nhập
                </h2>
              </button>
            )}
          </div>
          {isAuthenticated && user && (
            <button
              className="pb-20! pr-7! cursor-pointer"
              onClick={handleEditProfile}
            >
              <p className="text-white text-xs md:text-[13.5px] font-poppins font-medium">
                Cập nhật
              </p>
            </button>
          )}
        </div>

        {isAuthenticated && user ? (
          <div className="w-full mt-26! bg-white flex flex-col items-center">
            <div className="flex flex-col w-full max-w-[736px] items-center px-4!">
              <div className="w-full flex flex-col bg-white shadow-[0_2px_4px_rgba(0,0,0,0.16)] rounded-lg mb-4! py-2! relative">
                <MenuButton
                  icon={
                    <Gem color="#BBBBBB" className="w-5 md:w-6 h-5 md:h-6" />
                  }
                  text="Giftcode của tôi"
                  onClick={() => navigate("/giftcode")}
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

              <div className="w-full flex flex-col bg-white shadow-[0_2px_4px_rgba(0,0,0,0.16)] rounded-lg mb-4! py-2!">
                <MenuButton
                  icon={
                    <Settings
                      color="#BBBBBB"
                      className="w-5 md:w-6 h-5 md:h-6"
                    />
                  }
                  text="Cài đặt"
                  rightText="Mật khẩu & Thanh toán"
                  onClick={handleSetting}
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

              <div className="w-full flex flex-col bg-white shadow-[0_2px_4px_rgba(0,0,0,0.16)] rounded-lg mb-4! py-2!">
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
                  className="border-none outline-none w-full bg-white shadow-[0_2px_4px_rgba(0,0,0,0.16)] rounded-lg cursor-pointer"
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
            <div className="w-full max-w-[736px] relative px-4!">
              <div className="w-full flex flex-col bg-white shadow-[0_2px_4px_rgba(0,0,0,0.16)] rounded-lg mb-4! py-2.5!">
                <MenuButton
                  icon={
                    <Disc3 color="#FF753A" className="w-5 md:w-6 h-5 md:h-6" />
                  }
                  text="Hướng dẫn"
                />
                <MenuButton
                  icon={
                    <BookText
                      color="#FF753A"
                      className="w-5 md:w-6 h-5 md:h-6"
                    />
                  }
                  text="Tin tức"
                />
              </div>

              <div className="w-full flex flex-col bg-white shadow-[0_2px_4px_rgba(0,0,0,0.16)] rounded-lg mb-4! py-2.5!">
                <MenuButton
                  icon={
                    <CircleChevronRight
                      color="#FF753A"
                      className="w-5 md:w-6 h-5 md:h-6"
                    />
                  }
                  text="Playfun"
                />
                <MenuButton
                  icon={
                    <SquareAsterisk
                      color="#FF753A"
                      className="w-5 md:w-6 h-5 md:h-6"
                    />
                  }
                  text="Funcard"
                />
              </div>

              <div className="w-full flex flex-col bg-white shadow-[0_2px_4px_rgba(0,0,0,0.16)] rounded-lg mb-8! py-2.5!">
                <MenuButton
                  icon={
                    <Disc3 color="#FF753A" className="w-5 md:w-6 h-5 md:h-6" />
                  }
                  text="Hỗ trợ"
                />
              </div>
            </div>

            <Footer2 />
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

export default ProfilePage;
