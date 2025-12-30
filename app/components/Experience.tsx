"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    "Developed production-grade MERN applications with AI-driven workflows",
    "Designed REST APIs for video processing, authentication, and real-time features",
    "Built audio extraction, transcription, and AI analysis pipelines",
    "Integrated Claude AI, Google Cloud Storage, and Speech-to-Text APIs",
    "Optimized async processing to reduce AI evaluation latency",
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-8 top-0 w-0.5 bg-emerald-500 hidden md:block"
          />

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative pl-0 md:pl-20"
          >
            {/* Timeline Dot */}
            <div className="absolute left-6 top-6 w-5 h-5 bg-emerald-500 rounded-full border-4 border-white shadow-lg hidden md:block" />

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Backend Developer (Full Stack – Backend Focused)
                  </h3>
                  <div className="flex items-center gap-3 mt-1 ">
                    <Image
                      src="/hr_hatch_logo.jfif"
                      alt="HR-Hatch Tech Logo"
                      width={32}
                      height={32}
                      className="rounded-md cursor-pointer"
                    />
                    <p
                      className="text-lg text-emerald-600 font-semibold cursor-pointer"
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
                <span className="text-gray-600 font-medium mt-2 md:mt-0">
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
                    className="flex items-start text-gray-700"
                  >
                    <span className="text-emerald-500 mr-3 mt-1 text-xl">
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
