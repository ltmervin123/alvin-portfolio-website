import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alvincent Sangco - Full Stack Developer Portfolio",
    short_name: "A. Sangco Portfolio",
    description:
      "Backend-focused full stack developer specializing in MERN applications, AI integration, and scalable systems.",
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
