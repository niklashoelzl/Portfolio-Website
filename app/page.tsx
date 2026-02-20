import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';

export default function Portfolio() {
  return (
    <main className="text-gray-300">
      <Navbar />

      {/* === Hero Section === */}
      <HeroSection />
    
      {/* === Projects Section === */}
      <section id="Projects" className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#1f2937_20%,#000000_100%,transparent_80%)] flex items-center justify-center">
        <h1 className="text-5xl font-bold mb-4">Projects</h1>
      </section>

      {/* === About Section === */}
      <AboutSection />

      {/* === Contact Section === */}
      <ContactSection />

      <Footer />
    </main>
  );
}

