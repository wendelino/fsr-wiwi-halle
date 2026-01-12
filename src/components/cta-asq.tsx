"use client";

import { ArrowRight, Briefcase, Clock, Users } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  CTA,
  CTAActions,
  CTADescription,
  CTAFeatureList,
  CTAHeader,
  CTATitle,
} from "@/components/ui/cta";
import { cn } from "@/lib/utils";

const features = [
  "Eigene Projekte im Team planen & umsetzen",
  "Budget für deine Ideen nutzen",
  "Hochschulgremien kennenlernen",
  "Kontakte zu anderen Studierenden knüpfen",
  "Lockere Arbeitsatmosphäre genießen",
  "Praktische Erfahrungen sammeln",
];

type CTAAsqProps = {
  className?: string;
};

export const CTAAsq = ({ className }: CTAAsqProps) => (
  <CTA
    className={cn("width-wrapper my-16 md:my-24", className)}
    variant="gradient"
  >
    <div className="-z-10 pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ scale: 1, opacity: 0.5 }}
        className="-top-24 -right-24 absolute h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div
        animate={{ scale: 1, opacity: 0.3 }}
        className="-bottom-32 -left-32 absolute h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </div>

    <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
      <div className="lg:col-span-3">
        <CTAHeader>
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 font-medium text-primary text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="flex h-2 w-2 rounded-full bg-primary" />5
            ECTS-Punkte
          </motion.div>
          <CTATitle>Schlüsselqualifikation beim FSR</CTATitle>
          <CTADescription>
            Entdecke neue Möglichkeiten und sammle wertvolle Erfahrungen mit dem
            Allgemeinen Schlüsselqualifikationsmodul beim Fachschaftsrat
            Wirtschaftswissenschaften.
          </CTADescription>
        </CTAHeader>

        <CTAFeatureList delay={0.3} features={features} />

        <CTAActions delay={0.45}>
          <Button asChild size="lg">
            <Link href="/asq">
              Mehr erfahren
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/go/asq-bewerbung">Jetzt bewerben</Link>
          </Button>
        </CTAActions>
      </div>

      <div className="flex flex-col gap-4 lg:col-span-2">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-4 rounded-xl bg-background/50 p-5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold">Dein Team</h4>
            <p className="mt-1 text-muted-foreground text-sm">
              5-6 Studierende, mit denen du spannende Projekte umsetzt.
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-4 rounded-xl bg-background/50 p-5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold">150h Arbeitsaufwand</h4>
            <p className="mt-1 text-muted-foreground text-sm">
              Vom ASQ-Büro anerkannt – volle 5 ECTS für dein Studium.
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-4 rounded-xl bg-background/50 p-5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold">Echte Projekte</h4>
            <p className="mt-1 text-muted-foreground text-sm">
              Praxisveranstaltungen, Partys, Podiumsdiskussionen & mehr.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </CTA>
);
