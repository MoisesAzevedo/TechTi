import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const DefaultCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start"
      }}
    >
      <CarouselContent className="max-w-full  ">
        {Array.from({ length: 12 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4  ">
            <div className="p-1">
              <Card className="  border-none shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)] bg-[#ffffff]">
                <CardContent className="flex aspect-square items-center justify-center p-6 w-[199px] h-[112px]  ">
                  <span className="text-3xl font-semibold">{index + 1}</span>
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
