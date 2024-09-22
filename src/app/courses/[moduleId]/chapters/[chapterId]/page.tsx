import { redirect } from "next/navigation";

import NotFound from "@/app/not-found";
import { ChapterPDFViewer } from "@/components/course/chapter-pdf-viewer";
import { H1 } from "@/components/typography/h1";
import { H2 } from "@/components/typography/h2";
import { P } from "@/components/typography/p";
import { Badge } from "@/components/ui/badge";
import { getFormattedStatus } from "@/lib/course";
import { getServerAuthSession } from "@/server/auth";
import { getCourseContent } from "@/server/backend/course.service";

interface ChapterPageProps {
  params: {
    chapterId: string;
  };
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const session = await getServerAuthSession();

  if (!session) {
    redirect("/sign-in");
  }

  const { chapterId } = params;
  console.log(chapterId);
  const course = await getCourseContent(session.user.id);

  const courseChapter = course?.content
    .flatMap((module) => module.chapters)
    .find((chapter) => chapter.id === chapterId);

  if (!courseChapter) {
    return <NotFound />;
  }

  const { title, description, status } = courseChapter;

  const [text, color] = getFormattedStatus(status);

  return (
    <div className="container mx-auto space-y-5 px-4 py-8">
      <H1>{title}</H1>
      <Badge className={color}>{text}</Badge>

      <section className="space-y-3">
        <H2>Descrição</H2>
        <P>{description}</P>
      </section>

      <main className="space-y-3">
        <H2>Conteúdo</H2>
        <ChapterPDFViewer chapterId={chapterId} />
      </main>
    </div>
  );
}
