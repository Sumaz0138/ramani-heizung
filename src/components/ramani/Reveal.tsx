"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const offsetFor = (dir: Direction) => {
  switch (dir) {
    case "up":
      return { y: 32, x: 0 };
    case "down":
      return { y: -32, x: 0 };
    case "left":
      return { y: 0, x: 40 };
    case "right":
      return { y: 0, x: -40 };
    default:
      return { y: 0, x: 0 };
  }
};

/**
 * Wiederverwendbarer Wrapper für sanfte Scroll-Einblend-Animationen.
 * Nutzt framer-motion `whileInView` und respektiert reduzierte Bewegung.
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  once = true,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const { x, y } = offsetFor(direction);

  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
