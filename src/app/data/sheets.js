import { cache } from "react";
import Papa from "papaparse";

// Cambiá a tu URL CSV publicada
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTrI5oUg3Bn1U6mUWZYlt2jUhvXSq01FqHzqoxw1ciXwzcCBMTpalDBhP9jdnZt3S5XF2OWVJj0ixay/pub?output=csv";



function parseCSV(csvText) {
  const { data } = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });
  return data;
}

export const getAllPosts = cache(async () => {
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

export async function getPostBySlug(slug) {
  const posts = await getAllPosts();
  return posts.find(p => p.slug === slug) || null;
}
