import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

// Fuentes
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// ✅ Viewport
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// ✅ Metadata global
// Host canónico: sin www. Las páginas definen alternates.canonical y openGraph.url
// relativos (se resuelven con metadataBase). og:image: /og.png (1200x630, public/). Cada página con openGraph propio la repite (Next no la hereda).
export const metadata: Metadata = {
  metadataBase: new URL("https://davidlopezdev.com.ar"),
  title: {
    default: "David Lopez Dev | Desarrollador full-stack",
    template: "%s | David Lopez Dev",
  },
  description:
    "Desarrollador full-stack en Mendoza, Argentina. Del modelo de datos a la interfaz: React, Next.js, TypeScript, FastAPI y PostgreSQL.",
  keywords: [
    "Desarrollador",
    "Full-Stack",
    "React",
    "Next.js",
    "TypeScript",
    "FastAPI",
    "PostgreSQL",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "David Lopez Dev | Desarrollador full-stack",
    description:
      "Del modelo de datos a la interfaz: proyectos reales con React, Next.js, TypeScript, FastAPI y PostgreSQL.",
    siteName: "David Lopez Dev",
    locale: "es_AR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "David López, desarrollador full-stack" }],
    type: "website",
  },
  // Sin title/description: X cae a los og:* de cada página.
  twitter: {
    card: "summary_large_image",
    creator: "@dlopezmathez",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "David López",
              jobTitle: "Desarrollador full-stack",
              url: "https://davidlopezdev.com.ar",
              image: "https://davidlopezdev.com.ar/android-chrome-192x192.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mendoza",
                addressCountry: "AR",
              },
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "FastAPI",
                "PostgreSQL",
                "Firebase",
              ],
              sameAs: [
                "https://www.linkedin.com/in/david-lopez-mathez/",
                "https://github.com/cubo1991",
                "https://twitter.com/dlopezmathez",
              ],
            }),
          }}
        />
      </head>
      <body
        className={` ${spaceGrotesk.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
