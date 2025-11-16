import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { footerNavItems } from "../../../public/mock-api/homeData";
import React from "react";
import { useNavigate } from "react-router";
import Header from "@/components/Header";
import { useAuthStore } from "@/store/authStore";

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-229 font-roboto text-gray-87 text-base font-normal w-full">
      <div className="flex flex-col justify-center items-center w-full bg-fafbfb relative">
        {/* Header */}
        <Header
          isAuthenticated={isAuthenticated}
          user={user}
          navigate={navigate}
          logout={logout}
        />

        {/* Breadcrumb */}
        <div className="flex flex-row items-center py-12 px-24 gap-1">
          <p className="m-0 p-0 text-14 text-gray-7e">Trang chủ &gt;</p>
          <p className="m-0 p-0 text-14 text-orange-ee4623">Tài khoản</p>
        </div>

        {/* User Profile Section */}
        <div className="bg-linear-to-r from-orange-ff753a to-orange-fb5f14 clip-path-ellipse w-full max-w-768 flex flex-row justify-between items-center absolute z-0">
          <div className="flex flex-row items-center pt-16 pb-100 pl-30 gap-10">
            <div className="w-12 h-12 flex justify-center items-center bg-linear-to-r from-orange-ee4623 to-orange-fb5f14 rounded-full">
              <p className="m-0 p-0 text-white">G</p>
            </div>
            <div className="flex flex-col">
              <h2 className="m-0 p-0 font-semibold text-22 leading-1.5 text-white">
                GgarJnaIkMjX
              </h2>
              <p className="m-0 p-0 font-normal text-18 leading-1.429 text-white">
                ID: <span>382723676</span>
              </p>
            </div>
          </div>
          <button className="m-0 p-0 outline-none box-border border-none bg-transparent mt-14 mr-26 mb-100 cursor-pointer">
            <p className="m-0 p-0 font-semibold text-14 leading-1.3 text-white">
              Cập nhật
            </p>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-full max-w-768 items-center mt-88">
          {/* First Menu Section */}
          <div className="w-full max-w-736 flex flex-col bg-white shadow-sm rounded-lg mx-16 mb-16 py-8 relative">
            <MenuButton icon="0" text="Gifcode của tôi" />
            <MenuButton icon="0" text="Funvip" rightText="Hạng Hội Viên" />
            <MenuButton icon="0" text="Theo dõi yêu cầu hỗ trợ" />
          </div>

          {/* Second Menu Section */}
          <div className="w-full max-w-736 flex flex-col bg-white shadow-sm rounded-lg mx-16 mb-16 py-8">
            <MenuButton
              icon="0"
              text="Cài đặt"
              rightText="Mật khẩu & Thanh toán"
            />
            <MenuButton icon="0" text="Lịch sử đăng nhập" />
          </div>

          {/* Third Menu Section */}
          <div className="w-full max-w-736 flex flex-col bg-white shadow-sm rounded-lg mx-16 mb-16 py-8">
            <MenuButton icon="0" text="Điều khoản sử dụng" />
            <MenuButton icon="0" text="Chính sách bảo mật" />
            <MenuButton icon="0" text="Liên hệ" />
          </div>

          {/* Logout Button */}
          <div className="w-full max-w-736 mb-16">
            <button className="border-none outline-none w-full bg-white shadow-sm rounded-lg cursor-pointer">
              <div className="flex flex-row justify-center items-center gap-10 py-12 px-16">
                <p className="text-16 text-orange-ee4623 m-0">0</p>
                <p className="text-16 text-orange-ee4623 font-roboto m-0">
                  Đăng xuất
                </p>
              </div>
            </button>
          </div>

          <Footer />
        </div>

        <div className="w-full flex justify-center items-center sticky bottom-0 left-0 z-40">
          <div className="w-full max-w-3xl flex flex-row justify-center items-center bg-white border-t! border-[#dadada]! relative">
            <Navbar footerNavItems={footerNavItems} navigate={navigate} />
          </div>
        </div>
      </div>
    </div>
  );
};

type MenuButtonProps = {
  icon: string;
  text: string;
  rightText?: string;
};

const MenuButton: React.FC<MenuButtonProps> = ({ icon, text, rightText }) => {
  return (
    <button className="m-0 p-0 border-none outline-none bg-transparent flex justify-between items-center px-15 pl-0">
      <div className="flex flex-row justify-start items-center">
        <p className="m-0 p-0 w-12 h-12 flex justify-center items-center text-24 text-gray-1f">
          {icon}
        </p>
        <p className="m-0 p-0 text-15.75 text-gray-1f">{text}</p>
      </div>
      {rightText ? (
        <div className="flex flex-row items-center gap-10">
          <p className="text-13.5 text-gray-76 m-0 p-0">{rightText}</p>
          <p className="m-0 p-0 text-15.75 text-gray-1f">&gt;</p>
        </div>
      ) : (
        <p className="m-0 p-0 text-15.75 text-gray-1f">&gt;</p>
      )}
    </button>
  );
};

export default ProfilePage;
