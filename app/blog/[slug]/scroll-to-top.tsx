"use client";

export default function ScrollToTop() {
  return (
    <button
      type="button"
      className="scroll-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      scroll to top ↑
    </button>
  );
}
