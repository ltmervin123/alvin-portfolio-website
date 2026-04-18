"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6 bg-[#FAF8F5]" id="about">
      <div className="flex justify-center mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-48 h-48 overflow-hidden rounded-full shadow-sm border border-theme-border"
        >
          <Image
            src="/profile.jpg"
            alt="Alvin Sangco"
            fill
            className="transition-all duration-500 object-cover"
            priority
          />
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl text-theme-text mb-16 text-center font-serif"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 text-left"
          >
            <p className="text-lg text-theme-muted leading-relaxed font-serif">
              A Full-Stack Developer with 2 years of experience specializing in
              Web Development, AI-driven automation, RAG pipelines, media
              processing workflows, and scalable RESTful APIs. Proven track
              record of transforming complex requirements into production-ready
              systems, with a focus on optimizing latency and enhancing
              evaluation accuracy through LLM integration.
            </p>
            <p className="text-lg text-theme-muted leading-relaxed font-serif">
              I enjoy solving complex backend problems, optimizing performance,
              and integrating AI services into practical, user-facing products.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
