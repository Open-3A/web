import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function getFormattedStatus(status: string) {
  if (status.toUpperCase() == "BLOCKED") {
    return "Bloqueado";
  }

  if (status.toUpperCase() == "TO_CONTINUE") {
    return "Em andamento";
  }

  if (status.toUpperCase() == "COMPLETED") {
    return "Concluído";
  }
}

interface ModuleCardProps {
  title: string;
  description: string;
  status: string;
  numberOfCompletedChapters: number;
  numberOfChapters: number;
}

export function ModuleCard({
  title,
  description,
  status,
  numberOfChapters,
  numberOfCompletedChapters,
}: ModuleCardProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter className="flex items-center justify-between">
        <Badge>{getFormattedStatus(status)}</Badge>
        <span>
          {numberOfCompletedChapters}/{numberOfChapters}
        </span>
      </CardFooter>
    </Card>
  );
}
