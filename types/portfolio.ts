import type { StaticImageData } from "next/image";

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type SkillItem = {
  name: string;
  icon: string;
};

export type ProjectType = "Client" | "Personal";

export type ProjectItem = {
  tag: string;
  headline: string;
  desc: string;
  stack: string[];
  type: ProjectType;
  href?: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
};

export type HeroContent = {
  availabilityBadge: string;
  headline: string[];
  headlineAccentIndex: number;
  bio: string;
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  titleLineBreak?: boolean;
  subtitle?: string;
};

export type AboutContent = {
  intro: SectionIntro;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
};

export type ContactContent = {
  intro: SectionIntro;
  body: string;
  email: string;
  ctaLabel: string;
  socialLinks: LinkItem[];
};

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  navItems: NavItem[];
  cta: LinkItem;
  socialLinks: LinkItem[];
  footerYear: number;
  footerTagline: string;
};

export type PortfolioContent = {
  siteConfig: SiteConfig;
  hero: HeroContent;
  skills: SkillItem[];
  skillsIntro: SectionIntro;
  projects: ProjectItem[];
  projectsIntro: SectionIntro;
  about: AboutContent;
  contact: ContactContent;
};
