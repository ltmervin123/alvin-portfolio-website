"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const coreFocusAreas = [
    {
      label: "FULL-STACK DEVELOPER",
      kanji: "全階層開発",
      desc: "Architecting responsive, high-performance web applications with Next.js, React, Node.js, and TypeScript.",
    },
    {
      label: "AI ENGINEER",
      kanji: "知能工学",
      desc: "Building automated LLM evaluation workflows, RAG pipelines, and intelligent voice features with Claude and Gemini.",
    },
    {
      label: "MOBILE DEVELOPER",
      kanji: "端末開発",
      desc: "Building cross-platform mobile apps with offline-first architecture, local caching, and resilient data synchronization.",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 md:px-8 border-b border-[var(--line)] bg-[var(--paper-soft)]/50"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-14 border-b border-[var(--line)] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--sun)] mb-1">
              [ PROFILE 01 // OVERVIEW ]
            </div>
            <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[var(--ink)]">
              ABOUT ME
            </h2>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 bg-[var(--paper)] border border-[var(--line)] p-6 shadow-sm relative group"
          >

            <div className="flex justify-between items-center pb-4 mb-6 border-b border-[var(--line)] font-mono text-[0.65rem] text-[var(--ash)] uppercase tracking-wider">
              <span>DOSSIER // ALVINCENT SANGCO</span>
              <span className="text-[var(--sun)] font-bold">ACTIVE</span>
            </div>

            <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 mb-6">
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[var(--line)] shadow-inner">
                <Image
                  src="/profile.jpg"
                  alt="Alvincent Sangco Portrait"
                  fill
                  className="object-cover transition-all duration-700 filter contrast-[1.03] group-hover:scale-105"
                  priority
                />
              </div>


              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-[var(--sun)]" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-[var(--sun)]" />
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-[1px] h-4 bg-[var(--sun)]" />
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-[1px] h-4 bg-[var(--sun)]" />

              <div className="absolute bottom-1 right-1 hanko-seal shadow-md bg-[var(--paper)]">
                <span>開</span>
                <span>発</span>
              </div>
            </div>


            <div className="space-y-3 font-mono text-xs border-t border-[var(--line)] pt-4 text-[var(--ink)]">
              <div className="flex justify-between">
                <span className="text-[var(--ash)]">ROLE:</span>
                <span className="font-semibold text-right">FULL-STACK, AI &amp; MOBILE DEVELOPER</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--ash)]">EXPERIENCE:</span>
                <span className="font-semibold text-right">2+ YEARS PROFESSIONAL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--ash)]">STATUS:</span>
                <span className="text-[var(--gold)] font-semibold text-right">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-8"
          >

            <div className="space-y-4 font-serif text-base sm:text-lg text-[var(--ink-soft)] leading-relaxed">
              <p>
                Full-stack software engineer experienced in building web and mobile applications, AI-powered systems, automation
                workflows, scalable RESTful APIs, and 3D/AR applications. Skilled at translating complex business requirements into
                reliable, production-ready solutions, with hands-on experience integrating LLMs, RAG pipelines, and media processing
                workflows to automate processes and improve system efficiency and accuracy.
              </p>
            </div>


            <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-[var(--line)]">
              {coreFocusAreas.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--paper)] border border-[var(--line)] p-4 space-y-2 hover:border-[var(--sun)] transition-colors"
                >
                  <div className="flex justify-between items-center font-mono text-[0.65rem] text-[var(--ash)]">
                    <span>SYS.0{idx + 1}</span>
                    <span className="font-serif text-[var(--sun)]">{item.kanji}</span>
                  </div>
                  <h3 className="font-display text-sm tracking-wide text-[var(--ink)] font-semibold">
                    {item.label}
                  </h3>
                  <p className="font-serif text-xs text-[var(--ink-soft)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[var(--paper-deep)] border-l-2 border-[var(--sun)] font-serif text-sm text-[var(--ink)] italic flex items-center justify-between">
              <span>
                &ldquo;Pragmatic architecture, rapid velocity, and uncompromising craft.&rdquo;
              </span>
              <span className="font-mono text-[0.65rem] not-italic text-[var(--ash)] uppercase ml-4 shrink-0">
                — ENGINEERING CREED
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
