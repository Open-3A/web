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

interface ModuleCardProps {
  id: string;
  title: string;
  description: string;
  status: string;
  numberOfCompletedChapters: number;
  numberOfChapters: number;
}

export function ModuleCard({
  id,
  title,
  description,
  status,
  numberOfChapters,
  numberOfCompletedChapters,
}: ModuleCardProps) {
  const [text, color] = getFormattedStatus(status);

  return (
    <Link href={`/courses/${id}`}>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>{description}</CardContent>
        <CardFooter className="flex items-center justify-between">
          <Badge className={color}>{text}</Badge>
          <span>
            {numberOfCompletedChapters}/{numberOfChapters}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
