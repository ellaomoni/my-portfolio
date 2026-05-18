import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { portfolioContent } from "@/data/portfolio";

export default function Home() {
  const { siteConfig, hero, skills, skillsIntro, projects, projectsIntro, about, contact } =
    portfolioContent;

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar name={siteConfig.name} navItems={siteConfig.navItems} cta={siteConfig.cta} />
      <HeroSection hero={hero} />
      <ProjectsSection intro={projectsIntro} projects={projects} />
      <SkillsSection intro={skillsIntro} skills={skills} />
      <AboutSection about={about} />
      <ContactSection contact={contact} />
      <Footer
        name={siteConfig.name}
        year={siteConfig.footerYear}
        tagline={siteConfig.footerTagline}
      />
    </div>
  );
}
