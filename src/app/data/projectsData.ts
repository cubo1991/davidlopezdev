export interface Project {
  title: string;
  /** Qué hace / qué resuelve. Sin métricas que no estén verificadas. */
  description: string;
  stack?: string[];
  role: string;
  link: string;
  /** Texto descriptivo del enlace (qué se va a encontrar del otro lado). */
  linkLabel: string;
}

const ROL = "Diseño y desarrollo full-stack (autor único)";

// Orden: primero los proyectos técnicos más fuertes; los demos chicos al final.
// Stack y descripciones verificados contra el README / package.json de cada repo.
const projects: Project[] = [
  {
    title: "TrackFolio: tracker de postulaciones laborales",
    description:
      "Pipeline Kanban con drag & drop, alertas de seguimiento y reporte de conversión calculado sobre el historial de estados. Multiusuario con JWT y aislamiento de datos por usuario, con tests en backend y frontend. En desarrollo.",
    stack: ["FastAPI", "SQLModel", "PostgreSQL", "Next.js", "TypeScript", "Zustand", "pytest", "Jest"],
    role: ROL,
    link: "https://github.com/cubo1991/trackfolio",
    linkLabel: "Ver código en GitHub",
  },
  {
    title: "CosmicApp: gestión de torneos de la Liga Cosmic Encounter",
    description:
      "Partidas con código compartible, puntaje calculado al finalizar, copas automáticas en ciclos de 10 partidas y estadísticas históricas por jugador.",
    stack: ["Next.js", "TypeScript", "Firebase (Firestore + Auth)", "Zustand", "Tailwind CSS"],
    role: ROL,
    link: "https://cosmicapp2026.vercel.app/",
    linkLabel: "Ver aplicación en producción",
  },
  {
    title: "Directorio empresarial navegable (Bernabeu Asociados)",
    description:
      "Sitio en producción con navegación fluida entre perfiles de empresas, UI profesional y estructura modular.",
    stack: ["Next.js", "Firebase", "Tailwind CSS"],
    role: "Desarrollo completo del sitio",
    link: "https://comunidadbya.com.ar/",
    linkLabel: "Ver sitio en producción",
  },
  {
    title: "Pokefiller: PDF de Team List para Pokémon VGC",
    description:
      "Rellena la hoja 2 de la Team List oficial a partir de un paste de Showdown o pokepast.es y devuelve el PDF listo para imprimir, generado en el navegador.",
    stack: ["Next.js", "TypeScript", "pdf-lib", "Tailwind CSS"],
    role: ROL,
    link: "https://pokefiller-web.vercel.app/",
    linkLabel: "Ver aplicación en producción",
  },
  {
    title: "Selector visual con lógica condicional",
    description:
      "Interfaz interactiva para selección de perfiles con lógica personalizada y animaciones suaves. Proyecto: starTrekSelector.",
    stack: ["JavaScript"],
    role: ROL,
    link: "https://youtube.com/shorts/hiL-PsmX_Rk",
    linkLabel: "Ver demo en video",
  },
  {
    title: "App del clima con consumo de API",
    description:
      "Muestra el clima actual con una API externa, con manejo de estados y diseño responsivo. Proyecto: WeatherApp.",
    role: ROL,
    link: "https://youtu.be/UpU9lYdXyYM",
    linkLabel: "Ver demo en video",
  },
];

export default projects;
