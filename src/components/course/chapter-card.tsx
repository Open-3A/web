import Link from "next/link";

import { getFormattedStatus } from "@/lib/course";

import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface ChapterCardProps {
  moduleId: string;
  id: string;
  title: string;
  description: string;
  status: string;
}

export function ChapterCard({
  moduleId,
  id,
  title,
  description,
  status,
}: ChapterCardProps) {
  const [text, color] = getFormattedStatus(status);

  return (
    <Link href={`/courses/${moduleId}/chapters/${id}`}>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>{description}</CardContent>
        <CardFooter className="flex items-center justify-between">
          <Badge className={color}>{text}</Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
