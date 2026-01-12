"use client";

import { ArrowRight, Calendar, PartyPopper, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  CTA,
  CTAActions,
  CTADescription,
  CTAHeader,
  CTATitle,
} from "@/components/ui/cta";
import { cn } from "@/lib/utils";

type CTAErstiWocheProps = {
  className?: string;
};

export const CTAErstiWoche = ({ className }: CTAErstiWocheProps) => (
  <CTA
    className={cn("width-wrapper my-16 md:my-24", className)}
    variant="highlight"
  >
    <div className="-z-10 pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        className="absolute top-8 right-12 text-primary-foreground/20"
        initial={{ opacity: 0 }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        whileInView={{ opacity: 1 }}
      >
        <Sparkles className="h-20 w-20" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        className="absolute bottom-8 left-12 text-primary-foreground/20"
        initial={{ opacity: 0 }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
        whileInView={{ opacity: 1 }}
      >
        <PartyPopper className="h-16 w-16" />
      </motion.div>
    </div>

    <CTAHeader className="text-center">
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 font-medium text-primary-foreground text-sm"
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <Calendar className="h-4 w-4" />
        Jedes Semester
      </motion.div>
      <CTATitle className="text-primary-foreground">Ersti‑Woche</CTATitle>
      <CTADescription className="mx-auto max-w-xl text-primary-foreground/80">
        Partys, Touren, Workshops & Gewinnspiel – wir erleichtern euch den
        Studienstart!
      </CTADescription>
    </CTAHeader>

    <CTAActions className="justify-center" delay={0.3}>
      <Button
        asChild
        className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
        size="lg"
      >
        <Link href="/ersti-woche">
          Zum Programm
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      <Button
        asChild
        className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
        size="lg"
        variant="outline"
      >
        <Link href="/go/ersti-anmeldung">Anmelden</Link>
      </Button>
    </CTAActions>
  </CTA>
);
