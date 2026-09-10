import Link from "next/link";

// ponytail: 3 tarjetas fijas de copy, definidas acá mismo. Si algún día salen de un CMS
// o pasan a ser más de 5, mover a src/app/data/.
const ejemplos = [
  {
    titulo: "Dejá de anotar los turnos en un cuaderno",
    rubros: "Peluquerías, barberías, consultorios, spas",
    resuelve:
      "Tus clientes reservan solos y les llega el recordatorio. Vos ves la agenda del día de un vistazo.",
  },
  {
    titulo: "Saber qué te queda sin contar las cajas",
    rubros: "Kioscos, despensas, ferreterías, almacenes",
    resuelve:
      "Control de stock con aviso cuando algo se está por acabar.",
  },
  {
    titulo: "Que te pidan por WhatsApp sin explicar los precios diez veces",
    rubros: "Venta por redes, comercios sin local",
    resuelve:
      "Catálogo con fotos y precios, y un botón que arma el pedido en WhatsApp solo.",
  },
];

export default function SolucionesComercios() {
  return (
    <section id="comercios" className="comercios-section">
      <div className="container">
        <h2 className="comercios-title">Soluciones para Comercios</h2>

        <p className="comercios-bajada">
          Sistemas simples y a medida para que tu negocio deje atrás el cuaderno y el Excel.
        </p>

        <p className="comercios-intro">
          Trabajo con comercios chicos y medianos para digitalizar lo que hoy se hace a mano: turnos,
          stock, pedidos, fichas de clientes. Cada sistema se arma a la medida del negocio,
          arrancando simple, y sumando funciones cuando el comercio crece. Sin pagar de más por cosas
          que no vas a usar.
        </p>

        <div className="services-grid comercios-grid">
          {ejemplos.map(({ titulo, rubros, resuelve }) => (
            <div key={titulo} className="service-card comercios-card">
              <h3>{titulo}</h3>
              <p className="comercios-rubros">{rubros}</p>
              <p>{resuelve}</p>
            </div>
          ))}
        </div>

        <div className="comercios-cta">
          <Link href="/contacto?de=comercios" className="comercios-btn">
            Contame qué necesita tu negocio
          </Link>
        </div>
      </div>
    </section>
  );
}
