"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import choperiaImage from "./assets/websites/choperia.png";
import cobuiltImage from "./assets/websites/cobuilt.png";
import micheleCardosoImage from "./assets/websites/michele-cardoso.png";
import promofinderImage from "./assets/websites/promofinder.png";

export function WebsitesCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem className="relative">
          <div className="absolute top-0 left-0 size-full bg-linear-to-b from-transparent to-black/80" />
          <Image
            className="max-h-[500px] w-full object-cover object-top"
            alt="Site para uma choperia"
            src={choperiaImage}
          />
        </CarouselItem>
        <CarouselItem className="relative">
          <div className="absolute top-0 left-0 size-full bg-linear-to-b from-transparent to-black/80" />
          <Image
            className="max-h-[500px] w-full object-cover object-top"
            alt="Site para a Clínica Michele Cardoso"
            src={micheleCardosoImage}
          />
        </CarouselItem>
        <CarouselItem className="relative">
          <div className="absolute top-0 left-0 size-full bg-linear-to-b from-transparent to-black/80" />
          <Image
            className="max-h-[500px] w-full object-cover object-top"
            alt="Site para a empresa Cobuilt"
            src={cobuiltImage}
          />
        </CarouselItem>
        <CarouselItem className="relative">
          <div className="absolute top-0 left-0 size-full bg-linear-to-b from-transparent to-black/80" />
          <Image
            className="max-h-[500px] w-full object-cover object-top"
            alt="Site para a startup Promofinder"
            src={promofinderImage}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
