import "@/styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Geist_Mono } from "next/font/google";
import { Header } from "./header";

const geistMonoHeading = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
});

const geistMonoSans = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Tito Oliveira - Desenvolvedor Web Full-Stack",
    template: "%s - Tito Oliveira",
  },
  description:
    "Desenvolvedor Web Full-Stack em Porto Alegre, Brasil. Projetos e informações de contato.",
  icons: [{ rel: "icon", url: "/icon.svg", type: "image/svg+xml" }],
  openGraph: {
    title: {
      default: "Tito Oliveira - Desenvolvedor Web Full-Stack",
      template: "%s - Tito Oliveira",
    },
    description:
      "Desenvolvedor Web Full-Stack em Porto Alegre, Brasil. Projetos e informações de contato.",
    url: "https://panemiko.com",
    siteName: "Tito Oliveira",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tito Oliveira - Desenvolvedor Web Full-Stack",
    description:
      "Desenvolvedor Web Full-Stack em Porto Alegre, Brasil. Projetos e informações de contato.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ViewTransitions>
      <html
        lang="pt-BR"
        className={cn(
          "font-sans",
          geistMonoSans.variable,
          geistMonoHeading.variable,
        )}
        suppressHydrationWarning
      >
        <body className="bg-background relative grid min-h-screen grid-cols-[auto_1fr] overflow-x-hidden">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* Decorative Spine */}
            <div
              className="flex h-screen w-2 flex-row lg:w-12 print:hidden"
              style={{ viewTransitionName: "spine" }}
            >
              <div className="h-full flex-1 bg-[#6324d6]" />
              <div className="h-full flex-1 bg-[#94152a]" />
              <div className="bg-primary h-full flex-1" />
            </div>

            <div className="grid h-screen grid-rows-[auto_1fr] overflow-y-auto">
              <div style={{ viewTransitionName: "header" }}>
                <Header />
              </div>
              <div>{children}</div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
