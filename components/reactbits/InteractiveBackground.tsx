"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

const BASE_GRADIENT =
  "radial-gradient(120% 120% at 15% 0%, rgba(124,92,252,0.10) 0%, transparent 55%)," +
  "radial-gradient(100% 100% at 100% 100%, rgba(74,222,128,0.06) 0%, transparent 60%)," +
  "linear-gradient(180deg, rgba(124,92,252,0.04) 0%, transparent 45%)";

const PURPLE_SIZE = 640;
const GREEN_SIZE = 420;

export function InteractiveBackground() {
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const purpleX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.5 });
  const purpleY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.5 });
  const greenX = useSpring(x, { stiffness: 70, damping: 24, mass: 0.9 });
  const greenY = useSpring(y, { stiffness: 70, damping: 24, mass: 0.9 });

  useEffect(() => {
    if (reduceMotion) return;

    x.set(window.innerWidth / 2);
    y.set(window.innerHeight / 2);

    const handlePointerMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [reduceMotion, x, y]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0" style={{ background: BASE_GRADIENT }} />

      {!reduceMotion ? (
        <>
          <motion.div
            className="absolute rounded-full"
            style={{
              x: purpleX,
              y: purpleY,
              width: PURPLE_SIZE,
              height: PURPLE_SIZE,
              marginLeft: -PURPLE_SIZE / 2,
              marginTop: -PURPLE_SIZE / 2,
              background:
                "radial-gradient(circle, rgba(124,92,252,0.22) 0%, transparent 60%)",
              filter: "blur(44px)",
            }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{
              x: greenX,
              y: greenY,
              width: GREEN_SIZE,
              height: GREEN_SIZE,
              marginLeft: -GREEN_SIZE / 2,
              marginTop: -GREEN_SIZE / 2,
              background:
                "radial-gradient(circle, rgba(74,222,128,0.10) 0%, transparent 60%)",
              filter: "blur(52px)",
            }}
          />
        </>
      ) : null}
    </div>
  );
}
