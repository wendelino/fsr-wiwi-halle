"use client";

import ReactMarkdown from "react-markdown";
import { cn } from "@/lib/utils";
import slugify from "@/lnio/utils/slugify";
import Toc, { type Heading } from "./toc";

function getHeadingText(children: React.ReactNode): string {
  if (typeof children === "string") {
    return children;
  }
  if (Array.isArray(children)) {
    return children
      .map((child) => (typeof child === "string" ? child : ""))
      .join("");
  }
  return "";
}

function extractHeadings(markdown: string): Heading[] {
  const headingRegex = /^(#{1,3})\s+(.+)$/gm;
  const headings: Heading[] = [];
  let match = headingRegex.exec(markdown);

  while (match !== null) {
    const level = match[1].length as 1 | 2 | 3;
    const text = match[2].trim();
    const id = slugify(text);

    headings.push({ level, text, id });
    match = headingRegex.exec(markdown);
  }

  return headings;
}
export default function Markdown({
  fileContents,
  disableToc,
}: {
  fileContents: string;
  disableToc?: boolean;
}) {
  // Extract headings once and generate IDs
  const headings = extractHeadings(fileContents);

  // Create a map for quick ID lookup by text
  const headingIdMap = new Map<string, Heading>();
  for (const heading of headings) {
    headingIdMap.set(heading.text, heading);
  }

  const createHeadingComponent = (level: 1 | 2 | 3, className: string) => {
    // biome-ignore lint/suspicious/noExplicitAny: react-markdown component types are complex
    return ({ node, children, ...props }: any) => {
      const text = getHeadingText(children);
      // Find the heading in our pre-generated list
      const heading = headingIdMap.get(text);
      const id = heading?.id || slugify(text);

      const HeadingTag = `h${level}` as "h1" | "h2" | "h3";
      return (
        <HeadingTag
          className={cn("text-foreground", className)}
          id={id}
          {...props}
        >
          {children}
        </HeadingTag>
      );
    };
  };

  return (
    <main className="width-wrapper gap-12 bg-background lg:flex">
      {!disableToc && (
        <aside className="w-full lg:max-w-sm">
          <Toc headings={headings} />
        </aside>
      )}
      <article className="w-full max-w-3xl py-8">
        <ReactMarkdown
          components={{
            h1: createHeadingComponent(1, "py-8 font-semibold text-3xl"),
            h2: createHeadingComponent(2, "pb-4 pt-8 font-semibold text-2xl"),
            h3: createHeadingComponent(3, "pb-2 pt-4 font-semibold text-xl"),

            h4: ({ node, ...props }) => (
              <h4
                className="pt-3 pb-1 font-semibold text-foreground text-lg"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p className="mb-4 text-foreground/80 leading-7" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul
                className="mb-4 ml-8 list-decimal text-foreground/80"
                {...props}
              />
            ),
            ol: ({ node, ...props }) => (
              <ol
                className="mb-4 ml-8 list-decimal text-foreground/80"
                {...props}
              />
            ),
            a: ({ node, ...props }) => (
              <a
                className="text-blue-600 hover:underline dark:text-blue-400"
                {...props}
              />
            ),
          }}
        >
          {fileContents}
        </ReactMarkdown>
      </article>
    </main>
  );
}
