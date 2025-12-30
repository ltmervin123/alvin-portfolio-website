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
  ],
  authors: [{ name: "Alvincent Sangco" }],
  creator: "Alvincent Sangco",
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
        url: "/og-image.jpg", // You'll need to create this
        width: 1200,
        height: 630,
        alt: "Alvincent Sangco - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvincent Sangco | Full Stack Developer",
    description:
      "Backend-focused full stack developer specializing in MERN applications, AI integration, and scalable systems.",
    images: ["/og-image.jpg"], // Same as Open Graph
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Add this from Google Search Console
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
    jobTitle: "Full Stack Developer",
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
    ],
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
