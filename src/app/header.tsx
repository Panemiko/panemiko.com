"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { CircleIcon } from "lucide-react";
import { CustomLink } from "@/components/shared/custom-link";

export function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-y-4 bg-transparent p-4">
      <div className="order-1 flex items-center">
        <Button variant="ghost" size="icon-lg" asChild>
          <CustomLink href="/" variant="unstyled">
            <CircleIcon className="text-primary fill-primary size-6" />
            <span className="sr-only">Início</span>
          </CustomLink>
        </Button>
      </div>

      <div className="order-2 flex items-center sm:order-3">
        <ThemeToggle />
      </div>

      <nav className="order-3 flex w-full flex-wrap items-center justify-center gap-2 sm:order-2 sm:w-auto">
        <Button variant="ghost" asChild>
          <CustomLink href="/" variant="unstyled">Sobre</CustomLink>
        </Button>
        <Button variant="ghost" asChild>
          <CustomLink href="/projects" variant="unstyled">Projetos</CustomLink>
        </Button>
        <Button variant="ghost" asChild>
          <CustomLink href="/articles" variant="unstyled">Artigos</CustomLink>
        </Button>
        <Button variant="ghost" asChild>
          <CustomLink href="/contact" variant="unstyled">Contato</CustomLink>
        </Button>
      </nav>
    </header>
  );
}
