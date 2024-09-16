import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

import { SignUpForm } from "@/components/auth/sign-up-form";
import { H1 } from "@/components/typography/h1";
import { P } from "@/components/typography/p";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-card p-8 shadow-lg">
        <H1>Cadastrar</H1>

        <SignUpForm />

        <div className="flex items-center justify-between">
          <div className="h-px w-full bg-border" />
          <span className="px-2 text-muted-foreground">OU</span>
          <div className="h-px w-full bg-border" />
        </div>

        <Button variant="secondary" className="w-full">
          <FcGoogle className="mr-2 h-5 w-5" />
          Entrar com o Google
        </Button>

        <P className="text-center text-sm text-muted-foreground">
          Já tem uma conta?{" "}
          <Link href={"/sign-in"} className="text-primary underline">
            Entrar
          </Link>
        </P>
      </div>
    </div>
  );
}
