import { formatDate } from "@/lib/date";
import { getReports } from "@/server/backend/report.service";

import { H2 } from "../typography/h2";
import { Lead } from "../typography/lead";
import { ReportCard } from "./report-card";

export async function ReportSection() {
  const reports = await getReports(0);

  return (
    <>
      <H2>Relatórios</H2>

      <div className="flex flex-col gap-5">
        {reports ? (
          reports.map(({ id, title, description, publishedAt }) => (
            <ReportCard
              key={id}
              id={id}
              title={title}
              description={description}
              publishedAt={formatDate(publishedAt)}
            />
          ))
        ) : (
          <Lead>Nenhum relatório encontrado...</Lead>
        )}
      </div>
    </>
  );
}
