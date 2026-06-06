import { cn } from "@/lib/utils";
import React from "react";

interface MaxWidthProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function MaxWidth({ children, className, ...props }: MaxWidthProps) {
  return (
    <div
      className={cn("mx-auto max-w-2xl px-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}
