import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-4 py-10 text-center text-sm text-muted">
      <Link
        href="/#contact"
        className="text-text underline decoration-line underline-offset-4 transition-colors hover:decoration-accent-2"
      >
        Contact
      </Link>{" "}
      · Built to feel beautiful, personal, and alive.
    </footer>
  );
}
