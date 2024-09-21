import {
  type DefaultSession,
  getServerSession,
  type NextAuthOptions
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { env } from "@/env";

import { getUser, registerUser } from "./backend/user.service";
import { startCourse } from "./backend/user-course.service";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: async ({ session, token }) => {
      if (token.name && token.email) {
        let userId = await getUser(token.email);

        if (!userId) {
          userId = await registerUser(token.name, token.email);
        }

        if (userId) {
          await startCourse(userId);

          return {
            ...session,
            user: {
              id: userId,
              name: token.name,
              email: token.email,
              image: token.picture
            },
          }
        }
      }

      return {
        ...session,
        user: {
          ...session.user,
        },
      }
    },
  },
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
