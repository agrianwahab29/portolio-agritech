import Link from "next/link";
import { Mail, Linkedin, MessageCircle, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

const iconMap = { Mail, Linkedin, MessageCircle, Github };

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-bg-secondary/40">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="font-heading text-base font-bold text-fg-primary">{profile.brand}</h3>
            <p className="text-sm text-fg-muted">{profile.tagline}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-fg-muted">
              Navigate
            </h4>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fg-secondary transition-colors hover:text-brand-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-fg-muted">
              Connect
            </h4>
            <ul className="space-y-1.5">
              {socials.map((s) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap];
                return (
                  <li key={s.platform}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-fg-secondary transition-colors hover:text-brand-text"
                    >
                      {Icon ? <Icon size={13} /> : null}
                      {s.platform}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-line pt-5 md:flex-row md:items-center">
          <p className="text-xs text-fg-muted">
            © {year} {profile.brand} — Agrian Wahab.
          </p>
          <p className="text-xs text-fg-muted">
            Built with Next.js, GSAP, and Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
}
