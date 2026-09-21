import type { Metadata } from "next";
import Projects from "../sections/Projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description: "Proyectos reales con stack, rol y enlaces: Next.js, React, TypeScript, FastAPI, PostgreSQL y Firebase.",
  alternates: { canonical: "/proyectos" },
  openGraph: {
    title: "Proyectos | David Lopez Dev",
    description: "Proyectos reales con stack, rol y enlaces: Next.js, React, TypeScript, FastAPI, PostgreSQL y Firebase.",
    url: "/proyectos",
    siteName: "David Lopez Dev",
    locale: "es_AR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "David López, desarrollador full-stack" }],
    type: "website",
  },
};

export default function ProjectsPage() {
  return <Projects/>;
}
