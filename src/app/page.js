import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section id="home">
      <h1 className="text-5xl font-bold mb-4">David Lopez Dev</h1>
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
