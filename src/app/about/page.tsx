import type { Metadata } from "next";
import About from "../sections/About";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: "Desarrollador full-stack en Mendoza, Argentina. Mi experiencia en desarrollo web, frontend y backend.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Sobre mí | David Lopez Dev",
    description: "Desarrollador full-stack en Mendoza, Argentina. Mi experiencia en desarrollo web, frontend y backend.",
    url: "/about",
    siteName: "David Lopez Dev",
    locale: "es_AR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "David López, desarrollador full-stack" }],
    type: "website",
  },
};

export default function AboutPage() {
  return <About/>;
}
