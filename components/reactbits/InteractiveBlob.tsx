"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

type InteractiveBlobProps = {
  className?: string;
};

const POINTER_RANGE = 60;

export function InteractiveBlob({ className = "" }: InteractiveBlobProps) {
  const reduceMotion = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const springX = useSpring(mx, { stiffness: 60, damping: 18 });
  const springY = useSpring(my, { stiffness: 60, damping: 18 });

  const purpleX = useTransform(springX, (v) => v * 1);
  const purpleY = useTransform(springY, (v) => v * 1);
  const greenX = useTransform(springX, (v) => v * -0.6);
  const greenY = useTransform(springY, (v) => v * -0.6);

  useEffect(() => {
    if (reduceMotion) return;

    const handlePointerMove = (e: PointerEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * POINTER_RANGE);
      my.set((e.clientY / window.innerHeight - 0.5) * POINTER_RANGE);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mx, my, reduceMotion]);

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
        className="absolute inset-0"
        style={{ x: purpleX, y: purpleY }}
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
      </motion.div>

      <motion.div
        className="absolute inset-0"
        style={{ x: greenX, y: greenY }}
      >
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
      </motion.div>
    </div>
  );
}
