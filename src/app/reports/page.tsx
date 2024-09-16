"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";

import { ReportCard } from "@/components/report/report-card";
import { H2 } from "@/components/typography/h2";
import InfiniteScroll from "@/components/ui/infinite-scroll";
import { formatDate } from "@/lib/date";
import {
  getReports,
  type ReportResponse,
} from "@/server/backend/report.service";

export default function ReportPage() {
  const pageSize = 2;

  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [reports, setReports] = useState<ReportResponse[]>([]);

  const next = async () => {
    setLoading(true);

    const reports = await getReports(page, pageSize);

    if (reports) {
      setReports((prev) => [...prev, ...reports]);
      setPage((prev) => prev + 1);

      if (reports.length < pageSize) {
        setHasMore(false);
      }

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto space-y-12 px-4 pt-20">
        <H2>Relatórios</H2>

        {reports.map(({ id, title, description, publishedAt }) => (
          <ReportCard
            key={id}
            title={title}
            description={description}
            publishedAt={formatDate(publishedAt)}
          />
        ))}

        <InfiniteScroll
          hasMore={hasMore}
          isLoading={loading}
          next={next}
          threshold={1}
        >
          {hasMore && <Loader2 className="mx-auto my-4 h-8 w-8 animate-spin" />}
        </InfiniteScroll>
      </div>
    </div>
  );
}
