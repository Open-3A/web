import { baseUrl } from "./configuration";

export type QuoteResponse = {
    price: number;
    variation: number;
    formattedPrice: string;
    formattedVariation: string;
}

export async function getQuote(code: string): Promise<QuoteResponse | null> {
    const response = await fetch(`${baseUrl}/api/v1/quote/${code}`, {
        next: {
            revalidate: 5 * 60 // 5 minutos
        }
    });

    if (!response.ok) {
        return null;
    }

    return await response.json() as QuoteResponse;
}

export type MarketIndexResponse = {
    name: string;
    code: string;
    quote: QuoteResponse | null;
}

const indexes: MarketIndexResponse[] = [
    {
        name: "Ibovespa",
        code: "IBOV:INDEXBVMF",
        quote: null
    },
    {
        name: "S&P 500",
        code: ".INX:INDEXSP",
        quote: null
    },
    {
        name: "Dow Jones",
        code: ".DJI:INDEXDJX",
        quote: null
    }
];

export async function getMarketIndexes(): Promise<MarketIndexResponse[]> {
    const result: MarketIndexResponse[] = []

    for (const index of indexes) {
        const response = await getQuote(index.code);

        result.push({ ...index, quote: response });
    }

    return result;
}