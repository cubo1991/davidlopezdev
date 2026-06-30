import { cache } from "react";
import Papa from "papaparse";

// Cambiá a tu URL CSV publicada
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTrI5oUg3Bn1U6mUWZYlt2jUhvXSq01FqHzqoxw1ciXwzcCBMTpalDBhP9jdnZt3S5XF2OWVJj0ixay/pub?output=csv";

export interface Post {
  slug: string;
  title: string;
  author: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
  status: string;
  image_url: string;
}

type SheetRow = Record<string, string>;

function parseCSV(csvText: string): SheetRow[] {
  const { data } = Papa.parse<SheetRow>(csvText, {
    header: true,
    skipEmptyLines: true,
  });
  return data;
}

export const getAllPosts = cache(async (): Promise<Post[]> => {
  const res = await fetch(SHEET_CSV_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("No se pudo descargar la hoja CSV");
  const csv = await res.text();
  const raw = parseCSV(csv);

  const posts = raw
    .map(r => ({
      slug: r.slug,
      title: r.title,
      author: r.author,
      date: r.date,
      tags: (r.tags || "").split(",").map(t => t.trim()).filter(Boolean),
      excerpt: r.excerpt,
      content: r.content,
      status: r.status,
      image_url: r.image_url,
    }))
    .filter(p => (p.status || "").toLowerCase() === "published");

  return posts;
});

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  return posts.find(p => p.slug === slug) || null;
}
