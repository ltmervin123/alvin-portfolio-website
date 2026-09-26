import dynamic from "next/dynamic";
import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";


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
    "Full-Stack Developer with 2+ years of experience specializing in Web and Mobile Development, AI-driven automation, RAG pipelines, media processing workflows, and scalable RESTful APIs. Proven track record of transforming complex requirements into production-ready systems, with a focus on optimizing latency and enhancing evaluation accuracy through LLM integration.",
  alternates: {
    canonical: "https://alvincentsangco.dev",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section id="hero" aria-label="Introduction" className="scroll-mt-20">
          <Hero />
        </section>
        <section id="about" aria-label="About Me" className="scroll-mt-20">
          <About />
        </section>
        <section id="skills" aria-label="Technical Skills" className="scroll-mt-20">
          <Skills />
        </section>
        <section id="experience" aria-label="Work Experience" className="scroll-mt-20">
          <Experience />
        </section>
        <section id="projects" aria-label="Portfolio Projects" className="scroll-mt-20">
          <Projects />
        </section>
        <section id="contact" aria-label="Contact Information" className="scroll-mt-20">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
}
