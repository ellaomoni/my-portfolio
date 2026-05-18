import type { ContactContent } from "@/types/portfolio";
import { PortfolioIcon } from "@/components/PortfolioIcon";
import { SectionHeading } from "@/components/SectionHeading";

const socialIcons: Record<string, string> = {
  GitHub: "mdi:github",
  LinkedIn: "mdi:linkedin",
  X: "prime:twitter",
  Email: "simple-icons:gmail",
};

type ContactSectionProps = {
  contact: ContactContent;
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="px-[5%] py-[100px] pb-[120px]">
      <div className="mx-auto max-w-[640px] text-center">
        <SectionHeading intro={contact.intro} titleClassName="!text-[clamp(32px,5vw,56px)] !leading-[1.1]" />

        <p className="mb-12 text-[17px] leading-[1.7] text-[var(--muted)]">{contact.body}</p>

        <a
          href={`mailto:${contact.email}`}
          className="mb-12 inline-flex items-center gap-2.5 rounded-xl bg-[var(--accent)] px-9 py-4 text-base font-bold text-white transition-[transform,opacity] hover:-translate-y-0.5 hover:opacity-90"
        >
          {contact.ctaLabel}
        </a>

        <div className="flex justify-center gap-6 pt-10">
          {contact.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              title={link.label}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : undefined)}
              className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] text-base text-[var(--muted)] transition-[border-color,color,background] hover:border-[rgba(124,92,252,0.5)] hover:bg-[rgba(124,92,252,0.08)] hover:text-[var(--accent)]"
            >
              <PortfolioIcon icon={socialIcons[link.label] ?? "mdi:link-variant"} size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
