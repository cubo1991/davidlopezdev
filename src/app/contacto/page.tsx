import type { Metadata } from "next";
import { Suspense } from "react";
import Contact from "../sections/Contact";

export const metadata: Metadata = {
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
  // Suspense: Contact lee ?de=comercios con useSearchParams y sin esto Next no puede prerenderizar la página.
  return (
    <Suspense>
      <Contact />
    </Suspense>
  );
}