"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

const shimmerBase64 =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNkMWQ1ZGIiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjAuNTsxOzAuNSIgZHVyPSIxLjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvc3ZnPg==";

function ImageGallery({
  images,
  projectTitle,
  priority = false,
}: {
  images: string[];
  projectTitle: string;
  priority?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 250);
    }
  };

  const prevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setIsTransitioning(false);
      }, 250);
    }
  };

  useEffect(() => {
    if (images.length <= 1 || isHovered || isModalOpen) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 250);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length, isHovered, isModalOpen]);


  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  if (images.length === 0) return null;

  return (
    <>
      <div
        className="relative w-full h-72 md:h-80 bg-[var(--paper-deep)] border border-[var(--line)] overflow-hidden group select-none cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={images[currentIndex]}
          alt={`${projectTitle} screenshot ${currentIndex + 1}`}
          fill
          className={`object-cover transition-all duration-500 group-hover:scale-105 ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          sizes="(max-width: 768px) 100vw, 40vw"
          priority={priority}
          placeholder="blur"
          blurDataURL={shimmerBase64}
        />


        <div className="absolute top-3 right-3 bg-[var(--ink)] text-[var(--rice)] px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider border border-white/20 z-10 shadow-xs">
          {currentIndex + 1} / {images.length}
        </div>

        <div className="absolute top-3 left-3 bg-[var(--paper)] text-[var(--ink)] px-2.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider border border-[var(--line)] z-10 flex items-center gap-1.5 shadow-xs">
          <span className="font-serif text-[var(--sun)] font-bold">見本</span>
          <span>EXPAND VIEW</span>
        </div>


        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-[var(--ink)]/80 text-[var(--rice)] w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[var(--sun)] z-20"
              aria-label="Previous image"
            >
              ←
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[var(--ink)]/80 text-[var(--rice)] w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[var(--sun)] z-20"
              aria-label="Next image"
            >
              →
            </button>
          </>
        )}


        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
            {images.slice(0, 10).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full ${idx === currentIndex
                  ? "bg-[var(--gold-bright)] w-5 h-1.5"
                  : "bg-white/50 hover:bg-white/80 w-1.5 h-1.5"
                  }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
            {images.length > 10 && (
              <span className="text-[0.6rem] text-white/70 font-mono ml-1">
                +{images.length - 10}
              </span>
            )}
          </div>
        )}
      </div>

      {isModalOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-[var(--night)]/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >

            <button
              type="button"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-40 px-4 py-2 bg-white/10 hover:bg-[var(--sun)] text-[var(--rice)] border border-white/20 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <span>CLOSE</span>
              <span>✕</span>
            </button>


            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-40 bg-white/10 text-[var(--rice)] px-4 py-2 border border-white/20 font-mono text-xs uppercase tracking-wider">
              {projectTitle} // {currentIndex + 1} OF {images.length}
            </div>

            <div
              className="relative w-full h-[80vh] max-w-6xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                key={`${projectTitle}-large-${currentIndex}`}
                src={images[currentIndex]}
                alt={`${projectTitle} screenshot ${currentIndex + 1}`}
                fill
                className="object-contain p-2 sm:p-6 transition-opacity duration-300"
                sizes="100vw"
                priority
                quality={95}
              />


              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-[var(--sun)] text-[var(--rice)] border border-white/20 w-12 h-12 rounded-full flex items-center justify-center font-mono text-xl transition-all"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-[var(--sun)] text-[var(--rice)] border border-white/20 w-12 h-12 rounded-full flex items-center justify-center font-mono text-xl transition-all"
                    aria-label="Next image"
                  >
                    →
                  </button>
                </>
              )}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      code: "SYS-01",
      kanji: "機電一号",
      title: "Snappcheck",
      subtitle: "AI-Powered Reference Check Automation System",
      description:
        "High-throughput enterprise platform automating reference verification through AI analysis and async Redis queues. Deployed in live production environments processing 100+ candidate evaluations on a weekly cadence.",
      contributions: [
        "Designed complete backend architecture, domain schemas, and RESTful API endpoints.",
        "Integrated Claude & Gemini LLM pipelines for automated multi-factor evaluation reports.",
        "Implemented Redis job queues to process heavy background workflows without client blocking.",
        "Optimized database query performance with custom Mongoose aggregation pipelines.",
      ],
      tech: [
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "Anthropic API",
        "Google Services",
      ],
      link: "https://snappcheck.com",
      images: [
        "/projects/snappcheck-images/home.png",
        "/projects/snappcheck-images/dashboard.png",
        "/projects/snappcheck-images/candidate-form.png",
        "/projects/snappcheck-images/candidates.png",
        "/projects/snappcheck-images/jobs.png",
        "/projects/snappcheck-images/add-job.png",
        "/projects/snappcheck-images/reference-request.png",
        "/projects/snappcheck-images/referee-form.png",
        "/projects/snappcheck-images/questionnaire.png",
        "/projects/snappcheck-images/completed-reference.png",
        "/projects/snappcheck-images/summary-report-1.png",
        "/projects/snappcheck-images/summary-report-2.png",
        "/projects/snappcheck-images/reports.png",
        "/projects/snappcheck-images/agency.png",
        "/projects/snappcheck-images/archive.png",
      ],
    },
    {
      code: "SYS-02",
      kanji: "機電二号",
      title: "Prepwise",
      subtitle: "AI-Powered Mock Interview Simulator",
      description:
        "Comprehensive browser-based simulation suite enabling candidate practice with real-time video capture, speech transcription, and instant multi-criteria AI rubric feedback.",
      contributions: [
        "Architected end-to-end full-stack web application with React and Node.js.",
        "Engineered browser-based video/audio recording pipeline with stream chunking.",
        "Integrated Google Cloud Speech-to-Text with automated prompt evaluation chains.",
        "Created administrative dashboards for student interview progress and analytics.",
      ],
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Redis",
        "Anthropic API",
        "Google Speech-to-Text",
      ],
      link: "https://capstone-mock-ai-simulator-client.vercel.app",
      images: [
        "/projects/prepwise-images/home.png",
        "/projects/prepwise-images/dashboard.png",
        "/projects/prepwise-images/interview.png",
        "/projects/prepwise-images/answer.png",
        "/projects/prepwise-images/questions.png",
        "/projects/prepwise-images/history.png",
        "/projects/prepwise-images/interview-summary-1.png",
        "/projects/prepwise-images/interview-summary-2.png",
        "/projects/prepwise-images/reports.png",
        "/projects/prepwise-images/students.png",
        "/projects/prepwise-images/admin-dashboard.png",
      ],
    },
    {
      code: "SYS-03",
      kanji: "機電三号",
      title: "TORS",
      subtitle: "Criminology Reviewer & Examination Platform",
      description:
        "Dedicated digital reviewer platform for criminology reviewees, supporting high-concurrency practice examinations, detailed answer explanations, and secure media assets.",
      contributions: [
        "Architected scalable MongoDB database schemas for multi-tiered question banks.",
        "Implemented secure authenticated media uploading workflows via Cloudinary.",
        "Deployed production-ready backend infrastructure optimized for high test-day concurrency.",
      ],
      tech: ["Node.js", "Express", "MongoDB", "Cloudinary"],
      link: "https://www.urtors.com",
      images: [
        "/projects/tors-images/home.png",
        "/projects/tors-images/dashboard.png",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 md:px-8 border-b border-[var(--line)] bg-[var(--paper-soft)]/40"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 border-b border-[var(--line)] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--sun)] mb-1 font-semibold">
              [ PROJECTS 04 // FEATURED SYSTEMS ]
            </div>
            <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[var(--ink)]">
              FEATURED PROJECTS
            </h2>
          </div>
        </div>


        <div className="space-y-16">
          {projects.map((project, pIdx) => (
            <motion.div
              key={project.code}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: pIdx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[var(--paper)] border border-[var(--line)] p-6 sm:p-8 lg:p-10 shadow-sm relative group hover:border-[var(--sun)]/50 transition-colors"
            >

              <div className="flex justify-between items-center pb-4 mb-6 border-b border-[var(--line)] font-mono text-xs uppercase tracking-wider">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-[var(--sun)] text-sm">{project.code}</span>
                  <span className="text-[var(--ash)]">//</span>
                  <span className="font-serif text-[var(--ink)] font-bold text-sm">
                    {project.kanji}
                  </span>
                  <span className="text-[var(--ash)]">//</span>
                  <span className="text-[var(--ink)] font-mono text-xs font-semibold">
                    {project.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[var(--paper-soft)] px-3 py-1 border border-[var(--line)]">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span className="text-[var(--ink)] font-mono text-xs font-semibold tracking-wider">
                    LIVE PRODUCTION
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl text-[var(--ink)] font-semibold tracking-wide">
                      {project.title}
                    </h3>
                    <p className="font-serif text-base sm:text-lg text-[var(--sun-deep)] mt-1 font-semibold">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="font-serif text-sm sm:text-base text-[var(--ink-soft)] leading-relaxed">
                    {project.description}
                  </p>


                  <div className="pt-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--ink)] font-bold block mb-2">
                      KEY CONTRIBUTIONS &amp; ARCHITECTURE:
                    </span>
                    <ul className="space-y-2 font-serif text-xs sm:text-sm text-[var(--ink-soft)]">
                      {project.contributions.map((contribution, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5">
                          <span className="font-mono text-[var(--sun)] text-sm mt-0.5 font-bold">
                            ▹
                          </span>
                          <span className="text-[var(--ink-soft)]">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>


                  <div className="pt-2">
                    <span className="font-mono text-[0.7rem] uppercase tracking-wider text-[var(--ash)] font-bold block mb-2">
                      STACK &amp; INFRASTRUCTURE:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 bg-[var(--paper-soft)] border border-[var(--line)] font-mono text-xs font-medium text-[var(--ink)] uppercase tracking-wide hover:border-[var(--sun)] transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>


                  <div className="pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ticket-pill"
                    >
                      <span>VIEW LIVE PROJECT</span>
                      <span className="ticket-pill-icon" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </div>
                </div>


                <div className="lg:col-span-5">
                  <ImageGallery
                    images={project.images}
                    projectTitle={project.title}
                    priority={pIdx === 0}
                  />
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
