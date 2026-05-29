import type { SectionIntro } from "@/types/portfolio";

type SectionHeadingProps = {
  intro: SectionIntro;
  titleClassName?: string;
};

export function SectionHeading({ intro, titleClassName = "" }: SectionHeadingProps) {
  const titleParts =
    intro.titleLineBreak && intro.title.includes(" that ")
      ? intro.title.split(" that ")
      : null;

  return (
    <div>
      <p className="mb-4 text-xs font-semibold tracking-[0.1em] text-[var(--accent)]">
        {intro.eyebrow}
      </p>
      <h2
        className={`mb-4 text-[clamp(28px,4vw,48px)] font-extrabold tracking-[-0.03em] text-[var(--heading)] ${titleClassName}`}
      >
        {titleParts ? (
          <>
            {titleParts[0]}
            <br />
            that {titleParts.slice(1).join(" that ")}
          </>
        ) : (
          intro.title
        )}
      </h2>
      {intro.subtitle ? (
        <p className="mb-14 max-w-[440px] text-base text-[var(--muted)]">{intro.subtitle}</p>
      ) : null}
    </div>
  );
}

