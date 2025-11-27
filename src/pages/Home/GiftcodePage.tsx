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
  const [chunkSize, setChunkSize] = useState<number>(4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setChunkSize(2);
      } else {
        setChunkSize(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const giftcodeChunks = chunkArray(GiftcodeItems, chunkSize);

  return (
    <div className="w-full min-h-screen bg-[#F3F4F4] flex flex-col justify-center items-center">
      <div className="w-full max-w-3xl bg-white">
        <Header
          isAuthenticated={isAuthenticated}
          user={user}
          navigate={navigate}
          logout={logout}
        />

        <div className="w-full flex flex-row justify-between items-start gap-1 py-[11.25px]! px-4! md:px-6! pr-4! md:pr-6! pt-3!">
          <div className="flex flex-row items-center gap-1.5 text-xs md: font-poppins font-normal">
            <p className="text-[#7e7e7e]">Trang chủ &gt;</p>
            <p className="text-[#ee4623]">Giftcode</p>
          </div>
          <button className="flex flex-row items-center gap-1.5 cursor-pointer text-[#ee4623]">
            <Clock size={20} />
            <p className="text-[#ee4623] text-xs md:text-[13.5px] font-poppins font-normal hidden md:block">
              Lịch sử đổi code
            </p>
          </button>
        </div>

        <div className="flex flex-row w-full items-center">
          <div className="w-full p-[18px]! flex justify-between items-center border-b! border-gray-200! gap-3">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex-1 outline-none border rounded-3xl py-1 md:py-2 transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.id
                    ? "border-[#ee4623] bg-[#ee4623] text-white"
                    : "border-gray-500 text-gray-500 hover:border-gray-600 hover:text-gray-600"
                }`}
              >
                <span className="text-[14px] md:text-[15.75px] font-poppins font-medium">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-row w-full">
          <div className="w-full p-4! pl-[18px]">
            <h2 className="mb-5! text-[#1f1f1f] font-poppins font-semibold text-[20px] md:text-[22.5px]">
              Giftcode Dành cho Bạn
            </h2>
            <div className="w-full grid grid-cols-1 gap-3 overflow-hidden pb-2!">
              <GiftcodeCarousel giftcodeChunks={giftcodeChunks} />
            </div>
          </div>
        </div>

        <div className="h-2 bg-gray-100 w-full" />

        <div className="w-full p-[18px]!">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className="text-[#1f1f1f] font-poppins font-semibold text-[20px] md:text-[22.5px]">
                Chọn game
              </h2>
              <div className="relative w-[50%]">
                <button className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                  <Search size={20} color="#8E8E93" />
                </button>
                <input
                  type="text"
                  placeholder="Tìm kiếm game"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-10 md:h-11 border border-gray-200 bg-gray-50 pl-10! pr-4! text-sm rounded-full outline-none transition-all duration-300 focus:border-[#ee4623] focus"
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
                    <span className="text-[#1f1f1f] font-poppins font-normal text-[14px] md:text-[15.75px]">
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

        <div className="w-full flex justify-center items-center sticky bottom-0 left-0 z-40 bg-white border-t! border-[#dadada]! shadow-2xl">
          <Navbar footerNavItems={footerNavItems} navigate={navigate} />
        </div>
      </div>
    </div>
  );
};

export default GiftcodePage;
