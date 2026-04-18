import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alvincentsangco.dev"),
  title: {
    default: "Alvincent Sangco | Full Stack Developer",
    template: "%s | Alvincent Sangco",
  },
  description:
    "Full-Stack Developer with 2 years of experience specializing in Web Development, AI-driven automation, RAG pipelines, media processing workflows, and scalable RESTful APIs. Proven track record of transforming complex requirements into production-ready systems, with a focus on optimizing latency and enhancing evaluation accuracy through LLM integration.",
  keywords: [
    "Alvincent Sangco",
    "Full Stack Developer",
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
  authors: [{ name: "Alvincent Sangco", url: "https://alvincentsangco.dev" }],
  creator: "Alvincent Sangco",
  publisher: "Alvincent Sangco",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alvincentsangco.dev",
    title: "Alvincent Sangco | Full Stack Developer",
    description:
      "Full-Stack Developer with 2 years of experience specializing in Web Development, AI-driven automation, RAG pipelines, media processing workflows, and scalable RESTful APIs. Proven track record of transforming complex requirements into production-ready systems, with a focus on optimizing latency and enhancing evaluation accuracy through LLM integration. ",
    siteName: "Alvincent Sangco Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alvincent Sangco - Full Stack Developer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvincent Sangco | Full Stack Developer",
    description:
      "Full-Stack Developer with 2 years of experience specializing in Web Development, AI-driven automation, RAG pipelines, media processing workflows, and scalable RESTful APIs. Proven track record of transforming complex requirements into production-ready systems, with a focus on optimizing latency and enhancing evaluation accuracy through LLM integration. ",
    creator: "@alvincentsangco",
    images: ["/og-image.jpg"],
  },
  robots: {
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
  verification: {
    google: "google98264a67849ca1cc",
  },
  category: "technology",
  alternates: {
    canonical: "https://alvincentsangco.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alvincent Sangco",
    url: "https://alvincentsangco.dev",
    image: "https://alvincentsangco.dev/og-image.jpg",
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Self-Employed",
    },
    description:
      "Full-Stack Developer with 2 years of experience specializing in Web Development, AI-driven automation, RAG pipelines, media processing workflows, and scalable RESTful APIs. Proven track record of transforming complex requirements into production-ready systems, with a focus on optimizing latency and enhancing evaluation accuracy through LLM integration. ",
    sameAs: [
      "https://www.linkedin.com/in/alvincentsangco",
      "https://github.com/alvincentsangco",
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
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Your University Name",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${lora.variable} font-sans antialiased bg-theme-bg text-theme-text`}
      >
        {children} <Analytics />
      </body>
    </html>
  );
}
