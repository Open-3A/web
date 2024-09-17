import { PDFViewer } from "@/components/common/pdf-viewer";

interface ReportContentPageProps {
  params: {
    id: string;
  };
}

export default function ReportContentPage({ params }: ReportContentPageProps) {
  const { id } = params;

  return <PDFViewer reportId={id} />;
}
