import { AboutSection } from "../components/sections/AboutSection";
import { ContactSection } from "../components/sections/ContactSection";
import { HeroSection } from "../components/sections/HeroSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { FigmaProjectsSection } from "../components/sections/FigmaProjectsSection";
import { ThankYouSection } from "../components/sections/ThankYouSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ProjectsCoverSection } from "../components/sections/ProjectsCoverSection";
import { getFeaturedProjects } from "../lib/content";

export default function Home() {
  const projects = getFeaturedProjects(4);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsCoverSection />
      <FigmaProjectsSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <ThankYouSection />
    </main>
  );
}
