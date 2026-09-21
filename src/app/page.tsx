import type { Metadata } from "next";
import Link from "next/link";

// Sin title: usa el default del layout ("David Lopez Dev | Desarrollador full-stack").
export const metadata: Metadata = {
  description: "Desarrollador full-stack en Mendoza, Argentina. Del modelo de datos a la interfaz: React, Next.js, TypeScript, FastAPI y PostgreSQL.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "David Lopez Dev | Desarrollador full-stack",
    description: "Del modelo de datos a la interfaz: proyectos reales con React, Next.js, TypeScript, FastAPI y PostgreSQL.",
    url: "/",
    siteName: "David Lopez Dev",
    locale: "es_AR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "David López, desarrollador full-stack" }],
    type: "website",
  },
};

export default function Home() {
  return (
    <section id="home">
      <h1>Del dominio a la interfaz, un solo desarrollador a cargo.</h1>
      <p>Desarrollador full-stack | Mendoza, Argentina</p>
      <p>
        React, Next.js y TypeScript en el frontend; FastAPI y PostgreSQL en el backend; Firebase cuando el proyecto lo pide. Proyectos reales, con el código a la vista.
      </p>
      {/* Los dos botones van pegados a propósito (decisión de David, 2026-09-10).
          No agregarles separación: no es un resto de las clases de Tailwind que se sacaron. */}
      <div>
        <Link href="/proyectos" className="btn-primary">
          Ver proyectos reales
        </Link>
        <Link href="/contacto" className="btn-primary">
          Contactame
        </Link>
      </div>
    </section>
  );
}
