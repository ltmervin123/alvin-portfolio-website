import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";

// Lazy load below-the-fold components
const About = dynamic(() => import("./components/About"), {
  loading: () => <div className="min-h-screen" />,
});
const Skills = dynamic(() => import("./components/Skills"), {
  loading: () => <div className="min-h-screen" />,
});
const Experience = dynamic(() => import("./components/Experience"), {
  loading: () => <div className="min-h-screen" />,
});
const Projects = dynamic(() => import("./components/Projects"), {
  loading: () => <div className="min-h-screen" />,
});
const Contact = dynamic(() => import("./components/Contact"), {
  loading: () => <div className="min-h-screen" />,
});
const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <div className="min-h-[200px]" />,
});

export const metadata: Metadata = {
  title: "Alvincent Sangco | Full Stack Developer Portfolio",
  description:
    "Explore the portfolio of Alvincent Sangco, a backend-focused full stack developer specializing in MERN stack, AI integration, and scalable systems. View projects, skills, and experience.",
  alternates: {
    canonical: "https://alvincentsangco.dev",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section id="hero" aria-label="Introduction">
          <Hero />
        </section>
        <section id="about" aria-label="About Me">
          <About />
        </section>
        <section id="skills" aria-label="Technical Skills">
          <Skills />
        </section>
        <section id="experience" aria-label="Work Experience">
          <Experience />
        </section>
        <section id="projects" aria-label="Portfolio Projects">
          <Projects />
        </section>
        <section id="contact" aria-label="Contact Information">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
}
