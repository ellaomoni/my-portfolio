"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type BlurTextProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "div";
  children?: ReactNode;
};

const container = (stagger: number, delay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

const word = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function BlurText({
  text,
  className = "",
  delay = 0,
  stagger = 0.08,
  as = "span",
}: BlurTextProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{text}</Tag>;
  }

  const MotionTag = as === "div" ? motion.div : motion.span;

  return (
    <MotionTag
      className={className}
      style={{ display: "inline-block" }}
      variants={container(stagger, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={word}
          aria-hidden
          style={{ display: "inline-block", willChange: "transform, filter, opacity" }}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
