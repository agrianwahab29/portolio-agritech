import Link from "next/link";
import { Mail, Linkedin, MessageCircle, Github } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

const iconMap = {
  Mail,
  Linkedin,
  MessageCircle,
  Github,
};

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Publications", href: "/publications" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-white/10 bg-bg-secondary">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="font-heading text-xl font-bold text-text-primary">
              {profile.brand}
            </h3>
            <p className="text-sm text-text-muted">{profile.tagline}</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Navigate
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Connect
            </h4>
            <ul className="space-y-2">
              {socials.map((s) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap];
                return (
                  <li key={s.platform}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-blue"
                    >
                      {Icon ? <Icon size={14} /> : null}
                      {s.platform}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-text-muted">
            &copy; {year} {profile.brand} — Agrian Wahab. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            Built with Next.js, GSAP, and Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  );
}
