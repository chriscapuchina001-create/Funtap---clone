import { BannerCarousel } from "@/components/Carousels/BannerCarousel";
import NewGameCarousel from "@/components/Carousels/NewGameCarousel";
import SuggestCarousel from "@/components/Carousels/SuggestCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useAuthStore } from "@/store/authStore";
import background from "@assets/background/1755836841_95.png";
import { ChevronRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";
import {
  categories,
  footerNavItems,
  newGames,
  newsItems,
  recommendedGames,
  services,
} from "../../../public/mock-api/homeData";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-200 font-roboto text-gray-700 text-base font-normal">
      <Header
        isAuthenticated={isAuthenticated}
        user={user}
        navigate={navigate}
        logout={logout}
      />

      <main className="w-full flex flex-col justify-center items-center gap-0">
        <div className="w-full max-w-3xl">
          <BannerCarousel />
        </div>
        <div className="w-full max-w-3xl bg-white relative">
          <div className="w-full flex flex-col justify-center items-center">
            <img
              src={background}
              alt="background"
              className="w-[728px] h-[939px] object-cover mt-2!"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center mb-7!">
            <div className=" w-full max-w-[728px] absolute z-20 top-0 pt-15!">
              <div className="px-6! flex flex-col mb-7!">
                <h2
                  className="text-[#1f1f1f] mb-5!"
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Dịch vụ
                </h2>
                <div className="flex flex-row justify-between px-2!">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-12.5 h-12.5 flex items-center justify-center text-white text-lg">
                        <img src={service.icon} alt="service-img" />
                      </div>
                      <span
                        className="text-[#1f1f1f] font-roboto text-center"
                        style={{
                          fontSize: 13.5,
                          fontWeight: 400,
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pl-6! mb-14!">
                <h2
                  className="text-[#1f1f1f] mb-3.5!"
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Game mới
                </h2>
                <NewGameCarousel newGames={newGames} />
              </div>
              <div className="pl-6! flex flex-col">
                <div className="flex justify-between items-center px-6 mb-5">
                  <h2
                    className="text-[#1f1f1f] mb-5!"
                    style={{
                      fontSize: 20,
                      fontWeight: 600,
                      fontFamily: "Roboto, sans-serif",
                    }}
                  >
                    Gợi ý cho bạn
                  </h2>
                  <button className="flex flex-row items-center gap-1">
                    <p
                      className="text-[#ee4623]"
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      Tất cả
                    </p>
                    <ChevronRight color="#ee4623" strokeWidth={1} size={20} />
                  </button>
                </div>

                <SuggestCarousel recommendedGames={recommendedGames} />

                <div className="grid grid-cols-4 grid-rows-2 gap-3 rounded-lg pr-6!">
                  {categories.map((category, index) => {
                    const IconComponent = category.icon;

                    return (
                      <a
                        key={index}
                        href="#"
                        className="bg-[#F3F3F3] text-[#1f1f1f] rounded-lg flex items-center justify-center py-2! px-4 gap-2.5 hover:text-[#EF4B2A] transition-colors"
                      >
                        <IconComponent size={20} className="text-[#1f1f1f]" />
                        <span
                          className=""
                          style={{
                            fontSize: 14,
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          {category.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl bg-white px-6!">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-0.5!">
              <h2
                className="text-[#1f1f1f]"
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  fontFamily: "Roboto, sans-serif",
                }}
              >
                Tin tức - Sự kiện
              </h2>
              <button className="flex flex-row items-center gap-1">
                <p
                  className="text-[#ee4623]"
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  Xem tất cả
                </p>
                <ChevronRight color="#ee4623" strokeWidth={1} size={20} />
              </button>
            </div>

            <div className="flex flex-col px-6">
              {newsItems.map((news, index) => (
                <div
                  key={index}
                  className="flex py-3! gap-5 border-b! border-gray-200! last:border-b-0!"
                >
                  <img
                    src={news.image}
                    alt="img"
                    className="w-[235px] h-[135px] rounded-[8px] object-cover"
                  />
                  <div className="flex flex-col justify-start items-start gap-2 flex-1">
                    <h3
                      className="text-[#1f1f1f]"
                      style={{
                        fontSize: 15.75,
                        fontWeight: 400,
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      {news.title}
                    </h3>
                    <div className="flex items-center gap-1 mb-1">
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-xs">
                        A
                      </div>
                      <h6
                        className="text-[#61616a]"
                        style={{
                          fontSize: 13.5,
                          fontWeight: 400,
                          fontFamily: "Roboto, sans-serif",
                        }}
                      >
                        {news.author}
                      </h6>
                    </div>
                    <p
                      className="text-gray-500"
                      style={{
                        fontSize: 13.5,
                        fontWeight: 400,
                        fontFamily: "Roboto, sans-serif",
                      }}
                    >
                      <span className="text-[#1d73f1] mr-1!">
                        {news.category}
                      </span>{" "}
                      | <span className="ml-1!">{news.date}</span>
                      {news.isEnded && (
                        <strong
                          className="text-[#515151]"
                          style={{
                            fontSize: 13.5,
                            fontFamily: "Roboto, sans-serif",
                            marginLeft: 8,
                          }}
                        >
                          Đã kết thúc
                        </strong>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <div className="w-full flex justify-center items-center sticky bottom-0 left-0 z-40">
        <div className="w-full max-w-3xl flex flex-row justify-center items-center bg-white border-t! border-[#dadada]! relative">
          <Navbar footerNavItems={footerNavItems} navigate={navigate} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
