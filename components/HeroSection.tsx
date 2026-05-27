import type { HeroContent } from "@/types/portfolio";
import { SectionGlow } from "@/components/SectionGlow";

type HeroSectionProps = {
  hero: HeroContent;
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative box-border flex h-[100dvh] min-h-[600px] flex-col justify-center overflow-hidden px-[5%] pt-16"
    >
      <SectionGlow className="right-[5%] top-[20%]" />

      <div className="relative w-full max-w-[720px] py-[clamp(0.75rem,2vh,2rem)]">
        <div className="mb-[clamp(0.75rem,2vh,2rem)] inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(124,92,252,0.4)] bg-[rgba(124,92,252,0.08)] px-3.5 py-1.5">
          <span className="inline-block h-[7px] w-[7px] rounded-full bg-[#4ade80]" />
          <span className="text-xs font-medium tracking-[0.06em] text-[var(--accent)]">
            {hero.availabilityBadge}
          </span>
        </div>

        <h1 className="mb-[clamp(0.5rem,1.5vh,1.5rem)] text-[clamp(28px,4.5vw,56px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[var(--heading)]">
          {hero.headline.map((line, index) => (
            <span
              key={line}
              className={
                index === hero.headlineAccentIndex ? "text-[var(--accent)]" : undefined
              }
            >
              {line}
              {index < hero.headline.length - 1 ? <br /> : null}
            </span>
          ))}
        </h1>

        <p className="mb-[clamp(0.75rem,2vh,1.25rem)] max-w-[520px] text-lg leading-[1.65] text-[var(--muted)] max-[800px]:text-base">
          {hero.bio}
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4">
          <a
            href={hero.primaryCta.href}
            className="rounded-[10px] bg-[var(--accent)] px-6 py-3 text-[15px] font-bold text-white transition-[transform,opacity] hover:-translate-y-0.5 hover:opacity-90 sm:px-7 sm:py-3.5"
          >
            {hero.primaryCta.label}
          </a>
         {/* <a
            href={hero.secondaryCta.href}
            className="rounded-[10px] border border-[rgba(255,255,255,0.15)] px-6 py-3 text-[15px] font-semibold text-[var(--foreground)] transition-[transform,border-color] hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.35)] sm:px-7 sm:py-3.5"
          >
            {hero.secondaryCta.label}
          </a>
          */}
          <a
            href={hero.cvCta.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-[10px] border border-[rgba(124,92,252,0.55)] px-6 py-3 text-[15px] font-semibold text-[var(--accent)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-[rgba(124,92,252,0.12)] sm:px-7 sm:py-3.5"
          >
            {hero.cvCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
