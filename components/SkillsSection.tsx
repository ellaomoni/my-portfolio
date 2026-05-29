"use client";

import { motion, useReducedMotion } from "motion/react";
import type { SectionIntro, SkillItem } from "@/types/portfolio";
import { PortfolioIcon } from "@/components/PortfolioIcon";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/reactbits/Reveal";

type SkillsSectionProps = {
  intro: SectionIntro;
  skills: SkillItem[];
};

export function SkillsSection({ intro, skills }: SkillsSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="px-[5%] py-[100px]">
      <div className="mx-auto max-w-[960px]">
        <Reveal>
          <SectionHeading intro={intro} />
        </Reveal>

        <motion.div
          className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: reduceMotion ? {} : { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="group flex cursor-default flex-col items-center gap-3 rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-4 py-5 transition-[border-color,background,transform] hover:-translate-y-1 hover:border-[rgba(124,92,252,0.5)] hover:bg-[rgba(124,92,252,0.06)]"
            >
              <PortfolioIcon icon={skill.icon} size={36} className="shrink-0" />
              <span className="text-xs font-medium text-[var(--muted)]">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
