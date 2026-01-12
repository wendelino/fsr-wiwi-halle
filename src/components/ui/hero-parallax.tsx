"use client";
import {
  type MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

type HeroParallaxCard = {
  src: string;
};

export const HeroParallax = ({
  row1,
  row2,
  row3,
}: {
  row1: string[];
  row2: string[];
  row3: string[];
}) => {
  const firstRow = row1;
  const secondRow = row2;
  const thirdRow = row3;
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [200, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [-200, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.15, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-800, 0]),
    springConfig
  );
  return (
    <div
      className="perspective-[1000px] transform-3d relative flex h-full flex-col space-y-40 overflow-hidden pt-32 antialiased md:space-y-64 md:pt-64 lg:pt-72"
      ref={ref}
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="mb-10 flex flex-row-reverse gap-10">
          {firstRow.map((card) => (
            <HeroParallaxCard
              card={{ src: card }}
              key={card}
              orientation="horizontal"
              translate={translateX}
            />
          ))}
        </motion.div>
        <motion.div className="mb-10 flex flex-row gap-10">
          {secondRow.map((card) => (
            <HeroParallaxCard
              card={{ src: card }}
              key={card}
              orientation="vertical"
              translate={translateXReverse}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse gap-10 space-x-reverse">
          {thirdRow.map((card) => (
            <HeroParallaxCard
              card={{ src: card }}
              key={card}
              orientation="horizontal"
              translate={translateX}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => (
  <div className="width-wrapper relative z-20 flex flex-col-reverse items-center justify-between gap-12 md:flex-row md:gap-20">
    <div>
      <h1 className="font-bold text-3xl md:text-5xl xl:text-7xl dark:text-white">
        Willkommen beim <br /> FSR WiWi Halle
      </h1>
      <p className="mt-8 max-w-2xl text-lg md:text-xl dark:text-neutral-200">
        Wir sind der Fachschaftsrat des wirtschaftswissenschaftlichen Bereichs
        der Juristischen und Wirtschaftswissenschaftlichen Fakultät der Martin
        Luther Universität Halle-Wittenberg.
      </p>
    </div>
    <Image
      alt="FSR WiWi Halle"
      className="size-48 md:size-72 xl:mr-32"
      height={512}
      src="/logo.png"
      width={512}
    />
  </div>
);

export const HeroParallaxCard = ({
  card,
  translate,
  orientation,
}: {
  card: HeroParallaxCard;
  translate: MotionValue<number>;
  orientation: "horizontal" | "vertical";
}) => (
  <motion.div
    className={cn(
      "group/product relative shrink-0",
      orientation === "horizontal"
        ? "aspect-4/3 w-64 md:w-80"
        : "aspect-3/4 w-48 md:w-60"
    )}
    key={card.src}
    style={{
      x: translate,
    }}
  >
    <Image
      alt={card.src}
      className="absolute inset-0 h-full w-full cursor-none select-none rounded-lg bg-muted object-cover"
      draggable={false}
      height={orientation === "horizontal" ? 192 : 256}
      src={card.src}
      style={{
        userSelect: "none",
        WebkitUserSelect: "none",
        pointerEvents: "none",
      }}
      width={orientation === "horizontal" ? 256 : 192}
    />
  </motion.div>
);
