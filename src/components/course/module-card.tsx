import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function getFormattedStatus(status: string) {
  if (status.toUpperCase() == "TO_CONTINUE") {
    return ["Em andamento", "bg-yellow-400"];
  }

  if (status.toUpperCase() == "COMPLETED") {
    return ["Concluído", "bg-green-400"];
  }

  // status = BLOCKED
  return ["Bloqueado", "bg-red-400"];
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
  const [text, color] = getFormattedStatus(status);

  return (
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
  );
}
