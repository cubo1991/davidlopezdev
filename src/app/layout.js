import { Geist, Geist_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

// Fuentes


const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// ✅ Viewport
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// ✅ Metadata global
export const metadata = {
  metadataBase: new URL("https://davidlopezdev.com.ar"),
  title: {
    default: "David Lopez Dev",
    template: "%s | David Lopez Dev",
  },
  description:
    "Portfolio técnico con impacto real. Desde APIs hasta UI modular.",
  keywords: [
    "Desarrollador",
    "Full-Stack",
    "React",
    "Node.js",
    "Next.js",
    "PostgreSQL",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "David Lopez Dev",
    description:
      "Explora mis proyectos web modulares, escalables y con foco en UX.",
    url: "https://davidlopezdev.com.ar",
    siteName: "David Lopez Dev",
    images: [
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "Logo de David López Dev",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Lopez Dev",
    description:
      "Portfolio técnico con impacto real. Desde APIs hasta UI modular.",
    images: ["/android-chrome-192x192.png"],
    creator: "@dlopezmathez",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "David Lopez Dev",
              url: "https://www.davidlopezdev.com.ar",
              logo: "https://www.davidlopezdev.com.ar/android-chrome-192x192.png",
              sameAs: [
                "https://www.linkedin.com/in/david-lopez-mathez/",
                "https://github.com/cubo1991",
                "https://twitter.com/dlopezmathez",
              ],
            }),
          }}
        />
      </head>
      <body
        className={` ${spaceGrotesk.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
