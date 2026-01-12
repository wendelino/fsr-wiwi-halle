"use client";

import { type HTMLMotionProps, motion } from "motion/react";
import { cn } from "@/lib/utils";

type TitleVariant = "h1" | "h2" | "h3" | "h4" | "h5";

type TitleProps = {
  variant?: TitleVariant;
  children: React.ReactNode;
  className?: string;
  delay?: number;
} & Omit<HTMLMotionProps<"h1">, "children">;

const variantStyles: Record<TitleVariant, string> = {
  h1: "text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl",
  h2: "text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
  h3: "text-2xl font-semibold tracking-tight md:text-3xl",
  h4: "text-xl font-semibold tracking-tight md:text-2xl",
  h5: "text-lg font-medium tracking-tight md:text-xl",
};

export const Title = ({
  variant = "h1",
  children,
  className,
  delay = 0,
  ...props
}: TitleProps) => {
  const MotionTag = motion[variant] as typeof motion.h1;

  return (
    <MotionTag
      animate={{ opacity: 1, y: 0 }}
      className={cn(variantStyles[variant], className)}
      initial={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
};
