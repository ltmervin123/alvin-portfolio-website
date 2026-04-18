"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 80; // Height of the header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-theme-bg">
      <div className="max-w-7xl w-full grid md:grid-cols-1 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 text-center flex flex-col items-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl text-theme-text leading-tight tracking-tight font-serif"
          >
            Alvincent Sangco
            <br />
            <span className="text-theme-accent italic">
              Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-theme-muted leading-relaxed max-w-2xl mx-auto"
          >
            Let&apos;s build your idea into reality. I specialize in creating
            modern, scalable web applications that solve real-world problems.
            From concept to deployment, I bring technical expertise and creative
            problem-solving to every project, ensuring your vision comes to life
            with clean code and exceptional user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4 justify-center"
          >
            <a
              href="#projects"
              onClick={(e) => handleClick(e, "#projects")}
              className="px-8 py-3 bg-theme-text text-theme-bg rounded-md font-medium hover:bg-theme-muted transition-colors"
            >
              View Projects
            </a>
            <a
              href="/Alvincent Sangco Resume.pdf"
              className="px-8 py-3 bg-transparent text-theme-text border border-theme-border rounded-md font-medium hover:border-theme-muted hover:text-theme-muted transition-colors"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
