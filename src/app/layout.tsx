import "@/styles/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Header } from "./header";

const jetBrainsMonoHeading = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
});

const jetBrainsMonoSans = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Tito Oliveira | Web Full-Stack Developer",
  description:
    "Web Full-Stack Developer based in Porto Alegre, Brazil. Projects and contact information.",
  icons: [{ rel: "icon", url: "/icon.svg", type: "image/svg+xml" }],
  openGraph: {
    title: "Tito Oliveira | Web Full-Stack Developer",
    description:
      "Web Full-Stack Developer based in Porto Alegre, Brazil. Projects and contact information.",
    url: "https://panemiko.com",
    siteName: "Tito Oliveira",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tito Oliveira | Web Full-Stack Developer",
    description:
      "Web Full-Stack Developer based in Porto Alegre, Brazil. Projects and contact information.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        "font-sans",
        jetBrainsMonoSans.variable,
        jetBrainsMonoHeading.variable,
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
          <div className="flex h-screen w-6 flex-row lg:w-12 print:hidden">
            <div className="h-full flex-1 bg-[#6324d6]" />
            <div className="h-full flex-1 bg-[#94152a]" />
            <div className="bg-primary h-full flex-1" />
          </div>

          <div className="grid grid-rows-[auto_1fr]">
            <Header />
            <div className="relative z-10 pt-16">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
