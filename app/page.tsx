import dynamic from "next/dynamic";
import Header from "./components/Header";
import Hero from "./components/Hero";

// Lazy load below-the-fold components
const About = dynamic(() => import("./components/About"));
const Skills = dynamic(() => import("./components/Skills"));
const Experience = dynamic(() => import("./components/Experience"));
const Projects = dynamic(() => import("./components/Projects"));
const Contact = dynamic(() => import("./components/Contact"));
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
}
