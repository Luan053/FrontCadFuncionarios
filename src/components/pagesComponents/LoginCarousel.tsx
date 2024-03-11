import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import meeting from "../../assets/meeting.svg";
import meetingFinances from "../../assets/meetingFinances.svg";
import leaveJob from "../../assets/leaveJob.svg";

export const LoginCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );
  return (
    <div className="bg-primary w-full h-full items-center justify-center p-16 hidden md:flex">
      <Carousel className="w-full max-w-xl" plugins={[plugin.current]}>
        <CarouselContent>
          <CarouselItem>
            <div className="flex aspect-square bg-slate-800 rounded-xl p-8">
              <img src={meeting} alt="Reunião de funcionários" />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex aspect-square bg-background rounded p-8">
              <img
                src={meetingFinances}
                alt="Reunião de funcionários envolvendo finanças"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex aspect-square bg-slate-800 rounded p-8">
              <img src={leaveJob} alt="Saindo do trabalho" />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};
