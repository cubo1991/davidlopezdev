import type { MetadataRoute } from "next";
import { getAllPosts } from "./data/sheets";

const BASE = "https://davidlopezdev.com.ar";
// Fecha fija: actualizarla a mano cuando cambie el contenido (new Date() cambiaba en cada build).
const LAST_MOD = new Date("2026-09-21");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: LAST_MOD, changeFrequency: "yearly", priority: 1 },
    { url: `${BASE}/proyectos`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/servicios`, lastModified: LAST_MOD, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/contacto`, lastModified: LAST_MOD, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/blog`, lastModified: LAST_MOD, changeFrequency: "weekly", priority: 0.6 },
  ];

  // Si la hoja de posts no responde, el sitemap sale igual con las páginas fijas.
  try {
    const posts = await getAllPosts();
    for (const p of posts) {
      const d = new Date(p.date);
      pages.push({
        url: `${BASE}/blog/${p.slug}`,
        lastModified: isNaN(d.getTime()) ? LAST_MOD : d,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  } catch {
    // ponytail: sin log; si querés saber por qué faltan los posts, mirá getAllPosts.
  }

  return pages;
}
