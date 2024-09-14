import { getMarketIndexes } from "@/server/backend/quote.service";

import { H2 } from "../typography/h2";
import { MarketIndexCarousel } from "./market-index-carousel";

export async function MarketSection() {
  const data = await getMarketIndexes();

  return (
    <>
      <H2>Acompanhe o mercado</H2>
      <MarketIndexCarousel data={data} />
    </>
  );
}
