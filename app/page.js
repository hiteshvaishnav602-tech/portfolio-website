import Navbar from '@/components/Navbar';
import FloatingSocials from '@/components/FloatingSocials';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorTrail from '@/components/CursorTrail';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function Home() {
  return (
    <>
      <CursorTrail />
      <ScrollAnimations />
      <main id="main" className="main-body">
        <Navbar />
        <FloatingSocials />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
