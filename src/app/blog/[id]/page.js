
    import { notFound } from "next/navigation";
    import {getPostBySlug } from "../../data/sheets";
    import ReactMarkdown from "react-markdown";
    
    import rehypeRaw from "rehype-raw";


    export default async function PostPage({ params }) {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.id);
    if (!post) return notFound();
    console.log(resolvedParams);
    

     return (
    <div className="prose prose-invert max-w-none blog-post">
      <h1>{post.title}</h1>
      <p>{post.date} - {post.author}</p>
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {post.content}
      </ReactMarkdown>
    </div>
  );
    }
