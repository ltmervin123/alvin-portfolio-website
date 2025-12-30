"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

// Image Gallery Component
function ImageGallery({
  images,
  projectTitle,
}: {
  images: string[];
  projectTitle: string;
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
      }, 300);
    }
  };

  const prevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Auto-slide functionality
  useEffect(() => {
    if (images.length <= 1 || isHovered || isModalOpen) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isHovered, isModalOpen]);

  // Prevent body scroll when modal is open
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
        className="relative w-full h-64 rounded-lg overflow-hidden shadow-md group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={images[currentIndex]}
          alt={`${projectTitle} screenshot ${currentIndex + 1}`}
          fill
          className={`object-cover cursor-pointer transition-all duration-500 hover:scale-105 ${
            isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
          onClick={() => setIsModalOpen(true)}
        />
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
              aria-label="Previous image"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 z-10"
              aria-label="Next image"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Image Counter */}
        <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 text-white text-3xl sm:text-4xl hover:text-gray-300 p-2 bg-black/50 rounded-full backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              ×
            </button>

            {/* Image Counter */}
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20 bg-black/70 text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium backdrop-blur-sm">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Main Image Container - Full viewport */}
            <div
              className="relative w-screen h-screen flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image with proper aspect ratio handling */}
              <Image
                key={`${projectTitle} screenshot ${currentIndex + 1}`}
                src={images[currentIndex]}
                alt={`${projectTitle} screenshot ${currentIndex + 1}`}
                fill
                className="object-contain p-4 sm:p-8 md:p-12"
                sizes="100vw"
                priority
                quality={95}
              />

              {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="hidden sm:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 hover:scale-110 active:scale-95"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="hidden sm:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full hover:bg-white/30 hover:scale-110 active:scale-95"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Bottom Controls - Indicators and Mobile Navigation */}
            {images.length > 1 && (
              <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-20 flex flex-col items-center gap-4">
                {/* Mobile Navigation Buttons */}
                <div className="flex sm:hidden gap-4">
                  <button
                    onClick={prevImage}
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 active:scale-95"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 active:scale-95"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Image Indicators - Scrollable on mobile */}
                <div className="max-w-full overflow-x-auto px-4 scrollbar-hide">
                  <div className="flex gap-2 justify-center min-w-min">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`rounded-full shrink-0 ${
                          idx === currentIndex
                            ? "bg-white w-6 sm:w-8 h-2.5 sm:h-3"
                            : "bg-white/50 hover:bg-white/75 w-2.5 sm:w-3 h-2.5 sm:h-3"
                        }`}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>,
          document.body
        )}
    </>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Snappcheck",
      subtitle: "AI-Powered Reference Check Automation System",
      description:
        "Automates reference checking workflows using AI-driven analysis and background processing.",
      contributions: [
        "Designed backend architecture and data models",
        "Built APIs for candidates, reference requests, and evaluations",
        "Integrated AI and Google APIs",
        "Optimized background jobs with Redis",
      ],
      tech: "Node.js · Express · MongoDB · Redis · Anthropic API · Google Services",

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
      title: "Prepwise",
      subtitle: "AI-Powered Mock Interview Simulator (Capstone)",
      description:
        "Simulates real interview sessions with video recording, transcription, and AI feedback.",
      contributions: [
        "Built full-stack architecture",
        "Implemented browser-based video recording",
        "Created media processing pipelines",
        "Integrated AI feedback generation",
      ],
      tech: "React · Node.js · MongoDB · Redis · Anthropic API · Google Speech-to-Text",
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
      title: "TORS",
      subtitle: "Criminology Reviewer System",
      description: "Digital reviewer platform with secure media handling.",
      contributions: [
        "Designed backend schemas and APIs",
        "Implemented Cloudinary media storage",
        "Deployed production-ready backend",
      ],
      tech: "Node.js · Express · MongoDB · Cloudinary",
      link: "https://www.urtors.com",
      images: [
        "/projects/tors-images/home.png",
        "/projects/tors-images/dashboard.png",
      ],
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all"
            >
              <div className="grid md:grid-cols-3 gap-8 p-8">
                {/* Left: Project Info */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg text-emerald-600 font-semibold">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Contributions:
                    </h4>
                    <ul className="space-y-2">
                      {project.contributions.map((contribution, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-700 text-sm"
                        >
                          <span className="text-emerald-500 mr-2 mt-0.5">
                            ▸
                          </span>
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-sm text-gray-600 font-mono pt-2">
                    {project.tech}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </div>

                {/* Right: Project Image Gallery */}
                <div className="flex items-center justify-center">
                  <ImageGallery
                    images={project.images}
                    projectTitle={project.title}
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
