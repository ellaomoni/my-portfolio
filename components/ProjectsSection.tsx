"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProjectItem, SectionIntro } from "@/types/portfolio";
import { PortfolioIcon } from "@/components/PortfolioIcon";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/reactbits/Reveal";
import { SpotlightCard } from "@/components/reactbits/SpotlightCard";

type ProjectsSectionProps = {
  intro: SectionIntro;
  projects: ProjectItem[];
};

const filters = ["Client", "Personal"] as const;
type Filter = (typeof filters)[number];

export function ProjectsSection({ intro, projects }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<Filter>("Client");

  const filtered = projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="px-[5%] py-[100px]">
      <div className="mx-auto max-w-[960px]">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading intro={intro} titleClassName="!mb-0" />
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`cursor-pointer rounded-full border px-[18px] py-2 text-[13px] font-semibold transition-all ${
                  filter === f
                    ? "border-[var(--accent)] bg-[rgba(124,92,252,0.15)] text-[var(--accent)]"
                    : "border-[rgba(255,255,255,0.12)] bg-transparent text-[var(--muted)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {filtered.map((project) => (
            <Reveal key={project.headline}>
              <SpotlightCard className="group rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] transition-[border-color,background] hover:border-[rgba(124,92,252,0.3)] hover:bg-[rgba(124,92,252,0.04)]">
                <article className="relative z-10 grid items-center gap-10 p-10 lg:grid-cols-2">
                  {project.type === "Personal" && project.href ? (
                    <a
                      href={project.href}
                      target={project.href.startsWith("http") ? "_blank" : undefined}
                      rel={project.href.startsWith("http") ? "noreferrer noopener" : undefined}
                      aria-label={`Open ${project.tag} project`}
                      className="absolute right-4 top-4 inline-flex shrink-0 p-2 text-[var(--accent)] transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
                    >
                      <PortfolioIcon icon="mdi:arrow-top-right" size={18} />
                    </a>
                  ) : null}
                  <div>
                    <span className="mb-4 block text-[11px] font-bold tracking-[0.08em] text-[var(--accent)]">
                      {project.tag.toUpperCase()}
                    </span>
                    <h3 className="mb-4 text-[22px] font-bold leading-[1.3] tracking-[-0.02em] text-[var(--heading)]">
                      {project.headline}
                    </h3>
                    <p className="mb-6 text-[15px] leading-[1.7] text-[var(--muted)]">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.06)] px-3 py-1 text-xs text-[#ccc]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-xl border border-[rgba(124,92,252,0.2)] bg-[linear-gradient(135deg,rgba(124,92,252,0.2)_0%,rgba(124,92,252,0.05)_100%)]">
                    {project.imageSrc ? (
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt ?? `${project.tag} project preview`}
                        width={1200}
                        height={900}
                        className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 420px, 100vw"
                      />
                    ) : (
                      <div aria-hidden className="flex min-h-[260px] items-center justify-center">
                        <span className="text-5xl opacity-30">⌨</span>
                      </div>
                    )}
                  </div>
                </article>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
