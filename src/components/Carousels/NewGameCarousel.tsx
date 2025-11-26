import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Facebook, Home } from "lucide-react";

type Game = {
  name: string;
  image: string;
  releaseDate?: string;
};

type NewGameCarouselProps = {
  newGames: Game[];
};

const NewGameCarousel: React.FC<NewGameCarouselProps> = ({ newGames }) => {
  const handleGameClick = (game: Game) => {
    console.log("Game clicked:", game.name);
  };

  const handleShareClick = (
    e: React.MouseEvent,
    platform: string,
    game: Game
  ) => {
    e.stopPropagation();
    console.log(`Share ${game.name} on ${platform}`);
  };

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="">
          {newGames.map((game, index) => (
            <CarouselItem key={index} className="mr-4! basis-auto">
              <div
                onClick={() => handleGameClick(game)}
                className="w-[323.5px] cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleGameClick(game);
                  }
                }}
              >
                <img
                  src={game.image}
                  alt={game.name}
                  className="rounded-t-2xl w-[323px] h-[183px] object-cover"
                />
                <div className="flex items-center pt-3! px-4! pb-4! bg-white rounded-b-2xl">
                  <div className="flex flex-col w-full justify-between items-start gap-1">
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
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={(e) => handleShareClick(e, "home", game)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      <Home size={18} color="#F36E55" />
                    </button>
                    <button
                      onClick={(e) => handleShareClick(e, "facebook", game)}
                      className="p-1 hover:bg-gray-100 rounded transition-colors"
                    >
                      <Facebook size={18} color="#5192F5" />
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default NewGameCarousel;
