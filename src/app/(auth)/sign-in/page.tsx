import Link from "next/link";

import { GoogleSignIn } from "@/components/auth/google-sign-in";
import { SignInForm } from "@/components/auth/sign-in-form";
import { H1 } from "@/components/typography/h1";
import { P } from "@/components/typography/p";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-card p-8 shadow-lg">
        <H1>Entrar</H1>

        <SignInForm />

        <div className="flex items-center justify-between">
          <div className="h-px w-full bg-border" />
          <span className="px-2 text-muted-foreground">OU</span>
          <div className="h-px w-full bg-border" />
        </div>

        <GoogleSignIn />

        <P className="text-center text-sm text-muted-foreground">
          Não tem uma conta?{" "}
          <Link href={"/sign-up"} className="text-primary underline">
            Cadastrar
          </Link>
        </P>
      </div>
    </div>
  );
}
