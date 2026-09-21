import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "../data/sheets";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos sobre desarrollo web.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | David Lopez Dev",
    description: "Artículos sobre desarrollo web.",
    url: "/blog",
    siteName: "David Lopez Dev",
    locale: "es_AR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "David López, desarrollador full-stack" }],
    type: "website",
  },
};


export default async function BlogPage() {
  const posts = await getAllPosts();



  return (
    <section style={{ padding: "2rem 1rem", maxWidth: 960, margin: "0 auto" }}>
      <h1>Blog</h1>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {posts.map(p => (
          <li key={p.slug} style={{ marginBottom: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "1rem" }}>
            <h2 style={{ margin: 0 }}>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p style={{ color: "#666", margin: "0.25rem 0" }}>
              <strong>{p.author}</strong> — {p.date}
            </p>
            <p style={{ margin: "0.5rem 0" }}>{p.excerpt}</p>
            {p.tags.length > 0 && (
              <p style={{ fontSize: "0.9rem", color: "#888" }}>
                Tags: {p.tags.join(" · ")}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}