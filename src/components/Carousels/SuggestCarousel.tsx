import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function SuggestCarousel({ recommendedGames }) {
  return (
    <div className="flex overflow-x-auto mb-7!">
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
                className="flex flex-col items-center shrink-0 w-30 gap-2"
              >
                <img
                  src={game.image}
                  alt="image"
                  className="w-30 h-30 rounded-[12px]"
                />
                <p
                  className="text-[#1f1f1f] line-clamp-2"
                  style={{ fontSize: 14, fontFamily: "Roboto, sans-serif" }}
                >
                  {game.name}
                </p>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
