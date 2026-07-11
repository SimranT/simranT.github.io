"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/travel", label: "Travel" },
  { href: "/shop", label: "Shop" },
  { href: "/analytics", label: "Analytics" },
];

export function SiteNav() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu when the route changes. Derived during render
  // (not in an effect) per https://react.dev/learn/you-might-not-need-an-effect
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    // One-time sync from the inline bootstrap script in layout.tsx, which
    // already set data-theme on <html> before hydration to avoid a flash.
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("theme", next);
  }

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname?.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto max-w-5xl px-4 py-3">
        <div className="glass flex w-full items-center justify-between rounded-full px-3 py-2">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold tracking-tight focus-visible:outline-none"
          >
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-accent to-accent-2"
            />
            Simran&apos;s Space
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 sm:flex"
          >
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm text-muted transition-colors duration-200 hover:text-text",
                    active && "text-text",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-surface-strong"
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="flex h-11 w-11 items-center justify-center rounded-full text-text transition-transform duration-200 hover:-translate-y-0.5 hover:bg-surface active:scale-95"
            >
              {theme === "dark" ? (
                <Sun size={18} aria-hidden="true" />
              ) : (
                <Moon size={18} aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full text-text transition-transform duration-200 hover:-translate-y-0.5 hover:bg-surface active:scale-95 sm:hidden"
            >
              {menuOpen ? (
                <X size={18} aria-hidden="true" />
              ) : (
                <Menu size={18} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-nav-panel"
              aria-label="Primary"
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -8, height: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="card mt-2 overflow-hidden p-2 sm:hidden"
            >
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-[15px] text-muted transition-colors duration-150 hover:bg-surface hover:text-text",
                      active && "bg-surface-strong text-text",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
