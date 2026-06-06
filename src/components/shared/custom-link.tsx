import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Link as TransitionLink } from "next-view-transitions";
import React from "react";

export const customLinkVariants = cva("", {
  variants: {
    variant: {
      default:
        "hover:text-primary text-foreground underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm",
      unstyled: "",
      animated:
        "relative hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CustomLinkProps
  extends
    React.ComponentPropsWithoutRef<typeof TransitionLink>,
    VariantProps<typeof customLinkVariants> {
  href: string;
}

export const CustomLink = React.forwardRef<HTMLAnchorElement, CustomLinkProps>(
  (
    { href, children, target, rel, variant = "default", className, ...props },
    ref,
  ) => {
    const isExternal =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("//") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:");
    const isHash = href.startsWith("#");

    const combinedClassName = cn(customLinkVariants({ variant }), className);

    if (isExternal || isHash) {
      return (
        <a
          href={href}
          target={isExternal ? (target ?? "_blank") : target}
          rel={isExternal ? (rel ?? "noopener noreferrer") : rel}
          ref={ref}
          className={combinedClassName}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <TransitionLink
        href={href}
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        {children}
      </TransitionLink>
    );
  },
);

CustomLink.displayName = "CustomLink";
