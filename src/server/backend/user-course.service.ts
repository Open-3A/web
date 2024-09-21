import { baseUrl } from "./configuration";
import { type ChapterResponse } from "./course.service";

export async function startCourse(userId: string): Promise<boolean> {
    const response = await fetch(`${baseUrl}/api/v1/courses/${userId}/start`, {
        method: "POST"
    });

    return response.ok;
}

export type UserProgressionResponse = {
    completedChapters: number;
    totalChapters: number,
    progressInPercentage: number,
    formattedProgressInPercentage: string;
}

export async function getUserProgression(userId: string): Promise<UserProgressionResponse | null> {
    const response = await fetch(`${baseUrl}/api/v1/courses/${userId}`);

    if (!response.ok) {
        return null;
    }

    return (await response.json()) as UserProgressionResponse;
}

export async function getChapterInProgress(userId: string): Promise<ChapterResponse | null> {
    const response = await fetch(`${baseUrl}/api/v1/courses/${userId}/in-progress`);

    if (!response.ok) {
        return null;
    }

    return (await response.json()) as ChapterResponse;
}

export async function finishReading(userId: string): Promise<boolean> {
    const response = await fetch(`${baseUrl}/api/v1/courses/${userId}/finish`, {
        method: "PATCH"
    });

    return response.ok;
}