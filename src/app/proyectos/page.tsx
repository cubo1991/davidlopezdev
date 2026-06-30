import type { Metadata } from "next";
import Projects from "../sections/Projects";


export const metadata: Metadata = {
  title: "Proyectos | David López",
  description: "Listado de proyectos desarrollados con Next.js, React y TypeScript.",
  openGraph: {
    title: "Proyectos | David López",
    description: "Explora mis proyectos web modulares y escalables.",
    url: "https://www.davidlopezdev.com.ar/proyectos",
    siteName: "David López Dev",
    images: [
      {
        url: "/public/favicon.ico",
        width: 192,
        height: 192,
        alt: "Logo de David López Dev",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function ProjectsPage() {
  return <Projects/>;
}
