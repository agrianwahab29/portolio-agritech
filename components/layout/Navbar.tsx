"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
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
    const handler = () => setScrolled(window.scrollY > 50);
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
          ? "border-b border-white/10 bg-bg-primary/80 backdrop-blur-glass py-3"
          : "bg-transparent py-6",
      )}
    >
      <nav
        className="mx-auto flex max-w-container items-center justify-between px-6 md:px-12"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-heading text-lg font-bold tracking-tight text-text-primary transition-colors hover:text-accent-blue"
        >
          {profile.brand}
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active
                      ? "text-accent-blue"
                      : "text-text-secondary hover:text-text-primary",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-button bg-gradient-hero px-5 py-2.5 text-sm font-semibold text-bg-primary transition-all hover:shadow-glow-blue active:scale-[0.98]"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-button text-text-primary lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden">
          <div className="border-t border-white/10 bg-bg-primary/95 backdrop-blur-glass">
            <ul className="space-y-1 px-6 py-6">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-button px-4 py-3 text-base font-medium transition-colors",
                        active
                          ? "bg-accent-blue/10 text-accent-blue"
                          : "text-text-secondary hover:bg-white/5",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-4">
                <a
                  href={profile.cvUrl}
                  download
                  className="flex w-full items-center justify-center gap-2 rounded-button bg-gradient-hero px-5 py-3 text-sm font-semibold text-bg-primary"
                >
                  <Download size={16} />
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
