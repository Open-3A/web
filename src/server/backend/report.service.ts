import { baseUrl } from "./configuration";

export type ReportResponse = {
    id: string;
    title: string;
    description: string;
    publishedAt: Date;
    fileId: string;
}

export async function getReports(page: number, size = 5): Promise<ReportResponse[] | null> {
    const response = await fetch(`${baseUrl}/api/v1/reports?page=${page}&size=${size}`, {
        next: {
            revalidate: 30 // 30 segundos
        }
    });

    if (!response.ok) {
        return null;
    }

    const body = await response.json();

    const reports: ReportResponse[] = [];
    for (const item of body) {
        reports.push({
            id: item.id,
            title: item.title,
            description: item.description,
            publishedAt: new Date(item.publishedAt as string),
            fileId: item.fileId
        })
    }

    return reports;
}

export async function getReportContent(reportId: string) {
    const response = await fetch(`${baseUrl}/api/v1/reports/${reportId}/download`, {
        next: {
            revalidate: 30 // 30 segundos
        }
    });

    if (!response.ok) {
        return null;
    }

    return await response.blob();
}