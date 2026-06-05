"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { CircleIcon } from "lucide-react";
import { Link } from "next-view-transitions";

export function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-y-4 bg-transparent p-4">
      <div className="order-1 flex items-center">
        <Button variant="ghost" size="icon-lg" asChild>
          <Link href="/">
            <CircleIcon className="text-primary fill-primary size-6" />
            <span className="sr-only">Home</span>
          </Link>
        </Button>
      </div>

      <div className="order-2 flex items-center sm:order-3">
        <ThemeToggle />
      </div>

      <nav className="order-3 flex w-full flex-wrap items-center justify-center gap-2 sm:order-2 sm:w-auto">
        <Button variant="ghost" asChild>
          <Link href="/about">About</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/projects">Projects</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/articles">Articles</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/contact">Contact</Link>
        </Button>
      </nav>
    </header>
  );
}
