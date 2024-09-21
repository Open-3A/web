import { baseUrl } from "./configuration";
import { startCourse } from "./user-course.service";

export async function registerUser(name: string, email: string): Promise<string | null> {
    const response = await fetch(`${baseUrl}/api/v1/users`, {
        method: "POST",
        body: JSON.stringify({ name, email }),
    });

    if (!response.ok) {
        return null;
    }

    const body = await response.json();
    const userId: string | null = body.userId ?? null;

    if (userId) {
        const result = await startCourse(userId);

        if (!result) {
            return null;
        }
    }

    return userId;
}

export async function getUser(email: string): Promise<string | null> {
    const response = await fetch(`${baseUrl}/api/v1/users?email=${email}`);

    if (!response.ok) {
        return null;
    }

    const body = await response.json();

    return (body.userId as string) ?? null;
}
