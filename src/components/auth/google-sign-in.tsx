"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

import { Button } from "../ui/button";

export function GoogleSignIn() {
  return (
    <Button
      variant="secondary"
      className="w-full"
      onClick={() =>
        signIn("google", { callbackUrl: "http://localhost:3000/" })
      }
    >
      <FcGoogle className="mr-2 h-5 w-5" />
      Entrar com o Google
    </Button>
  );
}
