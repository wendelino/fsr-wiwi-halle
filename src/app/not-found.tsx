"use client";

import { ArrowLeft, Home, Search } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center px-6">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative background */}
        <div className="-z-10 pointer-events-none absolute inset-0">
          <motion.div
            animate={{ scale: 1, opacity: 0.5 }}
            className="-top-32 -translate-x-1/2 absolute left-1/2 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </div>

        {/* Logo */}
        <motion.div
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image
            alt="FSR WiWi Logo"
            className="mb-8 opacity-20 grayscale"
            height={120}
            src="/lion256.png"
            width={120}
          />
        </motion.div>

        {/* 404 Text */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 font-bold font-mono text-8xl text-primary/20 tracking-tighter md:text-9xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          404
        </motion.div>

        {/* Title */}
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="mb-3 font-bold text-2xl tracking-tight md:text-3xl"
          initial={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Seite nicht gefunden
        </motion.h1>

        {/* Description */}
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 max-w-md text-muted-foreground"
          initial={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Die gesuchte Seite existiert nicht oder wurde verschoben. Vielleicht
          findest du, was du suchst, auf der Startseite.
        </motion.p>

        {/* Actions */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button asChild size="lg">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Zur Startseite
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/about">
              <Search className="mr-2 h-4 w-4" />
              Über uns
            </Link>
          </Button>
        </motion.div>

        {/* Back link */}
        <motion.div
          animate={{ opacity: 1 }}
          className="mt-8"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            asChild
            className="text-muted-foreground"
            size="sm"
            variant="ghost"
          >
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur vorherigen Seite
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
