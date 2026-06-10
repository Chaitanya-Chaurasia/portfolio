export const TABS = ["intro", "work", "blog"] as const;
export type Tab = (typeof TABS)[number];

export const TAB_LABELS: Record<Tab, string> = {
  intro: "intro",
  work: "work",
  blog: "blog",
};

export function isTab(s: string): s is Tab {
  return (TABS as readonly string[]).includes(s);
}
