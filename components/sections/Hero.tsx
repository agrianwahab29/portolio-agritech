"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { profile } from "@/data/profile";
import { ArrowDown, Download, Mail, Github, Linkedin, ArrowRight } from "lucide-react";

const techPills = ["Next.js", "TypeScript", "GSAP", "Tailwind", "Laravel"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-h='badge']", { opacity: 0, y: 16, duration: 0.5 }, 0.1)
        .from("[data-h='name']", { opacity: 0, y: 24, duration: 0.7 }, 0.2)
        .from("[data-h='role']", { opacity: 0, y: 20, duration: 0.5 }, 0.4)
        .from("[data-h='desc']", { opacity: 0, y: 16, duration: 0.5 }, 0.55)
        .from("[data-h='cta'] > *", {
          opacity: 0, y: 14, stagger: 0.08, duration: 0.45, ease: "back.out(1.4)",
        }, 0.7)
        .from("[data-h='social'] > *", {
          opacity: 0, y: 10, stagger: 0.06, duration: 0.4,
        }, 0.85)
        .from("[data-h='visual']", { opacity: 0, y: 30, scale: 0.96, duration: 0.8 }, 0.5)
        .from("[data-h='pill']", {
          opacity: 0, scale: 0.7, stagger: 0.06, duration: 0.45, ease: "back.out(1.6)",
        }, 0.9)
        .from("[data-h='scroll']", { opacity: 0, duration: 0.5 }, 1.3);
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-grid pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-1" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-radial-2" aria-hidden />

      <Container className="relative z-10 py-12 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Left: copy */}
          <div className="max-w-xl">
            <div
              data-h="badge"
              className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-fg-secondary"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
              </span>
              Open to opportunities
            </div>

            <h1
              data-h="name"
              className="mt-5 font-heading text-[2.75rem] font-extrabold leading-[1.05] tracking-tight text-fg-primary text-balance sm:text-6xl lg:text-7xl"
            >
              <span className="gradient-text">{profile.name}</span>
            </h1>

            <p data-h="role" className="mt-4 text-lg font-medium text-fg-secondary md:text-xl">
              {profile.headline}
            </p>

            <p data-h="desc" className="mt-3 max-w-md text-[15px] leading-relaxed text-fg-muted text-pretty md:text-base">
              {profile.bioShort}
            </p>

            <div data-h="cta" className="mt-7 flex flex-wrap gap-3">
              <MagneticButton>
                <Button href="/projects" size="lg">
                  View Projects
                  <ArrowRight size={17} />
                </Button>
              </MagneticButton>
              <Button href={profile.cvUrl} variant="secondary" size="lg" download>
                <Download size={17} />
                Download CV
              </Button>
            </div>

            <div data-h="social" className="mt-6 flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-fg-muted">Connect</span>
              <span className="h-px w-6 bg-line" aria-hidden />
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="text-fg-muted transition-colors hover:text-brand">
                <Linkedin size={19} />
              </a>
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="text-fg-muted transition-colors hover:text-brand">
                  <Github size={19} />
                </a>
              )}
              <a href={`mailto:${profile.email}`} aria-label="Email"
                className="text-fg-muted transition-colors hover:text-brand">
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* Right: code card */}
          <div data-h="visual" className="relative">
            <div className="glass overflow-hidden rounded-card shadow-lg">
              <div className="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-warn/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-ok/70" />
                <span className="ml-2 font-mono text-xs text-fg-muted">agrian.profile.ts</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-fg-secondary">
<code><span className="text-fg-muted">const</span> <span className="text-brand-text">agrian</span> = {"{"}
  role: <span className="text-ok">&quot;Web Developer&quot;</span>,
  focus: [<span className="text-ok">&quot;Web&quot;</span>, <span className="text-ok">&quot;Sistem Info&quot;</span>],
  projects: <span className="text-warn">4</span>, publications: <span className="text-warn">5</span>,
  gpa: <span className="text-warn">3.80</span>, internship: <span className="text-ok">&quot;Kemenaker&quot;</span>,
  available: <span className="text-brand-text">true</span>,
{"}"};</code>
              </pre>
            </div>
            {/* Floating tech pills */}
            <div className="mt-4 flex flex-wrap gap-2">
              {techPills.map((p) => (
                <span
                  key={p}
                  data-h="pill"
                  className="glass rounded-full px-3 py-1 font-mono text-xs text-brand-text"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div data-h="scroll" className="absolute bottom-6 left-1/2 -translate-x-1/2" aria-hidden>
        <ArrowDown size={18} className="animate-scroll-hint text-fg-muted" />
      </div>
    </section>
  );
}
