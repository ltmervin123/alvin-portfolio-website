"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    "Development of an automated reference check pipeline that processed 100+ candidates weekly by integrating Gemini/Claude APIs to automate candidate assessment report. ",
    "Designed and implemented RESTful APIs for audio processing, AI evaluation, authentication, and real‑time features. ",
    "Optimized API response latency by 40% by implementing Redis caching layers and optimizing Mongoose aggregation pipelines for complex data retrieval. ",
    "Integrated third‑party services including Claude AI, Google Cloud Storage, and Speech‑to‑Text APIs. ",
    "Optimized backend services and async processing to reduce latency in AI evaluation requests and improve system responsiveness.",
    "Collaborated with product stakeholders to deliver scalable, maintainable features. ",
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-[#FAF8F5]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-theme-text font-serif mb-16 text-center"
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-8 top-0 w-0.5 bg-theme-accent hidden md:block"
          />

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative pl-0 md:pl-20"
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 top-6 w-4 h-4 bg-theme-accent rounded-full border border-theme-bg shadow-sm hidden md:block" />

            <div className="bg-[#FAF8F5] p-8 rounded-xl border border-theme-border hover:shadow-sm transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-theme-text font-serif">
                    Backend Developer (Full Stack – Backend Focused)
                  </h3>
                  <div className="flex items-center gap-3 mt-1 ">
                    <Image
                      src="/hr-hatch-logo.jpeg"
                      alt="HR-Hatch Tech Logo"
                      width={32}
                      height={32}
                      className="rounded-md cursor-pointer"
                    />
                    <p
                      className="text-lg text-theme-accent font-semibold cursor-pointer"
                      title="HR-Hatch Tech LinkedIn"
                    >
                      <a
                        href="https://www.linkedin.com/company/hr-hatch/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        HR-Hatch Tech
                      </a>
                    </p>
                  </div>
                </div>
                <span className="text-theme-muted font-serif font-medium mt-2 md:mt-0">
                  2024 – Present
                </span>
              </div>

              <ul className="space-y-3 mt-6">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-start text-theme-muted font-serif"
                  >
                    <span className="text-theme-accent mr-3 mt-1 text-xl">
                      •
                    </span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
