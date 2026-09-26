"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", kanji: "起点" },
    { name: "About", href: "#about", kanji: "概要" },
    { name: "Skills", href: "#skills", kanji: "技術" },
    { name: "Experience", href: "#experience", kanji: "経歴" },
    { name: "Projects", href: "#projects", kanji: "実績" },
    { name: "Contact", href: "#contact", kanji: "連絡" },
  ];

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
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[var(--paper)]/95 backdrop-blur-md border-b border-[var(--line)] shadow-sm"
        : "bg-gradient-to-b from-[var(--paper)]/95 via-[var(--paper)]/75 to-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-[74px] flex items-center justify-between gap-4">

        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="inline-flex items-center gap-3 group"
          aria-label="Alvincent Sangco Home"
        >
          <div className="brand-mark group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/profile.jpg"
              alt=""
              width={44}
              height={44}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="font-mono text-xs font-semibold leading-tight tracking-wider uppercase text-[var(--ink)] flex flex-col">
            <span>ALVINCENT</span>
            <span className="text-[var(--ash)]">
              SANGCO · {new Date().getFullYear()}
            </span>
          </div>
        </a>


        <nav
          className="hidden md:flex items-center gap-7 lg:gap-9 font-mono text-[0.72rem] tracking-widest uppercase text-[var(--ink-soft)]"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative py-2 transition-colors duration-200 flex flex-col items-center group ${isActive
                  ? "text-[var(--ink)] font-semibold"
                  : "hover:text-[var(--ink)]"
                  }`}
              >
                <span>{link.name}</span>

                <span
                  className={`absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-[var(--sun)] transition-all duration-200 ${isActive
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-50 group-hover:opacity-60 group-hover:scale-75"
                    }`}
                />
              </a>
            );
          })}
        </nav>


        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            className="ticket-pill"
          >
            <span>GET IN TOUCH</span>
            <span className="ticket-pill-icon" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center gap-2 px-3 py-1.5 border border-[var(--line)] rounded font-mono text-xs tracking-wider uppercase text-[var(--ink)] hover:bg-[var(--paper-soft)] transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation"
        >
          <span>{mobileMenuOpen ? "CLOSE" : "MENU"}</span>
          <span className="text-[0.65rem] text-[var(--ash)] font-serif">
            {mobileMenuOpen ? "閉" : "目録"}
          </span>
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[var(--paper)] border-b border-[var(--line)] px-6 py-6 shadow-xl"
        >
          <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-widest text-[var(--ink)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="flex items-center justify-between py-2 border-b border-[var(--line)]/50 hover:text-[var(--sun)] transition-colors"
              >
                <span>{link.name}</span>
                <span className="font-serif text-[var(--ash)] text-xs">
                  {link.kanji}
                </span>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="ticket-pill w-full justify-between"
              >
                <span>GET IN TOUCH</span>
                <span className="ticket-pill-icon">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
