"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SiteNav from "./site-nav";
import { type Tab, isTab } from "./tabs";


type PostMeta = { slug: string; title: string; date: string };

const PREVIOUS = [
  {
    name: "mosaic",
    url: "https://mosaic.so/",
    role: "founding team",
    detail: (
      <>
        ui/ux for canvas-based agentic video editing, collaborative editing cx (ensuring consistency via{" "}
        <a
          href="https://en.wikipedia.org/wiki/Operational_transformation"
          target="_blank"
          rel="noreferrer"
        >
          ot
        </a>
        ), payment &amp; billing infras, apis for automated
        content pipelines, social media-based content engines + scaling, export compatiblity to adobe &amp; davinci, and ai
        agents for motion graphics.
      </>
    ),
  },
  {
    name: "b:side capital & funds",
    url: "https://bside.org/bside-assist",
    role: "software engineer",
    detail: (
      <>
        infra and scaling crm for  <a
          href="https://en.wikipedia.org/wiki/Small_and_medium_enterprises"
          target="_blank"
          rel="noreferrer"
        >
          smbs
        </a> taking care of data modelling, i/o concurrency reconciliation, api
        design, webhooks, ui/ux, cognitive inference from business finance data (via{" "}
        <a href="https://plaid.com" target="_blank" rel="noreferrer">
          plaid
        </a>
        ), anomaly detection, security.
      </>
    ),
  },
  {
    name: "idexx",
    url: "https://www.idexx.com",
    role: "embedded software intern",
    detail: (
      <>
        apis for wireless instrument operations and prognostics (
        <a
          href="https://www.idexx.com/en/veterinary/analyzers/catalyst-dx-chemistry-analyzer/"
          target="_blank"
          rel="noreferrer"
        >
          c-dx
        </a>{" "}
        and{" "}
        <a
          href="https://www.idexx.com/en/veterinary/analyzers/catalyst-one-chemistry-analyzer/"
          target="_blank"
          rel="noreferrer"
        >
          c-one
        </a>
        ), scheduling algorithms (round robin) to cut wlan-based operation latency,
        system-level priority queues for resource allocation.
      </>
    ),
  },
  {
    name: "indian institute of technology, delhi",
    url: "https://home.iitd.ac.in",
    role: "ml research intern",
    detail: (
      <>
        <a
          href="https://en.wikipedia.org/wiki/Graph_neural_network"
          target="_blank"
          rel="noreferrer"
        >
          gnn
        </a>{" "}
        modeling of the uk power network as a weighted graph (generators,
        substations, transmission edges) for topology-aware power optimization (by ~25%),
        building random tree classifiers for parameter severity ranking and
        attempting an{" "}
        <a
          href="https://en.wikipedia.org/wiki/Linear_programming"
          target="_blank"
          rel="noreferrer"
        >
          lp
        </a>{" "}
        approach for transmission-constrained dispatch (yielding +35% generation throughput).
      </>
    ),
  },
  {
    name: "freelancing",
    url: "",
    role: "",
    detail: (
      <>
        helping early-stage (
        <a href="https://www.ycombinator.com" target="_blank" rel="noreferrer">
          yc
        </a>{" "}
        and non-yc) startups with design, infra, cloud scaling, improving cx,
        going 0 to 1, scaling from 1 to ~1 million and driving revenue growth
        campaigns.
      </>
    ),
  },
] as const;

export default function HomeClient({ posts }: { posts: PostMeta[] }) {
  const [tab, setTab] = useState<Tab>("intro");
  const [clock, setClock] = useState("");

  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.slice(1);
      setTab(isTab(h) ? h : "intro");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="shell">
      <SiteNav />

      <main className="page">
        <h1 className="name">chaitanya chaurasia (OR chai)</h1>

        {tab === "intro" && (
          <section>
            <p>
              i work at{" "}
              <span className="semi">
                <a href="https://eero.com" target="_blank" rel="noreferrer">
                  eero
                </a>{" "}
                (amazon)
              </span>
              , mainly writing software (and semantics) for{" "}
              <span className="semi">mesh wifi</span>.
            </p>
            <p>
              i&apos;ve a patent for reactively handling <a href="https://en.wikipedia.org/wiki/Additive_white_Gaussian_noise" target="_blank" rel="noreferrer">
                awgn interference</a> to improve mesh stablility on the 6ghz eero fleet, reducing radio stalls &amp; cutting ~1 million per-day noise events down to ~10,000. 
            </p>
            <h2 className="section-head">previously @</h2>
            <ul className="prev-list">
              {PREVIOUS.map((p) => (
                <li key={p.name} className="prev-item">
                  <div className="prev-name">
                    {p.role && <span>{p.role} at </span>}
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noreferrer">
                        {p.name}
                      </a>
                    ) : (
                      p.name
                    )}
                  </div>
                  <div className="prev-role">{p.detail}</div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {tab === "work" && (
          <section>
            <p>
              some part of me deeply cares about making tech intuitive for an average tom. i regularly see so many complicated products with even more complicated websites and nom-de-guerres, and despite me being technical, it feels
              like a burden to go through them and figure out what they do. then there&apos;s chatgpt, supabase, stripe.
              i resonate with the latter; simple cx, intuitive &amp; impactful.
            </p>
            <p>
              as an engineer, my reads go in circles around distributed systems, concurrency, autonomous infra, and llms. i usually replicate on localhost so there&apos;s a data packet visualizer for
              http reqs, crdt for autonomous i/o, and a small raft-based pod orchestrator.
            </p>
            <h2 className="section-head">i&apos;ve worked on</h2>
            <ul className="work-list">
              <li>
                api-level{" "}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Idempotency-Key"
                  target="_blank"
                  rel="noreferrer"
                >
                  idempotency keys
                </a>{" "}
                cached on redis for safe retries on non-idempotent fastapi endpoints for upto ~10k POST hits/sec.
              </li>
              <li>
                <a
                  href="https://relay.dev/graphql/connections.htm"
                  target="_blank"
                  rel="noreferrer"
                >
                cursor-based pagination
                </a>{" "}
                across postgres (which is non-market standard) and graphql for stable iteration under
                concurrent writes.
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Back_pressure"
                  target="_blank"
                  rel="noreferrer"
                >
                  backpressured
                </a>{" "}
                async transcode pipeline in python on redis streams, with{" "}
                <a
                  href="https://kafka.apache.org/documentation/#semantics"
                  target="_blank"
                  rel="noreferrer"
                >
                  at-least-once delivery
                </a>{" "}
                and{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Idempotence"
                  target="_blank"
                  rel="noreferrer"
                >
                  idempotent
                </a>{" "}
                workers keyed on segment identity, for video-streaming.
              </li>
              <li>
                postgres optimization in python via sqlalchemy +{" "}
                <a
                  href="https://www.pgbouncer.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  pgbouncer
                </a>{" "}
                pooling,{" "}
                <a
                  href="https://github.com/graphql/dataloader"
                  target="_blank"
                  rel="noreferrer"
                >
                  n+1
                </a>{" "}
                and bulk-write query rewriting, and{" "}
                <a
                  href="https://www.postgresql.org/docs/current/sql-explain.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  explain
                </a>
                -driven plan tuning under sustained load (approx. 5-10k reads per minute).
              </li>
              <li>
                <a
                  href="https://en.wikipedia.org/wiki/Finite-state_machine"
                  target="_blank"
                  rel="noreferrer"
                >
                  fsm
                </a>
                -shaped ai agent flows built with langgraph and custom python
                automata for deterministic transitions for post-trade reconciliation and loan approvals.
              </li>
              <li>
                canvas-based ui for collaborative ai agent workflow builder, reconciliation using operational transformation,{" "}
                <a
                  href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching"
                  target="_blank"
                  rel="noreferrer"
                >
                  prompt prefix caching
                </a>{" "}
                to cut <a
                  href="https://www.ibm.com/think/topics/time-to-first-token"
                  target="_blank"
                  rel="noreferrer"
                >
                  ttft
                </a>{" "} on shared system
                context.
              </li>
            </ul>
          </section>
        )}

        {tab === "blog" && (
          <section>
            <p>writing on physics, software, and whatever else.</p>
            {posts.map((p) => (
              <p key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="lower">
                  {p.title}
                </Link>{" "}
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
            <a
              href="https://www.instagram.com/chaitanya_chaurasia/"
              target="_blank"
              rel="noreferrer"
            >
              instagram
            </a>
          </div>
          <span className="foot-meta">
            bay area, ca{clock && <> · {clock}</>}
          </span>
          <span className="foot-meta">© {new Date().getFullYear()} chaitanya chaurasia</span>
        </footer>
      </main>
    </div>
  );
}
