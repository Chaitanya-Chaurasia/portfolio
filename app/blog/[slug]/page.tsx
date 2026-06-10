import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";
import ScrollToTop from "./scroll-to-top";
import SiteNav from "@/app/site-nav";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — chaitanya chaurasia`,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  // posts are sorted newest-first
  const idx = posts.findIndex((p) => p.slug === params.slug);
  const newer = idx > 0 ? posts[idx - 1] : null;
  const older = idx < posts.length - 1 ? posts[idx + 1] : null;

  return (
    <div className="shell">
      <SiteNav />

      <main className="page">
        <h1 className="name lower">{post.title}</h1>
        <p className="post-date">{post.date}</p>

        <div className="post-nav">
          {older ? (
            <Link href={`/blog/${older.slug}`}>← back</Link>
          ) : (
            <span className="disabled">← back</span>
          )}
          <Link href="/#blog">home</Link>
          <a href={post.url} target="_blank" rel="noreferrer">
            read on {post.source}
          </a>
          {newer ? (
            <Link href={`/blog/${newer.slug}`}>next →</Link>
          ) : (
            <span className="disabled">next →</span>
          )}
        </div>

        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        <ScrollToTop />
      </main>
    </div>
  );
}
