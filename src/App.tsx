import Header from "./components/Header";
import Hero from "./components/Hero";
import { SplineSceneBasic } from "./components/SplineDemo";
import BentoGrid from "./components/BentoGrid";
import Industries from "./components/Industries";
import Projects from "./components/Projects";
import ArchitecturePatterns from "./components/ArchitecturePatterns";
import Impact from "./components/Impact";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Header />
      
      <main>
        <Hero />
        
        <section className="container mx-auto px-4 py-24">
          <div className="mb-12">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Spatial Intelligence</h2>
            <div className="h-px w-24 bg-primary/30 mb-8" />
          </div>
          <SplineSceneBasic />
        </section>

        <BentoGrid />
        <Industries />
        <Projects />
        <ArchitecturePatterns />
        <Impact />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
