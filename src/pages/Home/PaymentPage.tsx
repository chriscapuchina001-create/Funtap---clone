import { BannerCarousel } from "@/components/Carousels/BannerCarousel";
import { UserGamesCarousel } from "@/components/Carousels/GameCarousel";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useAuthStore } from "@/store/authStore";
import payImg from "@assets/icons/9-Pay.svg";
import { CircleX, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  allGames,
  footerNavItems,
  quickAccessItems,
} from "../../../public/mock-api/homeData";
import logo from "../../assets/logo/logo-funtap.png";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="min-h-screen bg-gray-200 font-display text-gray-700 text-base font-normal relative">
      <Header
        isAuthenticated={isAuthenticated}
        user={user}
        navigate={navigate}
        logout={logout}
      />

      <main className="w-full flex flex-col justify-center items-center gap-0">
        <div className="w-full max-w-3xl">
          <BannerCarousel />

          <div className="flex flex-row justify-center items-center bg-white">
            <div className="flex flex-row justify-center items-center bg-white">
              {quickAccessItems.map((item, index) => (
                <button
                  key={index}
                  className="flex flex-col w-[110px] justify-center items-center my-[15px] mt-5 gap-1 text-[#222222] hover:text-[#ee4623] cursor-pointer"
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-[50px] h-[58px] mb-0.5!"
                  />
                  <p
                    className="text-inherit"
                    style={{ fontFamily: "Roboto, sans-serif", fontSize: 14 }}
                  >
                    {item.name}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="h-2 bg-gray-100" />

          <UserGamesCarousel />

          <div className="h-2 bg-gray-100" />

          <div className="flex flex-col bg-white relative">
            <div className="px-[15px]! border-b! border-[#f2f2f2]! min-h-[55.29px] flex flex-row justify-between items-center">
              <h3
                className="leading-6 text-gray-700"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  fontSize: 17,
                  fontWeight: 700,
                }}
              >
                Danh sách game
              </h3>
              <div className="flex flex-row relative">
                <input
                  type="text"
                  placeholder="Tìm game"
                  className="w-52 h-8 border border-gray-100 bg-gray-100 px-2 pr-10 text-sm outline-0 rounded-full transition-all duration-300 box-border"
                />
                <button className="h-8 w-10 border-none outline-none flex justify-center items-center bg-transparent absolute right-0">
                  <Search size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="w-full box-border">
              <div className="game-grid">
                <ul className="grid grid-cols-4 list-none p-0 m-0">
                  {allGames.map((game, index) => {
                    const isLastInRow = (index + 1) % 4 === 0;
                    const itemClass = `
                      text-center transition-all duration-200
                      ${!isLastInRow ? "border-r! border-[#f4f4f4]!" : ""}
                      border-b! border-[#f4f4f4]!
                      hover:-translate-y-1 hover:shadow-md hover:bg-gray-50!
                    `;
                    return (
                      <li key={index} className={itemClass}>
                        <a
                          href="#"
                          className="block no-underline text-gray-800"
                        >
                          <div className="flex flex-col justify-center items-center py-[18px]! gap-2.5">
                            <img
                              src={game.image}
                              alt={game.name}
                              className="w-30 h-30 rounded-lg mx-auto border-0"
                            />
                            <p
                              className="m-0 mt-3 px-2.5! truncate max-w-[191px]"
                              style={{
                                fontSize: 14,
                                fontFamily: "Roboto, sans-serif",
                              }}
                            >
                              {game.name}
                            </p>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="flex flex-col justify-center items-center w-full">
        <div className="bg-gray-100 w-full max-w-3xl flex flex-col justify-center items-center px-[15px]! pt-10! pb-4!">
          <div className="pt-8 pb-5 flex flex-col justify-center items-center text-center">
            <img
              src={logo}
              alt="logo"
              style={{ width: 148, height: 46, marginBottom: 35 }}
            />
            <p
              className="m-0 mb-2 font-normal leading-6"
              style={{ fontSize: 12, color: "#61616A", fontWeight: 400 }}
            >
              Email:{" "}
              <span className="text-orange-600 underline">hotro@funtap.vn</span>
            </p>
            <p
              className="m-0 mb-2 text-xs text-gray-600 font-normal leading-6"
              style={{ fontSize: 12, color: "#61616A", fontWeight: 400 }}
            >
              Funtap security:{" "}
              <span className="text-orange-600 underline">
                Infosec@funtap.vn
              </span>
            </p>
            <p
              className="m-0 mb-2 text-xs text-gray-600 font-normal leading-6"
              style={{ fontSize: 12, color: "#61616A", fontWeight: 400 }}
            >
              Người chịu trách nhiệm nội dung: <b>Ông Đào Quang Tuấn</b>
            </p>
            <p
              className="m-0 mb-1! text-xs text-gray-600 font-normal leading-5  max-w-[350px]"
              style={{ fontSize: 12, color: "#61616A", fontWeight: 400 }}
            >
              Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số
              201/GP-BTTTT ngày 14 tháng 05 năm 2018.
            </p>
            <p
              className="m-0 mb-2 text-xs text-gray-600 font-normal leading-5  max-w-[400px]"
              style={{ fontSize: 12, color: "#61616A", fontWeight: 400 }}
            >
              Giấy chứng nhận đăng ký cung cấp dịch vụ trò chơi điện tử trên
              mạng số 125/GCN-PTTH&TTĐT ngày 16 tháng 7 năm 2020.
            </p>
            <p
              className="m-0 mb-2 text-xs text-gray-600 font-normal leading-6"
              style={{ fontSize: 12, color: "#61616A", fontWeight: 400 }}
            >
              Copyright © 2019 Funtap.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center sticky bottom-0 left-0 z-40">
        <div className="w-full max-w-3xl flex flex-row justify-center items-center bg-white border-t! border-[#dadada]! relative">
          {isVisible && (
            <div
              className="absolute right-10 bottom-22 z-50"
              style={{
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
              }}
            >
              <button
                style={{ position: "absolute", right: -15, top: -15 }}
                onClick={handleClose}
              >
                <CircleX size={20} />
              </button>
              <img src={payImg} alt="9pay" />
            </div>
          )}
          <Navbar footerNavItems={footerNavItems} navigate={navigate} />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
