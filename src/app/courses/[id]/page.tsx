import { redirect } from "next/navigation";

import NotFound from "@/app/not-found";
import { ChapterCard } from "@/components/course/chapter-card";
import { H1 } from "@/components/typography/h1";
import { H2 } from "@/components/typography/h2";
import { P } from "@/components/typography/p";
import { Badge } from "@/components/ui/badge";
import { ProgressWithValue } from "@/components/ui/progress-with-value";
import { getFormattedStatus } from "@/lib/course";
import { getServerAuthSession } from "@/server/auth";
import { getCourseContent } from "@/server/backend/course.service";

function calculateModuleProgression(
  numberOfChapters: number,
  numberOfCompletedChapters: number,
) {
  if (numberOfChapters === 0) {
    return 0;
  }

  return Number(
    ((numberOfCompletedChapters / numberOfChapters) * 100).toFixed(0),
  );
}

interface ModulePageProps {
  params: {
    id: string;
  };
}

export default async function ModulePage({ params }: ModulePageProps) {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/sign-in");
  }

  const { id } = params;
  const course = await getCourseContent(session.user.id);

  const courseModule = course?.content.find((module) => module.id === id);

  if (!courseModule) {
    return <NotFound />;
  }

  const {
    id: moduleId,
    title,
    description,
    chapters,
    status,
    numberOfChapters,
    numberOfCompletedChapters,
  } = courseModule;

  const [text, color] = getFormattedStatus(status);

  return (
    <div className="container mx-auto space-y-5 px-4 py-8">
      <H1>{title}</H1>
      <Badge className={color}>{text}</Badge>
      <ProgressWithValue
        value={calculateModuleProgression(
          numberOfChapters,
          numberOfCompletedChapters,
        )}
      />

      <section className="space-y-3">
        <H2>Descrição</H2>
        <P>{description}</P>
      </section>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <H2>Capítulos</H2>
        {chapters.map(({ id, title, description, status }) => (
          <ChapterCard
            moduleId={moduleId}
            key={id}
            id={id}
            title={title}
            description={description}
            status={status}
          />
        ))}
      </div>
    </div>
  );
}
