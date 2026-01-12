"use client";

import { motion } from "motion/react";
import { Hero } from "@/components/ui/hero";
import { Text } from "@/components/ui/text";
import { Title } from "@/components/ui/title";

export const AboutContent = () => (
  <div className="bg-background">
    <Hero
      subtitle="Mit der Immatrikulation an der Martin-Luther-Universität bist du nicht nur Student*in dieser Universität geworden, sondern automatisch auch Mitglied der Studierendenschaft Wirtschaftswissenschaften."
      title="Was bedeutet Fachschaft?"
    />

    <section className="width-wrapper pb-24">
      <div className="mx-auto max-w-3xl space-y-12">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          <Title className="text-primary" delay={0.35} variant="h3">
            Die Studierendenschaft
          </Title>
          <Text delay={0.4}>
            Dies ist die Gesamtheit der Studierenden des Fachbereiches
            Wirtschaftswissenschaften. Jede*r Studierende ist automatisch Teil
            dieser Gemeinschaft und hat damit auch eine Stimme in der
            studentischen Selbstverwaltung.
          </Text>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          <Title className="text-primary" delay={0.55} variant="h3">
            Der Fachschaftsrat
          </Title>
          <Text delay={0.6}>
            Der Fachschaftsrat ist die gewählte Vertretung von Studierenden aus
            der Studierendenschaft Wirtschaftswissenschaften, die sich um die
            Probleme und Belange der Studierenden kümmert.
          </Text>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: 0.7,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          <Title className="text-primary" delay={0.75} variant="h3">
            Der Studierendenrat (StuRa)
          </Title>
          <Text delay={0.8}>
            Die Gesamtheit der Studierenden der Universität (die
            Studierendenschaft) vertritt zudem der Studierendenrat (StuRa). Er
            ist das zentrale Organ der studentischen Selbstverwaltung auf
            Universitätsebene.
          </Text>
        </motion.div>
      </div>
    </section>
  </div>
);
