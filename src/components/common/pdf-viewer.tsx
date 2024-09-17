"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

import { getReportContent } from "@/server/backend/report.service";

import { H2 } from "../typography/h2";
import { P } from "../typography/p";

interface PDFViewerProps {
  reportId: string;
}

export function PDFViewer({ reportId }: PDFViewerProps) {
  const [pdfUrl, setPdfUrl] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        const fileData = await getReportContent(reportId);

        if (!fileData) {
          return;
        }

        const url = URL.createObjectURL(fileData);
        setPdfUrl(url);
      } catch (err) {
        console.error("Error fetching the PDF:", err);
        setIsError(true);
      }
    };

    void loadPDF();

    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, []);

  if (isError) {
    return (
      <>
        <H2>Relatório indisponível</H2>
        <P>
          Não foi possível obter este relatório. Tente novamente mais tarde.
        </P>
      </>
    );
  }

  return (
    <div className="my-10">
      {pdfUrl ? (
        <embed
          src={pdfUrl}
          type="application/pdf"
          width="100%"
          className="h-screen"
        />
      ) : (
        <Loader2 className="mx-auto my-4 h-8 w-8 animate-spin" />
      )}
    </div>
  );
}
