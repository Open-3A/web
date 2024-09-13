import { PlayCircle } from "lucide-react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Large } from "../typography/large";
import { Button } from "../ui/button";

export function ContinueCourseCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">
          Investindo em Ações de Crescimento
        </CardTitle>
        <CardDescription>Continue de onde você parou!</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo aut
        officia minima vel. Cumque, assumenda facilis? Voluptatibus aut
        voluptate quia soluta cumque ab quis fuga veniam est quas, odio atque
        placeat alias fugiat enim suscipit iste sit aliquid provident
        perferendis!
      </CardContent>
      <CardFooter>
        <Button variant={"link"} className="mx-auto">
          <Link
            href={"/courses/continue"}
            className="flex items-center"
          >
            <PlayCircle className="mr-3" />
            <Large>Continuar</Large>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
