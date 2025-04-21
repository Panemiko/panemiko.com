import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

export function CustomButton({
  children,
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(
        "bg-primary/30 border-primary group relative h-12 rounded-lg border-2 hover:cursor-pointer",
        className,
      )}
      {...props}
    >
      <div className="bg-background border-primary h-12 w-[calc(100%+4px)] -translate-x-0.5 -translate-y-3 rounded-lg border-2 text-lg font-bold transition-all group-hover:-translate-y-2">
        <div className="bg-primary/70 size-full py-2.5">{children}</div>
      </div>
    </Comp>
  );
}
