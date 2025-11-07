// src/app/blog/[id]/page.js
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../data/sheets";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(p => ({ id: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.id);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt || post.title,
  };
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.id);
  if (!post) return notFound();

  const isMarkdown = !!post.content?.match(/[#*_`]/); 
  return (
    <article className="blog-list">
      <h2>{post.title}</h2>
      <div className="post-item">
        <p>
          <strong>{post.author}</strong> — {post.date}
        </p>
        {post.image_url && (
          <Image
            src={post.image_url}
            alt={post.title}
            width={800}
            height={400}
            className="blog-image"
          />
        )}
        <div className="content">
          {isMarkdown ? (
            <ReactMarkdown>{post.content}</ReactMarkdown>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          )}
        </div>
        {post.tags.length > 0 && (
          <p className="tags">
            Tags: {post.tags.join(" · ")}
          </p>
        )}
      </div>
    </article>
  );
}
