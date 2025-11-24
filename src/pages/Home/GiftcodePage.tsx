import React, { useEffect, useState } from "react";
import {
  filterTabs,
  footerNavItems,
  gameItems,
  GiftcodeItems,
} from "../../../public/mock-api/homeData";
import Navbar from "@/components/Navbar";
import { useNavigate } from "react-router";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useAuthStore } from "@/store/authStore";
import { ChevronRight, Clock, Search } from "lucide-react";
import GiftcodeCarousel from "@/components/Carousels/GiftcodeCarousel";

const GiftcodePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const filteredGames = gameItems.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const chunkArray = (array: any[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const giftcodeChunks = chunkArray(GiftcodeItems, 4);

  return (
    <div className="w-full min-h-screen bg-[#F3F4F6] font-roboto text-gray-700 text-base font-normal">
      <div className="flex flex-col justify-center items-center w-full bg-fafbfb relative">
        <Header
          isAuthenticated={isAuthenticated}
          user={user}
          navigate={navigate}
          logout={logout}
        />

        <div className="w-full max-w-3xl flex flex-row justify-between items-start gap-1 bg-white py-[11.25px]! px-6!">
          <div className="flex flex-row items-center gap-1.5">
            <p
              className="text-[#7e7e7e]"
              style={{
                fontSize: 13.5,
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
              }}
            >
              Trang chủ &gt;
            </p>
            <p
              className="text-[#ee4623]"
              style={{
                fontSize: 13.5,
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
              }}
            >
              Giftcode
            </p>
          </div>
          <button className="flex flex-row items-center gap-1.5 cursor-pointer text-[#ee4623]">
            <Clock size={20} />
            <p
              className="text-[#ee4623]"
              style={{
                fontSize: 13.5,
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
              }}
            >
              Lịch sử đổi code
            </p>
          </button>
        </div>

        <div className="flex flex-row w-full max-w-3xl items-center bg-white">
          <div className="w-full p-[18px]! flex justify-between items-center bg-white border-b! border-gray-200! gap-3">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex-1 outline-none border rounded-2xl py-2 px-4 transition-all duration-200 ${
                  activeFilter === tab.id
                    ? "border-[#ee4623] bg-orange-50 text-[#ee4623]"
                    : "border-gray-500 text-gray-500 hover:border-gray-600 hover:text-gray-600"
                }`}
              >
                <span
                  className=""
                  style={{
                    fontSize: 15.75,
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-row w-full max-w-3xl bg-white">
          <div className="w-full p-4! pl-[18px]">
            <h2
              className="mb-5!"
              style={{
                fontSize: 22.5,
                fontFamily: "Roboto, sans-serif",
                fontWeight: 600,
                color: "#1f1f1f",
              }}
            >
              Giftcode Dành cho Bạn
            </h2>
            <div className="w-full grid grid-cols-1 gap-3 overflow-hidden pb-2!">
              <GiftcodeCarousel giftcodeChunks={giftcodeChunks} />
            </div>
          </div>
        </div>

        <div className="h-2 bg-gray-100 w-full max-w-3xl"></div>

        <div className="w-full max-w-3xl bg-white p-[18px]!">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <h2
                style={{
                  fontSize: 22.5,
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: 600,
                  color: "#1f1f1f",
                }}
              >
                Chọn game
              </h2>
              <div className="relative w-full max-w-[366px]">
                <button className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                  <Search size={20} color="#8E8E93" />
                </button>
                <input
                  type="text"
                  placeholder="Tìm kiếm game"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-11 border border-gray-200 bg-gray-50 pl-10! pr-4! text-sm rounded-full outline-none transition-all duration-300 focus:border-[#ee4623] focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0 px-4 pb-4">
              {filteredGames.map((game) => (
                <button
                  key={game.id}
                  className="flex items-center justify-between h-21 py-4 border-b! border-[#f2f2f2]! cursor-pointer text-[#1f1f1f] hover:text-[#ee4623]"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={game.image}
                      alt="image"
                      className="w-13 h-13 rounded-xl flex items-center justify-center"
                    />
                    <span
                      className="text-inherit"
                      style={{
                        fontSize: 15.75,
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {game.name}
                    </span>
                  </div>
                  <ChevronRight size={26} color="#8E8E93" strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <Footer />

        <div className="w-full flex justify-center items-center sticky bottom-0 left-0 z-40">
          <div className="w-full max-w-3xl flex flex-row justify-center items-center bg-white border-t! border-[#dadada]! relative">
            <Navbar footerNavItems={footerNavItems} navigate={navigate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftcodePage;
