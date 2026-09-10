import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inicio | David López",
  description: "Desarrollador Full-Stack y Consultor Técnico. Soluciones técnicas con impacto real, desde DNS hasta UI modular, todo listo para producción.",
  openGraph: {
    title: "Inicio | David López",
    description: "Desarrollador Full-Stack y Consultor Técnico especializado en soluciones técnicas escalables y modulares.",
    url: "https://www.davidlopezdev.com.ar/",
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

export default function Home() {
  return (
    <section id="home">
      <h1>David Lopez Dev</h1>
      <p>Desarrollador Full-Stack | Consultor Técnico</p>
      <p>
        Soluciones técnicas con impacto real. Desde DNS hasta UI modular, todo listo para producción.
      </p>
      {/* Los dos botones van pegados a propósito (decisión de David, 2026-09-10).
          No agregarles separación: no es un resto de las clases de Tailwind que se sacaron. */}
      <div>
        <Link href="/servicios" className="btn-primary">
          Ver Servicios
        </Link>
        <Link href="/contacto" className="btn-primary">
          Contactame
        </Link>
      </div>
    </section>
  );
}
