import "@/styles/globals.css";

import { type Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Tito Oliveira | Web Full-Stack Developer",
  description:
    "Web Full-Stack Developer based in Porto Alegre, Brazil. Projects and contact information.",
  icons: [{ rel: "icon", url: "/icon.svg", type: "image/svg+xml" }],
  openGraph: {
    title: "Tito Oliveira | Web Full-Stack Developer",
    description:
      "Web Full-Stack Developer based in Porto Alegre, Brazil. Projects and contact information.",
    url: "https://titooliveira.com.br",
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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden bg-white">
        {/* Decorative Spine */}
        <div className="fixed top-0 left-0 z-50 flex h-screen w-6 flex-row lg:w-12 print:hidden">
          <div className="h-full flex-1 bg-[#6324d6]" />
          <div className="h-full flex-1 bg-[#94152a]" />
          <div className="bg-accent h-full flex-1" />
        </div>

        {/* Content wrapper */}
        <div className="relative z-10 pl-3 lg:pl-12">{children}</div>
      </body>
    </html>
  );
}
