import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Projects } from './components/Projects';
import { SkillsSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';

export default function Portfolio() {
  return (
    <main className="text-gray-300">
      <Navbar />

      {/* === Hero Section === */}
      <HeroSection />
    
      {/* === Projects Section === */}
        <Projects />

      {/* === About Section === */}
      <SkillsSection />

      {/* === Contact Section === */}
      <ContactSection />

      <Footer />
    </main>
  );
}

