export interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Directorio empresarial navegable",
    description:
      "Aplicación con navegación fluida entre perfiles de empresas, UI profesional, transiciones suaves y estructura modular. Ideal para directorios escalables. Proyecto: BernabeuAsociados.",
    link: "https://comunidadbya.com.ar/",
  },
  {
    title: "Landing técnica con diseño responsivo",
    description:
      "Landing page con layout adaptable, jerarquía visual clara y componentes reutilizables. Animaciones suaves y estructura lista para integrar en proyectos técnicos. Proyecto: allNewCosmicapp.",
    link: "https://all-new-cosmicapp.vercel.app/",
  },
  {
    title: "Selector visual con lógica condicional",
    description:
      "Interfaz interactiva para selección de perfiles con lógica personalizada, animaciones suaves y diseño modular. Proyecto: starTrekSelector.",
    link: "https://youtube.com/shorts/hiL-PsmX_Rk",
  },
  {
    title: "App del clima con consumo de API",
    description:
      "Aplicación que muestra el clima actual usando una API externa. Manejo de estados, diseño responsivo y estructura clara para proyectos informativos. Proyecto: WeatherApp.",
    link: "https://youtu.be/UpU9lYdXyYM",
  },
  {
    title: "Filler de pdf para Pokemon VGC",
    description:
      "Aplicación para rellenar PDFs de torneos de Pokemon VGC. Interfaz intuitiva y generación de documentos listos para imprimir. Proyecto: PokemonVGC-Filler.",
    link: "https://pokefiller-web.vercel.app/",
  }
];

export default projects;
