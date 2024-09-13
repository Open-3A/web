import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatPercentage } from "@/lib/number";

import { Large } from "../typography/large";
import { P } from "../typography/p";

interface MarketIndexCardProps {
  name: string;
  quotation: number;
  variation: number;
}

export function MarketIndexCard({
  name,
  quotation,
  variation,
}: MarketIndexCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-end justify-between">
        <Large>{formatCurrency(quotation)}</Large>
        <P className={variation < 0 ? "text-destructive" : "text-primary"}>
          {formatPercentage(variation)}
        </P>
      </CardContent>
    </Card>
  );
}
