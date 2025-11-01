import Services from "../sections/Services";

export const metadata = {
  title: "Servicios | David López",
  description: "Listado de servicios ofrecidos, incluyendo desarrollo web y consultoría.",
  openGraph: {
    title: "Servicios | David López",
    description: "Explora mis servicios de desarrollo web y consultoría.",
    url: "https://www.davidlopezdev.com.ar/servicios",
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


export default function ServicesPage() {
  return <Services/>;
}