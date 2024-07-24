import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

import img from "../assets/maindBanner.jpg";

const FeedbackSection: FC = () => {
  return (
    <div className="container flex flex-col items-center justify-center my-10">
      <h3 className="mb-5 text-[20px] text-[#1565C0]">Отзывы</h3>
      <Carousel className="">
        <CarouselContent>
          <CarouselItem className="md:basis-1/2">
            <img src={img} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2">
            <img src={img} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2">
            <img src={img} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2">
            <img src={img} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2">
            <img src={img} alt="" />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2">
            <img src={img} alt="" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export { FeedbackSection };
