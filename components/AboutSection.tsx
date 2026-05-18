import type { AboutContent } from "@/types/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

type AboutSectionProps = {
  about: AboutContent;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="px-[5%] py-[100px]">
      <div className="mx-auto max-w-[720px] text-center">
        <SectionHeading intro={about.intro} titleClassName="!text-[clamp(28px,4vw,44px)] !leading-[1.1]" />
        <div className="flex flex-col gap-[18px]">
          {about.paragraphs.map((text) => (
            <p key={text} className="m-0 text-base leading-[1.8] text-[var(--muted)]">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
