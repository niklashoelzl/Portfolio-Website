import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { Projects } from "@/components/sections/ProjectSection";
import { SkillsSection } from "@/components/sections/SkillSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Portfolio() {
  return (
    <main className="text-gray-300">
      <Navbar />
      <HeroSection />
      <Projects />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
