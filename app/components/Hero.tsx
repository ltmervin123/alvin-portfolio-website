"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offset = 74;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", href);
      element.setAttribute("tabindex", "-1");
      element.focus({ preventScroll: true });
    }
  };

  return (
    <section className="relative min-h-[92vh] pt-18.5 flex items-center border-b border-(--line) overflow-hidden">
      <div
        className="absolute top-1/4 right-[10%] w-152 h-152 rounded-full pointer-events-none opacity-40 blur-3xl -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(229,169,50,0.3) 0%, rgba(201,66,26,0.15) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full py-12 md:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="hidden lg:flex lg:col-span-2 xl:col-span-1 flex-col items-center justify-center gap-4 text-(--ink-soft) font-serif">
            <span className="vertical-poem-text text-sm tracking-widest text-(--ink) select-none">
              未来を描き、共に創る。
            </span>
            <i className="w-px h-28 bg-(--line) block my-1" />
            <div className="hanko-seal" title="Hankō Seal">
              <span>桑</span>
              <span>弧</span>
            </div>
            <span className="font-mono text-[0.6rem] uppercase tracking-widest text-ash select-none mt-2">
              SYS·{new Date().getFullYear()}
            </span>
          </div>

          <div className="lg:col-span-10 xl:col-span-8 space-y-6">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display font-light text-4xl sm:text-5xl md:text-6xl lg:text-[5.2rem] leading-[0.96] tracking-tight uppercase text-(--ink) break-words">
                <span className="block">ALVINCENT SANGCO</span>
                <span className="block text-(--sun) font-normal">
                  FULL-STACK
                </span>
                <span className="block text-(--ink)">DEVELOPER</span>
              </h1>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-4"
            >
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-sun-deep">
                WEB · MOBILE · API · 3D/AR · AI INTEGRATION
              </p>
              <p className="font-serif text-base sm:text-lg text-(--ink-soft) max-w-2xl leading-relaxed">
                I specialize in creating modern, scalable web applications that
                solve real-world problems. From concept to deployment, I bring
                technical expertise and creative problem-solving to every
                project, ensuring your vision comes to life with clean code and
                exceptional user experiences.
              </p>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#projects"
                onClick={(e) => handleClick(e, "#projects")}
                className="ticket-pill min-h-[44px]"
              >
                <span>VIEW SELECTED PROJECTS</span>
                <span className="ticket-pill-icon" aria-hidden="true">
                  →
                </span>
              </a>
              <a
                href="/Alvincent Sangco Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ticket-pill-secondary min-h-[44px]"
              >
                <span>DOWNLOAD RESUME (PDF)</span>
                <span className="font-serif text-sm">↗</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
