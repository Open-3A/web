"use client";

import { useEffect, useState } from "react";

interface PDFViewerProps {
    fileData: Blob | MediaSource
}

export function PDFViewer({ fileData }: PDFViewerProps) {
  const [pdfUrl, setPdfUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPDF = () => {
      try {
        const url = URL.createObjectURL(fileData);
        setPdfUrl(url);
      } catch (err) {
        console.error("Error fetching the PDF:", err);
        setError("Failed to load PDF");
      }
    };

    loadPDF();

    return () => {
      if (pdfUrl) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [pdfUrl, fileData]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {pdfUrl ? (
        <embed
          src={pdfUrl}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
}
