"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

        <div className="grid md:grid-cols-1 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 mx-auto max-w-3xl text-justify"
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
        </div>
      </div>
    </section>
  );
}
