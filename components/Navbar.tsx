import type { LinkItem, NavItem } from "@/types/portfolio";

type NavbarProps = {
  name: string;
  navItems: NavItem[];
  cta: LinkItem;
};

export function Navbar({ name, navItems, cta }: NavbarProps) {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed inset-x-0 top-0 z-[100] flex h-16 items-center justify-between bg-[rgba(10,10,10,0.85)] px-[5%] backdrop-blur-[16px]"
    >
      <span className="text-[20px] font-bold tracking-[-0.02em] text-[var(--foreground)]">
        {name}
      </span>

      <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[13px] tracking-[0.02em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
          >
            {item.label}
          </a>
        ))}
        <a
          href={cta.href}
          className="rounded-lg bg-[var(--accent)] px-[18px] py-2 text-[13px] font-semibold tracking-[0.01em] text-white transition-opacity hover:opacity-85"
        >
          {cta.label}
        </a>
      </div>
    </nav>
  );
}
