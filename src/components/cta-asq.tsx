"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
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
  <CTA className={cn("my-16 md:my-24", className)} variant="highlight">
    <div className="cta-wrapper grid items-center gap-8 lg:grid-cols-3 lg:gap-12">
      <Image
        alt="ASQ"
        className="mx-auto hidden w-full max-w-64 invert lg:block"
        height={500}
        src="/logo_outline_small.png"
        width={500}
      />
      <div className="lg:col-span-2">
        <CTAHeader>
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-muted/20 px-4 py-1.5 font-medium text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="flex h-2 w-2 rounded-full bg-primary" />5
            ECTS-Punkte
          </motion.div>
          <CTATitle>Schlüsselqualifikation beim FSR</CTATitle>
          <CTADescription className="text-muted">
            Entdecke neue Möglichkeiten und sammle wertvolle Erfahrungen mit dem
            Allgemeinen Schlüsselqualifikationsmodul beim Fachschaftsrat
            Wirtschaftswissenschaften.
          </CTADescription>
        </CTAHeader>

        <CTAFeatureList delay={0.3} features={features} />

        <CTAActions delay={0.45}>
          <Button asChild size="lg" variant="secondary">
            <Link href="/go/asq-bewerbung">Jetzt bewerben</Link>
          </Button>
          <Button asChild className="bg-primary" size="lg" variant="outline">
            <Link href="/asq">
              Mehr erfahren
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CTAActions>
      </div>
    </div>
  </CTA>
);
