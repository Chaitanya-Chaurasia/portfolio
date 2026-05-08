import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";

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

  return (
    <div className="shell">
      <nav className="nav-top">
        <Link href="/#intro">intro</Link>
        <Link href="/#work">work</Link>
        <Link href="/#interests">interests</Link>
        <Link href="/#blog">blog</Link>
        <Link href="/#links">links</Link>
      </nav>

      <main className="page">
        <h1 className="name">{post.title}</h1>
        <p className="post-date">{post.date}</p>

        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        <footer className="foot">
          <Link href="/#blog">← all posts</Link>
          <a href={post.mediumUrl} target="_blank" rel="noreferrer">
            on medium
          </a>
        </footer>
      </main>
    </div>
  );
}
