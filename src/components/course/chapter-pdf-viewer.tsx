"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

import { getChapterContent } from "@/server/backend/course.service";

import { H2 } from "../typography/h2";
import { P } from "../typography/p";

interface ChapterPDFViewerProps {
  chapterId: string;
}

export function ChapterPDFViewer({ chapterId }: ChapterPDFViewerProps) {
  const [pdfUrl, setPdfUrl] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        const fileData = await getChapterContent(chapterId);

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
        <H2>Capítulo indisponível</H2>
        <P>
          Não foi possível obter o conteúdo deste capítulo. Tente novamente mais tarde.
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
