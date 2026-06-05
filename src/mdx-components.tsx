import type { MDXComponents } from "mdx/types";
import { CopyCodeButton } from "@/components/copy-code-button";
import React from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
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
