import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { NextAuthProvider } from "@/components/auth/session-provider";
import { NavigationBar } from "@/components/common/navigation-bar";
import { ThemeProvider } from "@/lib/providers/theme-provider";

export const metadata: Metadata = {
  title: "3A",
  description: "Investir com IA é 3x melhor.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextAuthProvider>
            <NavigationBar />
            {children}
          </NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
