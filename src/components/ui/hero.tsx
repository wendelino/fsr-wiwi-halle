"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Title } from "./title";

type HeroProps = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  centered?: boolean;
};

export const Hero = ({
  title,
  subtitle,
  children,
  className,
  centered = true,
}: HeroProps) => (
  <section
    className={cn(
      "width-wrapper relative py-16 md:py-24 lg:py-32",
      centered ? "text-center" : "",
      className
    )}
  >
    <motion.div
      animate={{ opacity: 1 }}
      className={cn(
        "mx-auto flex flex-col gap-6",
        centered ? "max-w-4xl items-center" : ""
      )}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Title className="text-balance" variant="h1">
        {title}
      </Title>

      {subtitle ? (
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className={cn(
            "text-lg text-muted-foreground md:text-xl",
            centered ? "max-w-2xl" : ""
          )}
          initial={{ opacity: 0, y: 15 }}
          transition={{
            duration: 0.5,
            delay: 0.15,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          {subtitle}
        </motion.p>
      ) : null}

      {children ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 15 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          {children}
        </motion.div>
      ) : null}
    </motion.div>
  </section>
);
