"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLMotionProps, motion } from "motion/react";
import type * as React from "react";

import { cn } from "@/lib/utils";

const ctaVariants = cva(
  "relative overflow-hidden rounded-2xl p-8 md:p-10 lg:p-12",
  {
    variants: {
      variant: {
        default: "border border-border bg-card shadow-sm",
        gradient:
          "border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent",
        outline:
          "border-2 border-border bg-transparent transition-colors hover:border-primary/50",
        highlight: "bg-primary text-primary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type CTAProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
} & VariantProps<typeof ctaVariants> &
  Omit<HTMLMotionProps<"section">, "children">;

export const CTA = ({
  children,
  className,
  variant,
  delay = 0,
  ...props
}: CTAProps) => (
  <motion.section
    animate={{ opacity: 1, y: 0 }}
    className={cn(ctaVariants({ variant }), className)}
    initial={{ opacity: 0, y: 30 }}
    transition={{
      duration: 0.6,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    }}
    {...props}
  >
    {children}
  </motion.section>
);

type CTAHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export const CTAHeader = ({ children, className }: CTAHeaderProps) => (
  <div className={cn("mb-6 md:mb-8", className)}>{children}</div>
);

type CTATitleProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const CTATitle = ({
  children,
  className,
  delay = 0.1,
}: CTATitleProps) => (
  <motion.h2
    animate={{ opacity: 1, y: 0 }}
    className={cn(
      "font-bold text-2xl tracking-tight md:text-3xl lg:text-4xl",
      className
    )}
    initial={{ opacity: 0, y: 15 }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    }}
  >
    {children}
  </motion.h2>
);

type CTADescriptionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const CTADescription = ({
  children,
  className,
  delay = 0.2,
}: CTADescriptionProps) => (
  <motion.p
    animate={{ opacity: 1, y: 0 }}
    className={cn("mt-3 text-muted-foreground md:text-lg", className)}
    initial={{ opacity: 0, y: 15 }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    }}
  >
    {children}
  </motion.p>
);

type CTAContentProps = {
  children: React.ReactNode;
  className?: string;
};

export const CTAContent = ({ children, className }: CTAContentProps) => (
  <div className={cn("space-y-4", className)}>{children}</div>
);

type CTAActionsProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const CTAActions = ({
  children,
  className,
  delay = 0.3,
}: CTAActionsProps) => (
  <motion.div
    animate={{ opacity: 1, y: 0 }}
    className={cn("mt-8 flex flex-wrap gap-4", className)}
    initial={{ opacity: 0, y: 15 }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    }}
  >
    {children}
  </motion.div>
);

type CTAFeatureListProps = {
  features: string[];
  className?: string;
  delay?: number;
};

export const CTAFeatureList = ({
  features,
  className,
  delay = 0.2,
}: CTAFeatureListProps) => (
  <motion.ul
    animate={{ opacity: 1, y: 0 }}
    className={cn("grid gap-3 sm:grid-cols-2", className)}
    initial={{ opacity: 0, y: 15 }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    }}
  >
    {features.map((feature, index) => (
      <motion.li
        animate={{ opacity: 1, x: 0 }}
        className="flex items-start gap-3 text-sm md:text-base"
        initial={{ opacity: 0, x: -10 }}
        key={feature}
        transition={{
          duration: 0.4,
          delay: delay + index * 0.05,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
        <span>{feature}</span>
      </motion.li>
    ))}
  </motion.ul>
);

type CTAStepsProps = {
  steps: { title: string; description: string }[];
  className?: string;
  delay?: number;
};

export const CTASteps = ({ steps, className, delay = 0.2 }: CTAStepsProps) => (
  <motion.ol
    animate={{ opacity: 1, y: 0 }}
    className={cn("space-y-4", className)}
    initial={{ opacity: 0, y: 15 }}
    transition={{
      duration: 0.5,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    }}
  >
    {steps.map((step, index) => (
      <motion.li
        animate={{ opacity: 1, x: 0 }}
        className="flex gap-4"
        initial={{ opacity: 0, x: -15 }}
        key={step.title}
        transition={{
          duration: 0.4,
          delay: delay + index * 0.1,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground text-sm">
          {index + 1}
        </span>
        <div>
          <h4 className="font-semibold">{step.title}</h4>
          <p className="mt-1 text-muted-foreground text-sm">
            {step.description}
          </p>
        </div>
      </motion.li>
    ))}
  </motion.ol>
);

export { ctaVariants };
