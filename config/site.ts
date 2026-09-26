import type { Metadata } from "next";

export const siteConfig = {
  name: "Alvincent Sangco",
  shortName: "A. Sangco Portfolio",
  title: "Alvincent Sangco | Full Stack Developer",
  titleTemplate: "%s | Alvincent Sangco",
  role: "Full Stack Developer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://alvincentsangco.dev",
  ogImage: "/og-image.jpg",
  description:
    "Full-Stack Developer with 2+ years of experience specializing in Web and Mobile Development, AI-driven automation, RAG pipelines, media processing workflows, and scalable RESTful APIs. Proven track record of transforming complex requirements into production-ready systems, with a focus on optimizing latency and enhancing evaluation accuracy through LLM integration.",
  keywords: [
    "Alvincent Sangco",
    "Full Stack Developer",
    "Mobile Developer",
    "Backend Developer",
    "MERN Stack",
    "Node.js Developer",
    "React Developer",
    "AI Integration",
    "MongoDB",
    "TypeScript",
    "Next.js",
    "Software Engineer",
    "Web Developer",
    "JavaScript Developer",
    "Portfolio",
  ],
  knowsAbout: [
    "Node.js",
    "React",
    "MongoDB",
    "TypeScript",
    "Next.js",
    "AI Integration",
    "Full Stack Development",
    "MERN Stack",
    "JavaScript",
    "Express.js",
    "RESTful APIs",
    "RAG Pipelines",
    "Media Processing Workflows",
  ],
  author: {
    name: "Alvincent Sangco",
    url: "https://alvincentsangco.dev",
    twitter: "@alvincentsangco",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/alvincentsangco",
    github: "https://github.com/alvincentsangco",
  },
  verification: {
    google: "google98264a67849ca1cc",
  },
  category: "technology",
  locale: "en_US",
  themeColor: "#10b981",
  backgroundColor: "#ffffff",
};

export function constructMetadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
  canonicalUrl,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
} = {}): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: siteConfig.titleTemplate,
    },
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author.name, url: siteConfig.author.url }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: siteConfig.url,
      title,
      description,
      siteName: `${siteConfig.name} Portfolio`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${siteConfig.role}`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.author.twitter,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          nocache: false,
          googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    verification: siteConfig.verification,
    category: siteConfig.category,
    alternates: {
      canonical: canonicalUrl || siteConfig.url,
    },
  };
}

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    jobTitle: siteConfig.role,
    worksFor: {
      "@type": "Organization",
      name: "Self-Employed",
    },
    description: siteConfig.description,
    sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
    knowsAbout: siteConfig.knowsAbout,
  };
}
