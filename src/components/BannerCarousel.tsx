import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { bannerImage } from "../../public/mock-api/homeData";

export function BannerCarousel() {
  const [current, setCurrent] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<any>();

  React.useEffect(() => {
    if (api) {
      const onSelect = () => {
        setCurrent(api.selectedScrollSnap());
        if (plugin.current && !isPaused) {
          plugin.current.reset();
        }
      };

      api.on("select", onSelect);

      return () => {
        api.off("select", onSelect);
      };
    }
  }, [api, isPaused]);

  const handleMouseEnter = () => {
    if (plugin.current) {
      plugin.current.stop();
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (plugin.current && isPaused) {
      plugin.current.play();
      setIsPaused(false);
    }
  };

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
      if (plugin.current) {
        plugin.current.reset();
        if (isPaused) {
          plugin.current.play();
          setIsPaused(false);
        }
      }
    }
  };

  return (
    <div className="relative">
      <Carousel
        className="w-full max-w-3xl mx-auto"
        plugins={[plugin.current]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {bannerImage.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className="p-1">
                <img
                  src={banner.image}
                  alt={`Banner ${banner.id}`}
                  className="w-full h-full max-w-3xl max-h-[340px] object-cover "
                  style={{
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
                  }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center mt-4 space-x-2">
        <div className="absolute bottom-1.5">
          <div
            className="bg-[#e5e5ea] rounded-[10px] grid grid-cols-7 gap-1 p-1 relative"
            style={{ width: "80px", height: "7px" }}
          >
            <div
              className="absolute bg-[#ee4623] rounded-[10px] h-[7px] transition-all duration-500 ease-out"
              style={{
                width: `calc(100% / ${bannerImage.length})`,
                transform: `translateX(calc(${current} * 100%))`,
              }}
            />
            {bannerImage.map((_, index) => (
              <button
                key={index}
                className="relative z-10 w-[11.43px] h-[7px] bg-transparent"
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
