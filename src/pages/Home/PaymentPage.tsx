import { BannerCarousel } from "@/components/Carousels/BannerCarousel";
import { UserGamesCarousel } from "@/components/Carousels/GameCarousel";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useAuthStore } from "@/store/authStore";
import payImg from "@assets/icons/9-Pay.svg";
import { CircleX, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {
  allGames,
  footerNavItems,
  quickAccessItems,
} from "../../../public/mock-api/homeData";
import Footer2 from "@/components/Footer2";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleGameClick = (game: { image: string; name: string }) => {
    navigate("/payment-game", {
      state: {
        gameImage: game.image,
        gameName: game.name,
      },
    });
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

        <main className="w-full flex flex-col justify-center items-center gap-0">
          <div className="w-full">
            <BannerCarousel />

            <div className="flex flex-row justify-between md:justify-center items-start md:items-center bg-white px-[15px]!">
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
                  <p className="text-inherit font-roboto text-[13px] md:text-sm font-normal">
                    {item.name}
                  </p>
                </button>
              ))}
            </div>

            <div className="h-2 bg-gray-100" />

            <UserGamesCarousel />

            <div className="h-2 bg-gray-100" />

            <div className="flex flex-col bg-white relative">
              <div className="px-[15px]! border-b! border-[#f2f2f2]! min-h-[55.29px] flex flex-row justify-between items-center">
                <h3 className="leading-6 text-[#575757] font-roboto text-[17px] font-bold">
                  Danh sách game
                </h3>
                <div className="w-[60%] md:w-[70%] flex flex-row items-center relative">
                  <input
                    type="text"
                    placeholder="Tìm game"
                    className="w-full h-8 border border-gray-100 bg-gray-100 px-2 pr-10 text-sm outline-0 rounded-full transition-all duration-300 box-border"
                  />
                  <button className="h-8 w-10 border-none outline-none flex justify-center items-center bg-transparent absolute right-0">
                    <Search size={20} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              <div className="w-full box-border">
                <div className="game-grid">
                  <ul className="grid grid-cols-3 md:grid-cols-4 list-none p-0 m-0">
                    {allGames.map((game, index) => {
                      const isLastInRowMobile = (index + 1) % 3 === 0;
                      const isLastInRowDesktop = (index + 1) % 4 === 0;

                      const itemClass = `
                        text-center transition-all duration-200
                        ${
                          !isLastInRowMobile
                            ? "border-r! border-[#f4f4f4]!"
                            : ""
                        }
                        md:${
                          !isLastInRowDesktop
                            ? "border-r! border-[#f4f4f4]!"
                            : "border-r-0!"
                        }
                        border-b! border-[#f4f4f4]!
                        hover:-translate-y-1 hover:shadow-md hover:bg-gray-50!
                      `;
                      return (
                        <li key={index} className={itemClass}>
                          <button
                            onClick={() => handleGameClick(game)}
                            className="block no-underline text-gray-800 w-full h-full cursor-pointer bg-transparent border-none"
                          >
                            <div className="flex flex-col justify-center items-center py-[18px]! gap-2.5">
                              <img
                                src={game.image}
                                alt={game.name}
                                className="w-20 md:w-30 h-20 md:h-30 rounded-lg mx-auto border-0"
                              />
                              <p className="w-full m-0 mt-3 px-2.5! truncate max md:max-w-[191px] text-[13px] md:text-sm font-roboto font-normal line-clamp-1">
                                {game.name}
                              </p>
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer2 />

        <div className="w-full flex justify-center items-center sticky bottom-0 left-0 z-40">
          <div className="w-full flex flex-row justify-center items-center bg-white border-t! border-[#dadada]! relative">
            {isVisible && (
              <div
                className="absolute right-[8%] bottom-22 z-50"
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
                  className="cursor-pointer"
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
    </div>
  );
};

export default PaymentPage;
