import type { Metadata } from "next";
import { Suspense } from "react";
import Contact from "../sections/Contact";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escribime para hablar de un puesto, un proyecto o una colaboración.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | David Lopez Dev",
    description: "Escribime para hablar de un puesto, un proyecto o una colaboración.",
    url: "/contacto",
    siteName: "David Lopez Dev",
    locale: "es_AR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "David López, desarrollador full-stack" }],
    type: "website",
  },
};


export default function ContactPage() {
  // Suspense: Contact lee ?de=comercios con useSearchParams y sin esto Next no puede prerenderizar la página.
  return (
    <Suspense>
      <Contact />
    </Suspense>
  );
}
