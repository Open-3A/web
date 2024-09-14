import { formatDate } from "@/lib/date";
import { getReports } from "@/server/backend/report.service";

import { H2 } from "../typography/h2";
import { Lead } from "../typography/lead";
import { ReportCard } from "./report-card";

const reportsData = [
  {
    id: 1,
    title: "Análise Técnica - Setembro",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt unde quam fugiat sint, porro aliquid, dignissimos esse pariatur, maxime vel quod perferendis! Ipsam, excepturi eos!",
    publishedAt: "12/09/2024",
  },
  {
    id: 2,
    title: "Previsão Econômica Q3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt unde quam fugiat sint, porro aliquid, dignissimos esse pariatur, maxime vel quod perferendis! Ipsam, excepturi eos!",
    publishedAt: "10/09/2024",
  },
  {
    id: 3,
    title: "Relatório de Dividendos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt unde quam fugiat sint, porro aliquid, dignissimos esse pariatur, maxime vel quod perferendis! Ipsam, excepturi eos!",
    publishedAt: "05/09/2024",
  },
];

export async function ReportSection() {
  const reports = await getReports(0);

  return (
    <>
      <H2>Relatórios</H2>
      {reports ? (
        reports.map(({ id, title, description, publishedAt }) => (
          <ReportCard
            key={id}
            title={title}
            description={description}
            publishedAt={formatDate(publishedAt)}
          />
        ))
      ) : (
        <Lead>Nenhum relatório encontrado...</Lead>
      )}
    </>
  );
}
