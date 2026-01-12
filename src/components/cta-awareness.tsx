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

const features = [
  {
    icon: Eye,
    title: "Sensibilisieren",
    description:
      "Bewusstsein schaffen für Diskriminierung und Gewalt in allen Formen.",
  },

  {
    icon: Shield,
    title: "Vorbeugen",
    description: "Durch Aufklärung und klare Strukturen Übergriffe verhindern.",
  },
  {
    icon: Users,
    title: "Gemeinsam lernen",
    description:
      "Ein individueller und kollektiver Lernprozess für alle Mitglieder.",
  },
];

export const CTAAwareness = () => (
  <CTA className="mx-auto max-w-7xl" variant="ghost">
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-32">
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
            einen sicheren Raum für alle. <br />
            <br /> Unser Ziel ist es, einen Safer Space zu schaffen, in dem sich
            alle Beteiligten wohl, sicher und gesehen fühlen können – bei
            Veranstaltungen und in der täglichen FSR-Arbeit.
          </CTADescription>
        </CTAHeader>

        <CTAActions delay={0.4}>
          <Button asChild className="flex-1" size="lg">
            <Link href="/awareness">
              Zum Konzept
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild className="flex-1" size="lg" variant="outline">
            <Link href="/go/awareness-kontakt">
              <Heart className="mr-2 h-4 w-4" />
              Vorfall melden
            </Link>
          </Button>
        </CTAActions>
      </div>

      <div className="flex flex-col justify-center gap-4 lg:gap-6">
        {features.map((feature) => {
          const { icon: Icon, title, description } = feature;
          return (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card/50 p-5 lg:items-center"
              initial={{ opacity: 0, y: 20 }}
              key={title}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">{title}</h4>
                <p className="mt-1 text-muted-foreground text-sm">
                  {description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </CTA>
);
