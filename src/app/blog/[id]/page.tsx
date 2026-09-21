import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug } from "../../data/sheets";
import ReactMarkdown from "react-markdown";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostBySlug(id);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt || post.title,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.id);
  if (!post) return notFound();

  // Sin rehype-raw: el HTML crudo dentro del markdown no se renderiza (el contenido viene de una hoja pública).
  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p>{post.date} - {post.author}</p>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}
