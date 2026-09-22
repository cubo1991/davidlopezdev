export interface Service {
  title: string;
  description: string;
  stack: string[];
  features: string[];
  /** Proyectos de /proyectos que respaldan el área. */
  proyectos: string;
  icon: JSX.Element;
}

// Áreas de trabajo. Todo lo listado está verificado en el código de los repos de los proyectos
// (README, package.json, render.yaml, compose.yaml). Sin precios, plazos ni métricas.
const services: Service[] = [
  {
    title: "Frontend",
    description:
      "Interfaces con estado global, interacciones complejas y lógica testeada, en React y Next.js.",
    stack: ["React", "Next.js (App Router)", "TypeScript", "Zustand", "Tailwind CSS", "Jest"],
    features: [
      "Tablero Kanban con drag & drop nativo del navegador y actualización optimista con rollback si el servidor rechaza el cambio",
      "Filtros combinables resueltos en el servidor",
      "Generación de PDF en el navegador con pdf-lib",
      "Tests de Jest sobre la lógica del tablero, con la API mockeada",
    ],
    proyectos: "TrackFolio, Pokefiller, CosmicApp",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    ),
  },
  {
    title: "Backend y datos",
    description:
      "APIs con autenticación, modelo de datos multiusuario y tests sobre los casos que importan.",
    stack: ["FastAPI", "SQLModel", "PostgreSQL", "JWT", "pytest", "Firebase (Firestore + Auth)"],
    features: [
      "Autenticación con JWT y control de acceso por rol",
      "Aislamiento de datos entre usuarios",
      "Historial de transiciones de estado y métricas calculadas sobre él",
      "Tests de los casos que tienen que fallar: auth y aislamiento entre usuarios",
    ],
    proyectos: "TrackFolio, CosmicApp, Directorio Bernabeu",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14a9 3 0 0 0 18 0V5"/>
        <path d="M3 12a9 3 0 0 0 18 0"/>
      </svg>
    ),
  },
  {
    title: "Automatización e IA aplicada",
    description:
      "Integración de modelos de lenguaje en flujos de producto, con degradación limpia cuando el servicio no está configurado.",
    stack: ["Python", "FastAPI", "API de Anthropic", "n8n", "Docker"],
    features: [
      "Asistente que analiza el texto de una oferta laboral y sugiere tags de stack y nivel de encaje contra un perfil",
      "Si no hay credenciales, la función no aparece y la app sigue funcionando",
      "Imagen Docker de n8n lista para desplegar en Render",
    ],
    proyectos: "TrackFolio",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="10" x="3" y="11" rx="2"/>
        <circle cx="12" cy="5" r="2"/>
        <path d="M12 7v4"/>
        <path d="M8 16h.01"/>
        <path d="M16 16h.01"/>
      </svg>
    ),
  },
  {
    title: "Infraestructura y despliegue",
    description:
      "Entornos reproducibles y despliegues configurados como código.",
    stack: ["Vercel", "Render", "Docker Compose", "Alembic"],
    features: [
      "Backend desplegable en Render con render.yaml: migraciones con Alembic al arrancar y secretos por variables de entorno",
      "PostgreSQL local con Docker Compose",
      "Aplicaciones Next.js desplegadas en Vercel",
    ],
    proyectos: "TrackFolio, CosmicApp, Pokefiller",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
        <line x1="6" x2="6.01" y1="6" y2="6"/>
        <line x1="6" x2="6.01" y1="18" y2="18"/>
      </svg>
    ),
  },
];

export default services;
