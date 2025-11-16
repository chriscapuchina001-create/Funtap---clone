import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Facebook, Home } from "lucide-react";

export default function NewGameCarousel({ newGames }) {
  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2">
          {newGames.map((game, index) => (
            <CarouselItem key={index} className="mr-4! basis-auto">
              <div className="w-[323.5px]">
                <img
                  src={game.image}
                  alt={game.name}
                  className="rounded-t-2xl w-[323px] h-[183px] object-cover"
                />
                <div className="flex items-center pt-3! px-4! pb-4! bg-white rounded-b-2xl">
                  <div className="flex flex-col py-3 pl-4 w-full justify-between items-start gap-1">
                    <h3
                      className="text-sm font-bold text-gray-900 leading-tight"
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        fontFamily: "Roboto, sans-serif",
                        lineHeight: 1.4,
                      }}
                    >
                      {game.name}
                    </h3>
                    <p
                      className="text-[#959595]"
                      style={{
                        fontSize: 12,
                        fontWeight: 400,
                        fontFamily: "Roboto, sans-serif",
                        lineHeight: 1.4,
                      }}
                    >
                      Open beta vào {game.releaseDate}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <Home color="#F36E55" />
                    <Facebook color="#5192F5" />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
