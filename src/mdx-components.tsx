import { CopyCodeButton } from "@/components/copy-code-button";
import { CustomLink } from "@/components/shared/custom-link";
import { cn } from "@/lib/utils";
import type { MDXComponents } from "mdx/types";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: ({
      href,
      children,
      ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <CustomLink href={href ?? ""} {...props}>
        {children}
      </CustomLink>
    ),
    img: ({
      src,
      alt,
      className,
      ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <figure className="my-8 flex flex-col items-center">
        <img
          src={src}
          alt={alt}
          className={cn(
            "rounded-xl md:-mx-12 md:w-[calc(100%+6rem)] lg:-mx-24 lg:w-[calc(100%+12rem)] lg:max-w-none",
            className,
          )}
          {...props}
        />
        {alt && (
          <figcaption className="text-muted-foreground mt-3 text-center text-sm">
            {alt}
          </figcaption>
        )}
      </figure>
    ),
    pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
      // Extract code text from children to pass to CopyCodeButton
      const codeElement = React.Children.toArray(children).find(
        (child) =>
          React.isValidElement(child) &&
          (child.type === "code" ||
            (child.props &&
              typeof child.props === "object" &&
              "children" in child.props)),
      ) as React.ReactElement<{ children?: React.ReactNode }> | undefined;

      const codeText =
        typeof codeElement?.props?.children === "string"
          ? codeElement.props.children
          : "";

      return (
        <div className="group relative">
          <pre {...props} className={props.className}>
            {children}
          </pre>
          <CopyCodeButton
            code={codeText}
            className="absolute top-3 right-3 opacity-0 transition-opacity group-hover:opacity-100"
          />
        </div>
      );
    },
  };
}
