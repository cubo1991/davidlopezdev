import Link from "next/link";
import { getAllPosts } from "../data/sheets";

export const metadata = {
  title: "Blog | David López",
  description: "Ponete en contacto conmigo para consultas y colaboraciones.",
  openGraph: {
    title: "Blog | David López",
    description: "Ponte en blog conmigo para consultas y colaboraciones.",
    url: "https://www.davidlopezdev.com.ar/blog",
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