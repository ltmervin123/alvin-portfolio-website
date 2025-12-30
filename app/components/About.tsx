"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      title: "1+ Year Production Experience",
      description: "Building real-world MERN applications",
    },
    {
      title: "AI Integrations",
      description: "Claude, Gemini, Speech-to-Text",
    },
    {
      title: "Media Pipelines",
      description: "Video → Audio → AI Evaluation",
    },
    {
      title: "Startup Systems",
      description: "Scalable, production-ready architectures",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative w-48 h-48 rounded-full overflow-hidden shadow-xl "
          >
            <Image
              src="/profile.jpg"
              alt="Alvin Sangco"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              I am a backend-focused full stack developer with over a year of
              production experience building AI-powered web applications. I
              specialize in designing REST APIs, media processing pipelines, and
              scalable systems used in real-world hiring and evaluation
              platforms.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I enjoy solving complex backend problems, optimizing performance,
              and integrating AI services into practical, user-facing products.
            </p>
          </motion.div>

          {/* Right: Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-emerald-500 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
