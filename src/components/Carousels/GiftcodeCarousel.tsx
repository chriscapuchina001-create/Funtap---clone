import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

type GiftcodeItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type GiftcodeCarouselProps = {
  giftcodeChunks: GiftcodeItem[][];
};

const GiftcodeCarousel: React.FC<GiftcodeCarouselProps> = ({
  giftcodeChunks,
}) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {giftcodeChunks.map((chunk, chunkIndex) => (
          <CarouselItem key={chunkIndex}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {chunk.map((item, index) => (
                <button
                  key={`${chunkIndex}-${index}`}
                  className="flex items-center gap-5 hover:bg-gray-50 transition-colors text-[#1f1f1f] hover:text-[#ee4623]"
                >
                  <img
                    src={item.image}
                    alt="image"
                    className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-sm shrink-0"
                  />
                  <div className="flex flex-col justify-center items-start w-full min-w-0 h-full border-b! border-[#f2f2f2]!">
                    <h3 className="text-inherit truncate font-poppins text-[14px] md:text-[15.5px] font-normal">
                      {item.title}
                    </h3>
                    <p className="text-[#61616a] truncate font-poppins text-[12px] md:text-[13.5px] font-normal">
                      {item.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default GiftcodeCarousel;
