import { AboutSection } from "../components/sections/AboutSection";
import { ContactSection } from "../components/sections/ContactSection";
import { HeroSection } from "../components/sections/HeroSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { ProjectsCoverSection } from "../components/sections/ProjectsCoverSection";
import { ThankYouSection } from "../components/sections/ThankYouSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsCoverSection />
      <ProjectsSection />
      <ContactSection />
      <ThankYouSection />
    </main>
  );
}
