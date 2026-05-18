type FooterProps = {
  name: string;
  year: number;
  tagline: string;
};

export function Footer({ name, year, tagline }: FooterProps) {
  return (
    <footer className="flex flex-col items-start justify-between gap-2 px-[5%] py-6 sm:flex-row sm:items-center">
      <span className="text-[13px] text-[var(--muted)]">
        © {year} {name}
      </span>
      <span className="text-[13px] text-[var(--muted)]">{tagline}</span>
    </footer>
  );
}
