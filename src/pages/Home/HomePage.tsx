import { BannerCarousel } from "@/components/Carousels/BannerCarousel";
import NewGameCarousel from "@/components/Carousels/NewGameCarousel";
import SuggestCarousel from "@/components/Carousels/SuggestCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useAuthStore } from "@/store/authStore";
import background from "@assets/background/1755836841_95.png";
import { ArrowRight, ChevronRight } from "lucide-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  categories,
  footerNavItems,
  newGames,
  newsItems,
  recommendedGames,
  services,
} from "../../../public/mock-api/homeData";
import sheildImg from "@assets/icons/Default.png";

const HomePage: React.FC = () => {
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

        <main className="w-full flex flex-col justify-center items-center gap-0">
          <div className="w-full h-[0.75em] bg-white" />
          <div className="w-full bg-white px-2.5!">
            <BannerCarousel rounded="rounded-lg" itemClassName="px-1!" />
          </div>
          <div className="w-full bg-white relative px-4! md:px-6!">
            <div className="w-full flex flex-col justify-center items-center">
              <img
                src={background}
                alt="background"
                className="w-[728px] h-[1170px] sm:h-[1042px] object-cover mt-2!"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center mb-7!">
              <div className=" w-full max-w-[728px] absolute z-20 top-0 pt-10! md:pt-15!">
                <div className="px-4! md:px-6! flex flex-col mb-7!">
                  <h2 className="mb-5! pl-2! md:pl-0! text-[#1f1f1f] text-base md:text-xl font-semibold font-roboto">
                    Dịch vụ
                  </h2>
                  <div
                    className="w-full"
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(80px, 1fr))",
                      gap: "5px",
                      justifyItems: "center",
                      rowGap: "10px",
                    }}
                  >
                    {services.map((service, index) => (
                      <button
                        key={index}
                        className="flex flex-col items-center gap-2 text-[#222222] hover:text-[#ee4623] cursor-pointer"
                      >
                        <div className="flex items-center justify-center">
                          <img
                            src={service.icon}
                            alt="service-img"
                            className="w-[50px] h-[50px]"
                          />
                        </div>
                        <span className="text-inherit text-center font-roboto font-normal text-sm">
                          {service.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <div className="px-6! mb-7!">
                  <div className="bg-white shadow-xl flex flex-row items-center justify-between rounded-2xl py-[18px]! pr-5! pl-3!">
                    <div className="flex flex-row gap-3 items-start sm:items-center">
                      <img
                        src={sheildImg}
                        alt=""
                        className="w-8 sm:w-[62px] h-6 sm:h-[47.5px]"
                      />
                      <div className="flex flex-col items-start">
                        <button className="cursor-pointer">
                          <h2 className="text-[#1f1f1f] text-[14px] sm:text-[16px] font-semibold leading-[21px] font-roboto">
                            FunVIP: Hội Viên
                          </h2>
                        </button>
                        <button>
                          <h2
                            className="text-[#1f1f1f] text-left max-w-[226px] sm:max-w-full"
                            style={{
                              fontFamily: "Roboto, sans-serif",
                              fontWeight: 400,
                              fontSize: 14,
                              lineHeight: "21px",
                            }}
                          >
                            Đừng bỏ lỡ nhiều quyền lợi hấp dẫn bạn nhé!
                          </h2>
                        </button>
                      </div>
                    </div>
                    <button className="bg-[#EE4623] rounded-full p-1!">
                      <ArrowRight size={10} color="white" />
                    </button>
                  </div>
                </div>
                <div className="pl-6! mb-8! md:mb-12! overflow-hidden pr-2.5! md:pr-1! ">
                  <h2 className="text-[#1f1f1f] text-base md:text-xl font-semibold font-roboto mb-3! md:mb-5!">
                    Game mới
                  </h2>
                  <NewGameCarousel newGames={newGames} />
                </div>
                <div className="pl-6! flex flex-col overflow-hidden">
                  <div className="flex justify-between items-center pr-4! mb-3! md:mb-5!">
                    <h2 className="text-[#1f1f1f] text-base md:text-xl font-semibold font-roboto">
                      Gợi ý cho bạn
                    </h2>
                    <button className="flex flex-row items-center gap-1">
                      <p className="text-[#ee4623] text-xs md:text-sm font-roboto font-medium">
                        Tất cả
                      </p>
                      <ChevronRight color="#ee4623" strokeWidth={1} size={18} />
                    </button>
                  </div>

                  <SuggestCarousel recommendedGames={recommendedGames} />

                  <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-2 gap-3 rounded-lg pr-6!">
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

          <div className="w-full bg-white px-4! md:px-6!">
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
                <button className="flex flex-row items-center gap-1 cursor-pointer">
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

              <div className="flex flex-col">
                {newsItems.map((news, index) => (
                  <button
                    key={index}
                    className={`
                      flex 
                      ${index === 0 ? "flex-col sm:flex-row" : "flex-row"} 
                      py-3! gap-3 md:gap-5 border-b! border-gray-200! last:border-b-0! 
                      text-[#1f1f1f] hover:text-[#ee4623]
                    `}
                  >
                    <img
                      src={news.image}
                      alt="img"
                      className={`
                        ${index === 0 ? "w-full sm:w-[33%]" : "w-[33%]"} 
                        ${
                          index === 0
                            ? "sm:h-[125px]"
                            : "xs:h-[110px] sm:h-[125px]"
                        } 
                        rounded-[7px] object-contain cursor-pointer hover:opacity-80
                      `}
                    />
                    <div className="flex flex-col justify-start items-start gap-2 flex-1">
                      <h3 className="text-left text-inherit cursor-pointer font-roboto font-normal text-sm md:text-base line-clamp-2">
                        {news.title}
                      </h3>
                      <div className="flex items-center gap-1 mb-1">
                        <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-xs">
                          A
                        </div>
                        <h6 className="text-[#61616a] font-roboto font-normal text-xs md:text-sm">
                          {news.author}
                        </h6>
                      </div>
                      <p className="text-gray-500 font-roboto font-normal text-sm hidden sm:block">
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
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>

        <Footer />

        <div className="w-full flex justify-center items-center sticky bottom-0 left-0 z-40 bg-white border-t! border-[#dadada]! shadow-2xl">
          <Navbar footerNavItems={footerNavItems} navigate={navigate} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
