import type { Metadata } from "next";
import Services from "../sections/Services";
import SolucionesComercios from "../sections/SolucionesComercios";

export const metadata: Metadata = {
  title: "Qué hago",
  description: "Áreas de trabajo de un desarrollador full-stack: frontend, backend y datos, automatización e IA aplicada, infraestructura y despliegue.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Qué hago | David Lopez Dev",
    description: "Áreas de trabajo de un desarrollador full-stack: frontend, backend y datos, automatización e IA aplicada, infraestructura y despliegue.",
    url: "/servicios",
    siteName: "David Lopez Dev",
    locale: "es_AR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "David López, desarrollador full-stack" }],
    type: "website",
  },
};


export default function ServicesPage() {
  return (
    <>
      <Services />
      <hr className="comercios-separador" />
      <SolucionesComercios />
    </>
  );
}
