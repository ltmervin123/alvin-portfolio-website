/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Chakra_Petch, Azeret_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { constructMetadata, generatePersonJsonLd } from "@/config/site";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generatePersonJsonLd();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`antialiased ${chakraPetch.variable} ${azeretMono.variable} bg-[var(--paper)] text-[var(--ink)] font-serif selection:bg-[var(--gold)] selection:text-[var(--rice)]`}
      >
        {children} <Analytics />
      </body>
    </html>
  );
}

