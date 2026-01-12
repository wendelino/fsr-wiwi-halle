"use client";

import { ArrowRight, Eye, Heart, Shield, Users } from "lucide-react";
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

type CTAAwarenessProps = {
  className?: string;
};

export const CTAAwareness = ({ className }: CTAAwarenessProps) => (
  <CTA
    className={cn("width-wrapper my-16 md:my-24", className)}
    variant="outline"
  >
    <div className="-z-10 pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ scale: 1, opacity: 0.3 }}
        className="-bottom-16 -left-16 absolute h-48 w-48 rounded-full bg-primary/5 blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div
        animate={{ scale: 1, opacity: 0.2 }}
        className="-top-16 -right-16 absolute h-56 w-56 rounded-full bg-primary/5 blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
    </div>

    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div>
        <CTAHeader>
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-medium text-primary text-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Shield className="h-4 w-4" />
            Safer Space
          </motion.div>
          <CTATitle>Awareness-Konzept</CTATitle>
          <CTADescription>
            „To be aware" bedeutet „sich etwas bewusst sein". Wir
            sensibilisieren für Diskriminierungsformen und Gewalt und schaffen
            einen sicheren Raum für alle.
          </CTADescription>
        </CTAHeader>

        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-muted-foreground text-sm leading-relaxed md:text-base"
          initial={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          Unser Ziel ist es, einen Safer Space zu schaffen, in dem sich alle
          Beteiligten wohl, sicher und gesehen fühlen können – bei
          Veranstaltungen und in der täglichen FSR-Arbeit.
        </motion.p>

        <CTAActions delay={0.4}>
          <Button asChild size="lg">
            <Link href="/awareness">
              Zum Konzept
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/go/awareness-kontakt">
              <Heart className="mr-2 h-4 w-4" />
              Kontakt aufnehmen
            </Link>
          </Button>
        </CTAActions>
      </div>

      <div className="flex flex-col gap-4">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-5"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Eye className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold">Sensibilisieren</h4>
            <p className="mt-1 text-muted-foreground text-sm">
              Bewusstsein schaffen für Diskriminierung und Gewalt in all ihren
              Formen.
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-5"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold">Vorbeugen</h4>
            <p className="mt-1 text-muted-foreground text-sm">
              Durch Aufklärung und klare Strukturen Übergriffe verhindern.
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-5"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold">Gemeinsam lernen</h4>
            <p className="mt-1 text-muted-foreground text-sm">
              Ein individueller und kollektiver Lernprozess für alle Mitglieder.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </CTA>
);
