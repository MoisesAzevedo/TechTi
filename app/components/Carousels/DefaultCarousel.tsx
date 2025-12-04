import { Card, CardContent } from "@/app/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import useCases from "./DefaultCarouselFeature/useCases";

const DefaultCarousel = () => {
  const cases = useCases();

  return (
    <Carousel
      opts={{
        align: "start",
      }}
    >
      <CarouselContent className="max-w-full  ">
        {cases.map((c) => (
          <CarouselItem key={c.id} className="md:basis-1/2 lg:basis-1/4  ">
            <div className="p-1">
              <Card className="  border-none shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] bg-[#ffffff]">
                <CardContent className="flex aspect-square items-center justify-center p-6 w-[199px] h-[112px]  ">
                  <img
                    src={c.src}
                    alt={c.alt ?? c.id}
                    className="max-w-[90%] max-h-[80%] object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default DefaultCarousel;
