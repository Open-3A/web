import { MoreVertical } from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { P } from "../typography/p";
import { Small } from "../typography/small";

interface MarketIndexCardProps {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
}

export function ReportCard({
  id,
  title,
  description,
  publishedAt,
}: MarketIndexCardProps) {
  return (
    <Link href={`/reports/${id}`}>
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
    </Link>
  );
}
