"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { JSX, useRef } from "react";
import {
  Server,
  Network,
  Mic,
  Database,
  Workflow,
  Cpu,
  Layers,
  Smartphone,
  Cloud,
} from "lucide-react";
import {
  siReact,
  siVite,
  siTailwindcss,
  siReactquery,
  siZod,
  siNodedotjs,
  siExpress,
  siSocketdotio,
  siMongodb,
  siMongoose,
  siRedis,
  siRender,
  siVercel,
  siGooglecloud,
  siCloudinary,
  siGit,
  siGithub,
  siPostman,
  siDocker,
  siAnthropic,
  siHono,
  siPostgresql,
  siPrisma,
  siGithubactions,
  siGithubcopilot,
  siNextdotjs,
  siVuedotjs,
  siPinia,
  siQuasar,
  siThreedotjs,
  siExpo,
  siApple,
  siSqlite,
  siGooglegemini,
} from "simple-icons";


const SimpleIcon = ({ icon, className }: { icon: { path: string }; className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    className={className || "w-4 h-4 fill-current"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={icon.path} />
  </svg>
);

const TechIcon = ({ name }: { name: string }) => {
  const iconMap: Record<string, JSX.Element> = {
    "React.js": <SimpleIcon icon={siReact} />,
    "Next.js": <SimpleIcon icon={siNextdotjs} />,
    Vite: <SimpleIcon icon={siVite} />,
    TailwindCSS: <SimpleIcon icon={siTailwindcss} />,
    "TanStack Query": <SimpleIcon icon={siReactquery} />,
    Zod: <SimpleIcon icon={siZod} />,
    "Vue.js": <SimpleIcon icon={siVuedotjs} />,
    Pinia: <SimpleIcon icon={siPinia} />,
    Quasar: <SimpleIcon icon={siQuasar} />,
    "Three.js": <SimpleIcon icon={siThreedotjs} />,

    "Node.js": <SimpleIcon icon={siNodedotjs} />,
    Express: <SimpleIcon icon={siExpress} />,
    "Hono.js": <SimpleIcon icon={siHono} />,
    "REST APIs": <Server className="w-4 h-4" />,
    "Socket.io": <SimpleIcon icon={siSocketdotio} />,
    Mongoose: <SimpleIcon icon={siMongoose} />,
    Prisma: <SimpleIcon icon={siPrisma} />,

    "Claude / Anthropic": <SimpleIcon icon={siAnthropic} />,
    "Gemini API": <SimpleIcon icon={siGooglegemini} />,
    "RAG Pipelines": <Workflow className="w-4 h-4" />,
    "Speech-to-Text": <Mic className="w-4 h-4" />,
    "Google APIs": <SimpleIcon icon={siGooglecloud} />,
    "GitHub Copilot": <SimpleIcon icon={siGithubcopilot} />,

    MongoDB: <SimpleIcon icon={siMongodb} />,
    PostgreSQL: <SimpleIcon icon={siPostgresql} />,
    Redis: <SimpleIcon icon={siRedis} />,
    "Vector Databases": <Database className="w-4 h-4" />,
    SQLite: <SimpleIcon icon={siSqlite} />,

    Docker: <SimpleIcon icon={siDocker} />,
    "GitHub Actions": <SimpleIcon icon={siGithubactions} />,
    Vercel: <SimpleIcon icon={siVercel} />,
    Render: <SimpleIcon icon={siRender} />,
    Git: <SimpleIcon icon={siGit} />,
    GitHub: <SimpleIcon icon={siGithub} />,
    Postman: <SimpleIcon icon={siPostman} />,
    Cloudinary: <SimpleIcon icon={siCloudinary} />,

    "Quasar/Capacitor": <SimpleIcon icon={siQuasar} />,
    "React Native": <SimpleIcon icon={siReact} />,
    Expo: <SimpleIcon icon={siExpo} />,
    ARCore: <Cpu className="w-4 h-4" />,
    ARKit: <SimpleIcon icon={siApple} />,
  };

  return iconMap[name] || <Network className="w-4 h-4" />;
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const categories = [
    {
      index: "SYS.01",
      kanji: "前端工学",
      title: "FRONTEND SYSTEMS",
      icon: <Layers className="w-4 h-4 text-[var(--sun)]" />,
      skills: [
        "React.js",
        "Next.js",
        "Vite",
        "TailwindCSS",
        "TanStack Query",
        "Zod",
        "Vue.js",
        "Pinia",
        "Quasar",
        "Three.js",
      ],
    },
    {
      index: "SYS.02",
      kanji: "基盤開発",
      title: "BACKEND & RUNTIMES",
      icon: <Server className="w-4 h-4 text-[var(--gold)]" />,
      skills: [
        "Node.js",
        "Express",
        "Hono.js",
        "REST APIs",
        "Socket.io",
        "Mongoose",
        "Prisma",
      ],
    },
    {
      index: "SYS.03",
      kanji: "知能統合",
      title: "AI PIPELINES & WORKFLOWS",
      icon: <Cpu className="w-4 h-4 text-[var(--sun-deep)]" />,
      skills: [
        "Claude / Anthropic",
        "Gemini API",
        "RAG Pipelines",
        "Speech-to-Text",
        "Google APIs",
        "GitHub Copilot",
      ],
    },
    {
      index: "SYS.04",
      kanji: "情報管理",
      title: "DATABASE & CACHING",
      icon: <Database className="w-4 h-4 text-[var(--gold)]" />,
      skills: [
        "MongoDB",
        "Redis",
        "PostgreSQL",
        "Vector Databases",
        "SQLite",
      ],
    },
    {
      index: "SYS.05",
      kanji: "運用配備",
      title: "DEVOPS & CLOUD",
      icon: <Cloud className="w-4 h-4 text-[var(--sun)]" />,
      skills: [
        "Docker",
        "GitHub Actions",
        "Vercel",
        "Render",
        "Git",
        "GitHub",
        "Postman",
        "Cloudinary",
      ],
    },
    {
      index: "SYS.06",
      kanji: "移動体技術",
      title: "MOBILE & AR",
      icon: <Smartphone className="w-4 h-4 text-[var(--gold-bright)]" />,
      skills: [
        "Quasar/Capacitor",
        "React Native",
        "Expo",
        "ARCore",
        "ARKit",
      ],
    },
  ];

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 md:px-8 border-b border-[var(--line)] bg-[var(--paper)]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-16 border-b border-[var(--line)] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[var(--sun)] mb-1">
              [ SPECIFICATION 03 // CAPABILITIES MATRIX ]
            </div>
            <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[var(--ink)]">
              TECHNICAL SPECIFICATION
            </h2>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, cIdx) => (
            <motion.div
              key={category.index}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: cIdx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-[var(--paper-soft)] border border-[var(--line)] p-6 space-y-4 hover:border-[var(--sun)]/60 transition-colors relative group"
            >

              <div className="flex flex-wrap sm:flex-nowrap justify-between items-center gap-2 pb-3 border-b border-[var(--line)]">
                <div className="flex items-center gap-2">
                  {category.icon}
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--ink)]">
                    {category.title}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[0.65rem] text-[var(--ash)] shrink-0">
                  <span>{category.index}</span>
                  <span className="font-serif text-[var(--sun)]">{category.kanji}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--paper)] border border-[var(--line)] text-xs font-mono uppercase tracking-wide text-[var(--ink)] hover:border-[var(--sun)] hover:text-[var(--sun)] transition-colors shadow-2xs"
                  >
                    <span className="text-[var(--sun)] opacity-85">
                      <TechIcon name={skill} />
                    </span>
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
