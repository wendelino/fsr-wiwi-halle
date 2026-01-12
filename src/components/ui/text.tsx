"use client";

import { type HTMLMotionProps, motion } from "motion/react";
import { cn } from "@/lib/utils";

type TextProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "p" | "span" | "div";
} & Omit<HTMLMotionProps<"p">, "children">;

export const Text = ({
  children,
  className,
  delay = 0,
  as = "p",
  ...props
}: TextProps) => {
  const MotionTag = motion[as] as typeof motion.p;

  return (
    <MotionTag
      animate={{ opacity: 1, y: 0 }}
      className={cn("text-muted-foreground leading-relaxed", className)}
      initial={{ opacity: 0, y: 15 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
};
