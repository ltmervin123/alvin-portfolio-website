"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { JSX, useRef } from "react";
import { Server, Key, Shield, Network, Mic, Database } from "lucide-react";
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
} from "simple-icons";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SimpleIcon = ({ icon, className }: { icon: any; className: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    className={`${className} fill-theme-accent`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={icon.path} />
  </svg>
);

// Tech icon mapper
const TechIcon = ({ name }: { name: string }) => {
  const iconMap: Record<string, JSX.Element> = {
    // Frontend - Brand Logos
    React: <SimpleIcon icon={siReact} className="w-5 h-5" />,
    Vite: <SimpleIcon icon={siVite} className="w-5 h-5" />,
    TailwindCSS: <SimpleIcon icon={siTailwindcss} className="w-5 h-5" />,
    "TanStack Query": <SimpleIcon icon={siReactquery} className="w-5 h-5" />,
    Zustand: <Network className="w-5 h-5 text-theme-accent" />,
    Zod: <SimpleIcon icon={siZod} className="w-5 h-5" />,
    // Backend - Mix of Brand Logos and Generic Icons
    "Node.js": <SimpleIcon icon={siNodedotjs} className="w-5 h-5" />,
    Express: <SimpleIcon icon={siExpress} className="w-5 h-5" />,
    "REST APIs": <Server className="w-5 h-5 text-theme-accent" />,
    "Socket.io": <SimpleIcon icon={siSocketdotio} className="w-5 h-5" />,
    JWT: <Key className="w-5 h-5 text-theme-accent" />,
    OAuth: <Shield className="w-5 h-5 text-theme-accent" />,
    "Hono.js": <SimpleIcon icon={siHono} className="w-5 h-5" />,
    // Database - Brand Logos
    MongoDB: <SimpleIcon icon={siMongodb} className="w-5 h-5" />,
    Mongoose: <SimpleIcon icon={siMongoose} className="w-5 h-5" />,
    Prisma: <SimpleIcon icon={siPrisma} className="w-5 h-5" />,
    Redis: <SimpleIcon icon={siRedis} className="w-5 h-5" />,
    PostgreSQL: <SimpleIcon icon={siPostgresql} className="w-5 h-5" />,
    "Vector Databases": <Database className="w-5 h-5 text-theme-accent" />,
    // Cloud & DevOps - Brand Logos
    Render: <SimpleIcon icon={siRender} className="w-5 h-5" />,
    Vercel: <SimpleIcon icon={siVercel} className="w-5 h-5" />,
    "Google Cloud Storage": (
      <SimpleIcon icon={siGooglecloud} className="w-5 h-5" />
    ),
    Cloudinary: <SimpleIcon icon={siCloudinary} className="w-5 h-5" />,
    // AI & Tools - Mix of Generic Icons and Brand Logos
    "Anthropic API": <SimpleIcon icon={siAnthropic} className="w-5 h-5" />,
    "Speech-to-Text": <Mic className="w-5 h-5 text-theme-accent" />,
    "Google API": <SimpleIcon icon={siGooglecloud} className="w-5 h-5" />,
    Git: <SimpleIcon icon={siGit} className="w-5 h-5" />,
    GitHub: <SimpleIcon icon={siGithub} className="w-5 h-5" />,
    Postman: <SimpleIcon icon={siPostman} className="w-5 h-5" />,
    Docker: <SimpleIcon icon={siDocker} className="w-5 h-5" />,
    "GitHub Actions": <SimpleIcon icon={siGithubactions} className="w-5 h-5" />,
    "Github Copilot": <SimpleIcon icon={siGithubcopilot} className="w-5 h-5" />,
  };

  return (
    iconMap[name] || (
      <Network className="w-5 h-5 text-theme-accent font-serif" />
    )
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "Vite",
        "TailwindCSS",
        "TanStack Query",
        "Zustand",
        "Zod",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Hono.js",
        "REST APIs",
        "Socket.io",
        "Mongoose",
        "Zod",
        "Prisma",
      ],
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "Redis", "Vector Databases"],
    },
    {
      title: "Cloud & DevOps",
      skills: ["Render", "Vercel", "Google Cloud Storage", "Cloudinary"],
    },
    {
      title: "AI & Tools",
      skills: [
        "Anthropic API",
        "Google API",
        "RAG Pipelines",
        "Git",
        "GitHub",
        "GitHub Actions",
        "Github Copilot",
        "Postman",
        "Docker",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-20 px-6 bg-theme-bg" id="skills">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-theme-text font-serif mb-16 text-center"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#FAF8F5] p-6 rounded-xl shadow-md hover:shadow-sm transition-all border border-theme-border"
            >
              <h3 className="text-xl font-bold text-theme-text font-serif mb-4 pb-3 border-b-2 border-theme-accent">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="text-theme-muted font-serif flex items-center gap-3"
                  >
                    <TechIcon name={skill} />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
