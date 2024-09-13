import { MoreVertical } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { P } from "../typography/p";
import { Small } from "../typography/small";

interface MarketIndexCardProps {
  title: string;
  description: string;
  publishedAt: string;
}

export function ReportCard({
  title,
  description,
  publishedAt,
}: MarketIndexCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-4 flex w-full items-center justify-between">
          <Small>{publishedAt}</Small>
          <MoreVertical />
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <P>{description}</P>
      </CardContent>
    </Card>
  );
}
