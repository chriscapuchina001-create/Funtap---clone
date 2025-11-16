import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import { userGames } from "../../../public/mock-api/homeData";

export function UserGamesCarousel() {
  const displayGames = userGames.slice(0, 10);
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleDotClick = (index: number) => {
    setCurrent(index);
    api?.scrollTo(index);
  };

  return (
    <div className="flex flex-col bg-white h-[241px]! relative">
      <div className="px-[15px]! border-b! border-[#f2f2f2]! min-h-[55.29px] flex items-center">
        <h3
          className="leading-6 text-[#575757]"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: 17,
            fontWeight: 700,
          }}
        >
          Game của bạn
        </h3>
      </div>
      <div className="p-4">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="pl-1! pt-[15px]!">
            {displayGames.map((game, index) => (
              <CarouselItem
                key={index}
                className="pl-2 basis-1/5 md:basis-1/6 lg:basis-1/8 min-w-[150px] mr-1!"
              >
                <a
                  href="#"
                  className="no-underline block"
                  style={{
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
                  }}
                >
                  <div className="flex flex-col justify-center items-center gap-2.5 p-2">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover hover:scale-105 transition-transform duration-200 use"
                    />
                    <h4
                      className="m-0 px-2.5! text-gray-800 text-center overflow-hidden text-ellipsis whitespace-normal line-clamp-2"
                      style={{
                        fontFamily: "Roboto, sans-serif",
                        fontSize: 12,
                        fontWeight: 400,
                      }}
                    >
                      {game.name}
                    </h4>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex justify-center mt-4 space-x-2">
          <div className="absolute bottom-5">
            <div
              className="bg-[#e5e5ea] rounded-[10px] grid grid-cols-7 gap-1 p-1 relative"
              style={{ width: "80px", height: "7px" }}
            >
              <div
                className="absolute bg-[#ee4623] rounded-[10px] h-[7px] transition-all duration-500 ease-out"
                style={{
                  width: `calc(100% / 4`,
                  transform: `translateX(calc(${current}/2 * 100%))`,
                }}
              />
              {displayGames.map((_, index) => (
                <button
                  key={index}
                  className="relative z-10 w-[11.43px] h-[7px] bg-transparent cursor-pointer"
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
