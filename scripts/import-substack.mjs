// Imports posts from the Substack RSS feed into lib/posts.json.
// Run: node scripts/import-substack.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const FEED = "https://iamchai.substack.com/feed";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const postsPath = join(root, "lib", "posts.json");

function cdata(block, tag) {
  const m = block.match(
    new RegExp(`<${tag}>\\s*(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))\\s*</${tag}>`)
  );
  return m ? (m[1] ?? m[2] ?? "").trim() : "";
}

// Drop Substack's injected subscribe widgets so the body renders clean.
function clean(html) {
  return html
    .replace(/<div class="subscription-widget-wrap-editor"[\s\S]*?<\/form><\/div><\/div>/g, "")
    .replace(/<div class="subscription-widget-wrap"[\s\S]*?<\/div><\/div>/g, "")
    .trim();
}

function slugFromLink(link) {
  const m = link.match(/\/p\/([^/?#]+)/);
  return m ? m[1] : link.split("/").pop();
}

const xml = await fetch(FEED).then((r) => r.text());
const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);

const imported = [];
for (const item of items) {
  const title = cdata(item, "title");
  const body = clean(cdata(item, "content:encoded"));
  if (!body || title === "Coming soon") continue; // skip placeholders
  const link = cdata(item, "link");
  imported.push({
    slug: slugFromLink(link),
    title,
    date: new Date(cdata(item, "pubDate")).toISOString().slice(0, 10),
    source: "substack",
    url: link,
    body,
  });
}

const existing = JSON.parse(readFileSync(postsPath, "utf8"));
const bySlug = new Map(existing.map((p) => [p.slug, p]));
for (const p of imported) bySlug.set(p.slug, p);

const merged = [...bySlug.values()].sort((a, b) => b.date.localeCompare(a.date));
writeFileSync(postsPath, JSON.stringify(merged, null, 2) + "\n");
console.log(`imported ${imported.length} substack post(s); ${merged.length} total`);
