"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "glass border-b py-3 shadow-sm"
          : "bg-transparent py-5",
      )}
    >
      <nav
        className="mx-auto flex max-w-content items-center justify-between px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-heading text-lg font-bold tracking-tight text-fg-primary transition-colors hover:text-brand"
        >
          {profile.brand}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-button px-3.5 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-surface text-brand-text"
                      : "text-fg-muted hover:bg-surface-hover hover:text-fg-primary",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-button bg-gradient-hero px-4 py-2 text-sm font-semibold text-brand-contrast transition-all hover:shadow-glow active:scale-[0.97]"
          >
            <Download size={15} />
            Download CV
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-button text-fg-primary"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t lg:hidden">
          <div className="glass px-6 py-5">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-button px-4 py-3 text-base font-medium transition-colors",
                        active
                          ? "bg-surface text-brand-text"
                          : "text-fg-secondary hover:bg-surface-hover",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-3">
                <a
                  href={profile.cvUrl}
                  download
                  className="flex w-full items-center justify-center gap-2 rounded-button bg-gradient-hero px-5 py-3 text-sm font-semibold text-brand-contrast"
                >
                  <Download size={15} />
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
