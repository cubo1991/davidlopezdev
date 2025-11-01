import Contact from "../sections/Contact";

export const metadata = {
  title: "Contacto | David López",
  description: "Ponte en contacto conmigo para consultas y colaboraciones.",
  openGraph: {
    title: "Contacto | David López",
    description: "Ponte en contacto conmigo para consultas y colaboraciones.",
    url: "https://www.davidlopezdev.com.ar/contacto",
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


export default function ContactPage() {
  return <Contact/>;
}