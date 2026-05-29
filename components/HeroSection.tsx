"use client";

import { motion, useReducedMotion } from "motion/react";
import type { HeroContent } from "@/types/portfolio";
import { BlurText } from "@/components/reactbits/BlurText";

type HeroSectionProps = {
  hero: HeroContent;
};

export function HeroSection({ hero }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative box-border flex h-[100dvh] min-h-[600px] flex-col justify-center overflow-hidden px-[5%] pt-16"
    >
      <div className="relative mx-auto flex w-full max-w-[720px] flex-col items-center py-[clamp(0.75rem,2vh,2rem)] text-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-[clamp(0.75rem,2vh,2rem)] inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(124,92,252,0.4)] bg-[rgba(124,92,252,0.08)] px-3.5 py-1.5"
        >
          <span className="relative inline-flex h-[7px] w-[7px]">
            {!reduceMotion ? (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-75" />
            ) : null}
            <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-[#4ade80]" />
          </span>
          <span className="text-xs font-medium tracking-[0.06em] text-[var(--accent)]">
            {hero.availabilityBadge}
          </span>
        </motion.div>

        <h1 className="mb-[clamp(0.5rem,1.5vh,1.5rem)] text-[clamp(28px,4.5vw,56px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[var(--heading)]">
          {hero.headline.map((line, index) => (
            <BlurText
              key={line}
              as="span"
              text={line}
              delay={0.2 + index * 0.25}
              className={`block ${
                index === hero.headlineAccentIndex ? "text-[var(--accent)]" : ""
              }`}
            />
          ))}
        </h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.5,
            delay: 0.2 + hero.headline.length * 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[520px] text-lg leading-[1.65] text-[var(--muted)] max-[800px]:text-base"
        >
          {hero.bio}
        </motion.p>
      </div>
    </section>
  );
}
