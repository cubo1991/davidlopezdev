import Image from "next/image";
import Link from "next/link";

export const metadata = {
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
      <h2 className="text-5xl font-bold mb-4">David Lopez Dev</h2>
      <p className="text-xl text-gray-300 mb-6">Desarrollador Full-Stack | Consultor Técnico</p>
      <p className="max-w-xl text-gray-400 mb-8">
        Soluciones técnicas con impacto real. Desde DNS hasta UI modular, todo listo para producción.
      </p>
      <div className="flex gap-4">
        <Link href="/servicios" className="btn-primary  border border-white  text-white px-6 py-2 rounded transition">
          Ver Servicios
        </Link>
        <Link href="/contacto" className="btn-primary border border-white text-white px-6 py-2 rounded transition">
          Contactame
        </Link>
      </div>
    </section>
  );
}
