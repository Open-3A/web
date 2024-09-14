"use client";

import Autoplay from "embla-carousel-autoplay";

import { type MarketIndexResponse } from "@/server/backend/quote.service";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { MarketIndexCard } from "./market-index-card";

interface MarketIndexCarouselProps {
  data: MarketIndexResponse[];
}

export function MarketIndexCarousel({ data }: MarketIndexCarouselProps) {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4_000,
        }),
      ]}
    >
      <CarouselContent>
        {data.map(({ name, code, quote }) => (
          <CarouselItem key={code}>
            <MarketIndexCard
              name={name}
              quotation={quote?.price ?? 0}
              variation={quote?.variation ?? 0}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
