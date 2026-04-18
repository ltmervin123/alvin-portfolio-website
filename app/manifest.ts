import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alvincent Sangco - Full Stack Developer Portfolio",
    short_name: "A. Sangco Portfolio",
    description:
      "Full-Stack Developer with 2 years of experience specializing in Web Development, AI-driven automation, RAG pipelines, media processing workflows, and scalable RESTful APIs. Proven track record of transforming complex requirements into production-ready systems, with a focus on optimizing latency and enhancing evaluation accuracy through LLM integration. ",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#10b981",
    orientation: "portrait-primary",
    categories: ["business", "portfolio", "technology"],
    lang: "en-US",
    dir: "ltr",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
