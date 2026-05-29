"use client";

import Image from "next/image";
import type { AboutContent } from "@/types/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/reactbits/Reveal";

type AboutSectionProps = {
  about: AboutContent;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="px-[5%] py-[100px]">
      <div className="mx-auto grid max-w-[960px] items-center gap-12 md:grid-cols-2">
        <div className="text-left">
          <Reveal>
            <SectionHeading
              intro={about.intro}
              titleClassName="!text-[clamp(28px,4vw,44px)] !leading-[1.1]"
            />
          </Reveal>
          <div className="flex flex-col gap-[18px]">
            {about.paragraphs.map((text, index) => (
              <Reveal key={text} delay={index * 0.1}>
                <p className="m-0 text-base leading-[1.8] text-[var(--muted)]">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="justify-self-center md:justify-self-end">
          <div className="w-fit overflow-hidden rounded-2xl border border-[var(--border)]">
            <Image
              src={about.imageSrc}
              alt={about.imageAlt}
              width={378}
              height={720}
              sizes="(min-width: 768px) 378px, 100vw"
              className="block h-auto w-auto max-w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
