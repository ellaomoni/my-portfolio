import type { PortfolioContent } from "@/types/portfolio";

export const portfolioContent: PortfolioContent = {
  siteConfig: {
    name: "Emmanuella Omoni",
    title: "Backend Engineer",
    description:
      "Backend engineer building scalable systems for fintech and entrepreneurship across Africa.",
    navItems: [
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Work with me →", href: "#contact" },
    socialLinks: [
      { label: "GitHub", href: "https://github.com/ellaomoni", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/emmanuella-omoni", external: true },
      { label: "X", href: "https://x.com/ellaomoni", external: true },
      { label: "Email", href: "mailto:ellaomoni@gmail.com" },
    ],
    footerYear: 2026,
    footerTagline: "Built with intention.",
  },
  hero: {
    availabilityBadge: "AVAILABLE TO WORK",
    headline: ["I build the systems", "that keep businesses", "running."],
    headlineAccentIndex: 1,
    bio: "Backend engineer. 2+ years turning complex business problems into clean, scalable software — with a focus on fintech and entrepreneurship across Africa.",
    primaryCta: { label: "See my work", href: "#projects" },
    secondaryCta: { label: "Let's talk", href: "#contact" },
  },
  skills: [
    {
      name: "JavaScript",
      icon: "devicon:javascript",
    },
    {
      name: "TypeScript",
      icon: "devicon:typescript",
    },
    {
      name: "Node.js",
      icon: "devicon:nodejs",
    },
    {
      name: "React",
      icon: "devicon:react",
    },
    {
      name: "Next.js",
      icon: "skill-icons:nextjs-light",
    },
    {
      name: "Java",
      icon: "devicon:java",
    },
    {
      name: "PostgreSQL",
      icon: "devicon:postgresql",
    },
    {
      name: "Git",
      icon: "devicon:git",
    },
    {
      name: "HTML5",
      icon: "devicon:html5",
    },
    {
      name: "CSS3",
      icon: "devicon:css3",
    },
    {
      name: "Tailwind",
      icon: "devicon:tailwindcss",
    },
    {
      name: "GitHub",
      icon: "skill-icons:github-light",
    },
  ],
  skillsIntro: {
    eyebrow: "SKILLS",
    title: "My weapon of choice.",
    subtitle: "Tools I reach for when I need to build something that works and lasts.",
  },
  projects: [
    {
      tag: "Fintech",
      headline: "Financial tools built for African entrepreneurs.",
      desc: "A scalable platform helping small business owners manage operations and track finances — turning messy spreadsheets into clean, actionable dashboards.",
      stack: ["Node.js", "PostgreSQL", "React"],
      type: "Client",
    },
    {
      tag: "Portfolio",
      headline: "This site. Designed with intent, not just aesthetics.",
      desc: "A personal portfolio built to practice what I preach — clean architecture, fast load times, and a design system that actually scales.",
      stack: ["Next.js", "TypeScript", "Tailwind"],
      type: "Personal",
    },
  ],
  projectsIntro: {
    eyebrow: "PROJECTS",
    title: "Things I've shipped that actually work.",
    titleLineBreak: true,
  },
  about: {
    intro: {
      eyebrow: "ABOUT",
      title: "I turn complexity into tools people actually use.",
    },
    paragraphs: [
      "Software engineer and entrepreneur building technology that helps businesses grow and manage their finances better.",
      "I specialize in scalable backend systems for fintech and business operations — turning messy, complex problems into practical tools for entrepreneurs across Africa.",
      "Beyond writing code, I'm building at the intersection of technology and financial empowerment — and using my journey to inspire more women into tech.",
    ],
    imageSrc: "/portrait.png",
    imageAlt: "Portrait of Emmanuella Omoni",
  },
  contact: {
    intro: {
      eyebrow: "CONTACT",
      title: "Let's build something that matters.",
      titleLineBreak: true,
    },
    body: "Whether it's a project, a partnership, or a conversation — I'm here for it. Drop me a message and let's figure out what we can create together.",
    email: "hello@emmanuella.dev",
    ctaLabel: "Send me a message →",
    socialLinks: [
      { label: "GitHub", href: "https://github.com/ellaomoni", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/emmanuella-omoni", external: true },
      { label: "X", href: "https://x.com/ellaomoni", external: true },
      { label: "Email", href: "mailto:ellaomoni@gmail.com" },
    ],
  },
};
