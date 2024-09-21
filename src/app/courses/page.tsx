import { redirect } from "next/navigation";

import { ModuleCard } from "@/components/course/module-card";
import { H1 } from "@/components/typography/h1";
import { Large } from "@/components/typography/large";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProgressWithValue } from "@/components/ui/progress-with-value";
import { getServerAuthSession } from "@/server/auth";
import { getCourseContent } from "@/server/backend/course.service";

export default async function CoursePage() {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/sign-in");
  }

  const course = await getCourseContent(session.user.id);

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-8">
        <H1>Curso</H1>
        <Large>Não há conteúdo...</Large>
      </div>
    );
  }

  const { content, progression } = course;

  return (
    <div className="container mx-auto space-y-5 px-4 py-8">
      <H1>Curso</H1>
      <ProgressWithValue value={progression} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.map(
          ({
            id,
            title,
            description,
            status,
            numberOfChapters,
            numberOfCompletedChapters,
          }) => (
            <ModuleCard
              key={id}
              title={title}
              description={description}
              status={status}
              numberOfChapters={numberOfChapters}
              numberOfCompletedChapters={numberOfCompletedChapters}
            />
          ),
        )}
      </div>
    </div>
  );
}
