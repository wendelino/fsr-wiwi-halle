"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Extracts headings (h1, h2, h3) from markdown content
 */
export type Heading = {
  level: 1 | 2 | 3;
  text: string;
  id: string;
};

type TableOfContentsProps = {
  headings: Heading[];
  className?: string;
};

export default function Toc({ headings, className }: TableOfContentsProps) {
  const [visibleIds, setVisibleIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (headings.length === 0) {
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px 0% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      setVisibleIds((prev) => {
        const updated = new Set(prev);
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            updated.add(id);
          } else {
            updated.delete(id);
          }
        }
        return updated;
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all heading elements
    for (const heading of headings) {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  const renderHeading = (heading: Heading, index: number) => {
    const isVisible = visibleIds.has(heading.id);
    const baseClasses =
      "pl-2 -ml-3 block font-medium text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 border-l-2 border-transparent";
    const levelClasses = {
      1: "font-semibold text-lg py-2   text-foreground",
      2: "pl-3 pt-2 pb-1 sm:py-2 text-foreground",
      3: "pl-6 py-1.5 text-foreground/80 text-xs",
    };
    const activeClasses = isVisible
      ? "sm:text-blue-600   sm:border-l-blue-600/50"
      : "";

    return (
      <a
        className={cn(baseClasses, levelClasses[heading.level], activeClasses)}
        href={`#${heading.id}`}
        key={`${heading.id}-${index}`}
      >
        {heading.text}
      </a>
    );
  };

  return (
    <div className="sticky top-0 py-8 sm:h-screen">
      <nav
        aria-label="Inhaltsverzeichnis"
        className={cn(
          "h-full overflow-y-auto rounded-lg sm:border sm:p-6 sm:shadow-lg",
          className
        )}
      >
        <h2 className="font-semibold text-muted-foreground text-sm">
          Inhaltsverzeichnis
        </h2>

        {headings.map((heading, index) => renderHeading(heading, index))}
      </nav>
    </div>
  );
}
