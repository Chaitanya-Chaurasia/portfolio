import postsData from "./posts.json";

export type Post = {
  slug: string;
  title: string;
  date: string;
  mediumUrl: string;
  body: string;
};

export const posts: Post[] = (postsData as Post[]).slice().sort(
  (a, b) => b.date.localeCompare(a.date)
);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
