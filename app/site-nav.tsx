"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { TABS, TAB_LABELS } from "./tabs";

// Single navbar shared by the home page and blog post pages.
// On the home page the active tab follows the url hash; inside /blog the
// "blog" tab stays highlighted.
export default function SiteNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash.slice(1));
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const active = pathname?.startsWith("/blog") ? "blog" : hash || "intro";

  return (
    <nav className="nav-top">
      {TABS.map((t) => (
        <a key={t} href={`/#${t}`} className={active === t ? "active" : ""}>
          {TAB_LABELS[t]}
        </a>
      ))}
    </nav>
  );
}
