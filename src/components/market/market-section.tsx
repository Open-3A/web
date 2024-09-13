"use client";

import Autoplay from "embla-carousel-autoplay";

import { H2 } from "../typography/h2";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { MarketIndexCard } from "./market-index-card";

const marketData = [
  { name: "S&P 500", quotation: 8500, variation: 0.75 },
  { name: "Nasdaq", quotation: 4750, variation: -0.65 },
  { name: "Dow Jones", quotation: 4150, variation: 0.32 },
];

export function MarketSection() {
  return (
    <>
      <H2>Acompanhe o mercado</H2>
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
          {marketData.map(({ name, quotation, variation }) => (
            <CarouselItem key={name}>
              <MarketIndexCard
                name={name}
                quotation={quotation}
                variation={variation}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}
