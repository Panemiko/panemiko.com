"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { CircleIcon } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-transparent p-4">
      <div className="flex items-center">
        <Button variant="ghost" size="icon-lg" asChild>
          <Link href="/">
            <CircleIcon className="text-primary fill-primary size-6" />
            <span className="sr-only">Home</span>
          </Link>
        </Button>
      </div>

      <nav className="flex items-center gap-2">
        <Button variant="ghost" asChild>
          <Link href="/about">about</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/projects">projects</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/websites">websites</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/articles">articles</Link>
        </Button>
      </nav>

      <div className="flex items-center">
        <ThemeToggle />
      </div>
    </header>
  );
}
