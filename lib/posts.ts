import postsData from "./posts.json";

type RawPost = {
  slug: string;
  title: string;
  date: string;
  body: string;
  source?: "medium" | "substack";
  url?: string;
  mediumUrl?: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  body: string;
  source: "medium" | "substack";
  url: string;
};

export const posts: Post[] = (postsData as RawPost[])
  .map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    body: p.body,
    source: p.source ?? "medium",
    url: p.url ?? p.mediumUrl ?? "",
  }))
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
