import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectsSection";
import { ResumeSection } from "./components/ResumeSection";
import { StudiesSection } from "./components/StudiesSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <ProjectsSection />
        <StudiesSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
