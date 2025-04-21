import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef } from "react";

export function MaxWidth({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    />
  );
}
