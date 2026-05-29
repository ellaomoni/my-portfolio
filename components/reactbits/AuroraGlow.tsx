"use client";

import { motion, useReducedMotion } from "motion/react";

type AuroraGlowProps = {
  className?: string;
};

export function AuroraGlow({ className = "" }: AuroraGlowProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div
        aria-hidden
        className={`pointer-events-none absolute -z-10 rounded-full ${className}`}
        style={{
          width: 560,
          height: 560,
          background:
            "radial-gradient(circle, rgba(124,92,252,0.18) 0%, transparent 70%)",
        }}
      />
    );
  }

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 ${className}`}
      style={{ width: 560, height: 560 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,92,252,0.22) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 25, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(74,222,128,0.10) 0%, transparent 65%)",
          filter: "blur(12px)",
        }}
        animate={{
          x: [0, -45, 35, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
