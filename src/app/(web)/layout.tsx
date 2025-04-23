import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute top-0 -z-50 h-full min-h-screen w-screen bg-[url(/static/background-texture.jpg)] bg-contain bg-center bg-repeat opacity-30" />
      <main>{children}</main>
    </div>
  );
}
