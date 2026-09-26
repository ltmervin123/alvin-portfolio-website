"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const experiences = [
    {
      period: "2025 — PRESENT",
      kanjiNumber: "〇一",
      role: "Software Developer",
      company: "FSUU BIRC",
      companyLogo: "/fsuu-birc-logo.png",
      achievements: [
        "Develop and maintain web and mobile applications incorporating augmented reality (AR) capabilities.",
        "Integrate and optimize 3D models for educational and scientific research applications.",
        "Implement application features with strict optimization for mobile performance, offline caching, and cross-platform compatibility.",
      ],
    },
    {
      period: "2024 — 2025",
      kanjiNumber: "〇二",
      role: "Backend Developer (Full Stack – Backend Focused)",
      company: "HR-Hatch Tech",
      companyLogo: "/hr-hatch-logo.jpeg",
      achievements: [
        "Architected an automated reference check pipeline processing 100+ candidates weekly by integrating Gemini/Claude APIs to automate candidate assessment reports.",
        "Designed and deployed RESTful APIs for audio processing, LLM evaluation pipelines, authentication, and real-time websocket features.",
        "Optimized API response latency by 40% by implementing Redis caching layers and optimizing Mongoose aggregation pipelines for complex data retrieval.",
        "Integrated third-party cloud infrastructure including Claude AI, Google Cloud Storage, and Speech-to-Text APIs.",
        "Optimized async job queues and worker processes to eliminate latency bottlenecks during peak AI evaluation workloads.",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 sm:px-6 md:px-8 border-b border-[var(--line)] bg-[var(--night)] text-[var(--rice)] overflow-hidden"
    >

      <div
        className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full pointer-events-none opacity-25 blur-3xl -z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(229,169,50,0.5) 0%, rgba(201,66,26,0.25) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 border-b border-white/15 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-gold-bright mb-1">
              [ CHRONICLE 02 // TIMELINE ]
            </div>
            <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-gold-bright">
              PRODUCTION EXPERIENCE
            </h2>
          </div>
        </div>


        <div className="space-y-12">
          {experiences.map((item, idx) => (
            <motion.div
              key={`${item.company}-${item.period}`}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: idx * 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start border border-white/10 bg-white/[0.02] p-5 sm:p-8 relative hover:border-[var(--gold)]/40 transition-colors"
            >

              <div className="lg:col-span-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl text-[var(--gold-bright)] font-light">
                    {item.kanjiNumber}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--sun)] font-semibold">
                    {item.period}
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <div className="relative w-10 h-10 rounded bg-black/60 border border-white/20 overflow-hidden flex items-center justify-center p-1">
                    <Image
                      src={item.companyLogo}
                      alt={`${item.company} Emblem`}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-[var(--rice)] font-normal tracking-wide">
                      {item.company}
                    </h3>
                  </div>
                </div>
              </div>


              <div className="lg:col-span-8 space-y-4">
                <h4 className="font-serif text-xl sm:text-2xl text-[var(--rice)] font-medium">
                  {item.role}
                </h4>

                <ul className="space-y-3 font-serif text-sm sm:text-base text-[var(--rice)]/85 leading-relaxed pt-2">
                  {item.achievements.map((achievement, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-3">
                      <span className="font-mono text-[var(--gold-bright)] text-xs mt-1 shrink-0">
                        ▹
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
