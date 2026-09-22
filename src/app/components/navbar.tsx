"use client";
import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/about", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="logo">David Lopez Dev</div>

      <button
        className="burger"
        aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="nav-links" aria-label="Principal" className={`links ${open ? "open" : ""}`}>
        {LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="link"
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
