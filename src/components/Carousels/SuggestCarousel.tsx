import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type Game = {
  name: string;
  image: string;
};

type SuggestCarouselProps = {
  recommendedGames: Game[];
};

const SuggestCarousel: React.FC<SuggestCarouselProps> = ({
  recommendedGames,
}) => {
  return (
    <div className="flex overflow-x-auto mb-7! pr-2.5! md:pr-1!">
      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {recommendedGames.map((game, index) => (
            <CarouselItem key={index} className="mr-4! basis-auto">
              <button
                key={index}
                className="flex flex-col items-center shrink-0 w-30 gap-2 text-[#222222] hover:text-[#ee4623] cursor-pointer"
              >
                <img
                  src={game.image}
                  alt="image"
                  className="w-30 h-30 rounded-[12px]"
                />
                <p className="text-inherit line-clamp-2 font-normal text-sm">
                  {game.name}
                </p>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SuggestCarousel;
