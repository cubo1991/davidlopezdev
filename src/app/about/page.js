import About from "../sections/About";

export const metadata = {
  title: "Sobre mí | David López",
  description: "Conoce más sobre mí y mi experiencia en desarrollo web.",
  openGraph: {
    title: "Sobre mí | David López",
    description: "Conoce más sobre mí y mi experiencia en desarrollo web.",
    url: "https://www.davidlopezdev.com.ar/about",
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


export default function AboutPage() {
  return <About/>;
}