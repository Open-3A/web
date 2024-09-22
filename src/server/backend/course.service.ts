import { baseUrl } from "./configuration";

export type ChapterResponse = {
    id: string;
    title: string;
    description: string;
    fileId: string | null;
    status: 'TO_CONTINUE' | 'BLOCKED';
    completed: boolean;
    inProgress: boolean;
};

export type ModuleResponse = {
    id: string;
    title: string;
    description: string;
    status: 'TO_CONTINUE' | 'BLOCKED';
    chapters: ChapterResponse[];
    numberOfCompletedChapters: number;
    numberOfChapters: number;
};

export type UserProgressResponse = {
    userId: string;
    content: ModuleResponse[];
    progression: number;
};

export async function getCourseContent(userId: string): Promise<UserProgressResponse | null> {
    const url = `${baseUrl}/api/v1/courses/content/${userId}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            return null;
        }

        const data: UserProgressResponse = await response.json();

        return data;
    } catch (error) {
        console.error("Erro ao buscar o conteúdo do curso:", error);
        return null;
    }
}


export async function getChapterContent(chapterId: string) {
    const response = await fetch(`${baseUrl}/api/v1/courses/chapters/${chapterId}`, {
        next: {
            revalidate: 30 // 30 segundos
        }
    });

    if (!response.ok) {
        return null;
    }

    return await response.blob();
}