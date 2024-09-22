import { ReportPDFViewer } from "@/components/report/report-pdf-viewer";

interface ReportContentPageProps {
  params: {
    id: string;
  };
}

export default function ReportContentPage({ params }: ReportContentPageProps) {
  const { id } = params;

  return <ReportPDFViewer reportId={id} />;
}
