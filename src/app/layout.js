import { Geist, Geist_Mono } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";


// Carga de fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};


//Metadata
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
    creator: "@dlopezmathez", // opcional
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
