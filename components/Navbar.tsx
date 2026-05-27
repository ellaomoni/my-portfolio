"use client";

import { useCallback, useEffect, useId, useState } from "react";
import type { LinkItem, NavItem } from "@/types/portfolio";
import { PortfolioIcon } from "@/components/PortfolioIcon";

type NavbarProps = {
  name: string;
  navItems: NavItem[];
  cta: LinkItem;
};

export function Navbar({ name, navItems, cta }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      <nav
        aria-label="Main navigation"
        className="flex h-16 items-center justify-between gap-4 bg-[rgba(10,10,10,0.85)] px-[5%] backdrop-blur-[16px]"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="min-w-0 shrink truncate text-[15px] font-bold tracking-[-0.02em] text-[var(--foreground)] sm:text-[16px] md:max-w-none md:text-[17px]"
        >
          {name}
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[13px] tracking-[0.02em] text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href={cta.href}
            className="whitespace-nowrap rounded-lg bg-[var(--accent)] px-[18px] py-2 text-[13px] font-semibold tracking-[0.01em] text-white transition-opacity hover:opacity-85"
          >
            {cta.label}
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--foreground)] transition-colors hover:border-[rgba(124,92,252,0.5)] hover:text-[var(--accent)] md:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <PortfolioIcon
            icon={menuOpen ? "mdi:close" : "mdi:menu"}
            size={22}
            className="shrink-0"
          />
        </button>
      </nav>

      {menuOpen ? (
        <button
          type="button"
          aria-label="Close menu backdrop"
          className="fixed inset-0 top-16 z-[99] bg-black/50 md:hidden"
          onClick={closeMenu}
        />
      ) : null}

      {/* Mobile panel */}
      <div
        id={menuId}
        className={`relative z-[100] border-t border-[var(--border)] bg-[rgba(10,10,10,0.95)] px-[5%] backdrop-blur-[16px] transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden ${
          menuOpen
            ? "grid grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid grid-rows-[0fr] opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-[var(--muted)] transition-colors hover:bg-[rgba(124,92,252,0.08)] hover:text-[var(--foreground)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={cta.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className="mt-2 rounded-lg bg-[var(--accent)] px-4 py-3 text-center text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              {cta.label}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
