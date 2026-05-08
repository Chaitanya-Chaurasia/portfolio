"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const TABS = ["intro", "work", "interests", "blog"] as const;
type Tab = (typeof TABS)[number];

type PostMeta = { slug: string; title: string; date: string };

function isTab(s: string): s is Tab {
  return (TABS as readonly string[]).includes(s);
}

export default function HomeClient({ posts }: { posts: PostMeta[] }) {
  const [tab, setTab] = useState<Tab>("intro");

  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.slice(1);
      setTab(isTab(h) ? h : "intro");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return (
    <div className="shell">
      <nav className="nav-top">
        {TABS.map((t) => (
          <a key={t} href={`#${t}`} className={tab === t ? "active" : ""}>
            {t}
          </a>
        ))}
      </nav>

      <main className="page">
        <h1 className="name">chaitanya chaurasia</h1>

        {tab === "intro" && (
          <section>
            <h2 className="section-head">intro</h2>
            <p>
              hi, i&apos;m chaitanya chaurasia. i work on wifi &amp; embedded
              systems at amazon.
            </p>
            <p>
              previously: idexx, b:side capital &amp; funds, warp.dev, mosaic, y
              combinator and early-stage startups.
            </p>
          </section>
        )}

        {tab === "work" && (
          <section>
            <h2 className="section-head">work</h2>
            <p>things i&apos;ve built.</p>
            <p>etl pipelines for custom ml models.</p>
            <p>websites scaling to 100k monthly users.</p>
            <p>internal apis for wireless.</p>
            <p>crms handling $100m+ of assets and capital data.</p>
            <p>debugged kernels and migrated legacy codebases.</p>
          </section>
        )}

        {tab === "interests" && (
          <section>
            <h2 className="section-head">interests</h2>
            <p>
              low-level design and system design — how things actually work
              underneath the api surface.
            </p>
            <p>
              lately reading the raft paper, picking apart etcd&apos;s mvcc
              implementation, and learning how reverse proxies handle
              backpressure and load shedding.
            </p>
            <p>the boring infrastructure that nothing works without.</p>
          </section>
        )}

        {tab === "blog" && (
          <section>
            <h2 className="section-head">blog</h2>
            <p>writing on physics, software, and whatever else.</p>
            {posts.map((p) => (
              <p key={p.slug}>
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>{" "}
                <span className="post-date">· {p.date}</span>
              </p>
            ))}
          </section>
        )}

        <footer className="foot">
          <div className="foot-links">
            <a href="mailto:chaitanyalvis@gmail.com">email</a>
            <a
              href="https://github.com/Chaitanya-Chaurasia"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
            <a
              href="https://linkedin.com/in/chai-t"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
            <a href="/Resume_Chaitanya.pdf" target="_blank" rel="noreferrer">
              resume
            </a>
          </div>
          <span>© 2026 chaitanya chaurasia</span>
        </footer>
      </main>
    </div>
  );
}
