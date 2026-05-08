import { posts } from "@/lib/posts";
import HomeClient from "./home-client";

export default function Home() {
  const postsLight = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
  }));
  return <HomeClient posts={postsLight} />;
}
