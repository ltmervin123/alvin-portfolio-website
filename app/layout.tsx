import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alvincentsangco.dev"),
  title: {
    default: "Alvincent Sangco | Full Stack Developer",
    template: "%s | Alvincent Sangco",
  },
  description:
    "Backend-focused full stack developer specializing in MERN applications, AI integration, and scalable systems. Building production-ready architectures with Node.js, React, MongoDB, and AI services.",
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
      "Backend-focused full stack developer specializing in MERN applications, AI integration, and scalable systems.",
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
      "Backend-focused full stack developer specializing in MERN applications, AI integration, and scalable systems.",
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
      "Backend-focused full stack developer specializing in MERN applications, AI integration, and scalable systems.",
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
      <body className={`${inter.variable} antialiased`}>
        {children} <Analytics />
      </body>
    </html>
  );
}
