"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { GradientShift } from "@/components/animations/GradientShift";
import { profile } from "@/data/profile";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";

const floatingBadges = [
  { label: "Next.js", className: "left-[4%] top-[18%]" },
  { label: "TypeScript", className: "right-[6%] top-[26%]" },
  { label: "GSAP", className: "left-[10%] bottom-[22%]" },
  { label: "Tailwind", className: "right-[12%] bottom-[28%]" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-hero-badge]", { opacity: 0, y: 20, duration: 0.6 }, 0.3)
        .from("[data-hero-name]", { opacity: 0, y: 30, duration: 0.8 }, 0.6)
        .from("[data-hero-headline]", { opacity: 0, y: 30, duration: 0.6 }, 0.9)
        .from("[data-hero-desc]", { opacity: 0, y: 20, duration: 0.5 }, 1.1)
        .from(
          "[data-hero-cta] > *",
          {
            opacity: 0,
            y: 20,
            scale: 0.95,
            stagger: 0.1,
            duration: 0.5,
            ease: "back.out(1.2)",
          },
          1.3,
        )
        .from(
          "[data-hero-social] > *",
          { opacity: 0, y: 16, stagger: 0.08, duration: 0.4 },
          1.5,
        )
        .from(
          "[data-hero-visual]",
          { opacity: 0, scale: 0.9, duration: 0.8 },
          1.0,
        )
        .from(
          "[data-hero-float]",
          { opacity: 0, scale: 0.6, stagger: 0.12, duration: 0.6 },
          1.6,
        )
        .from("[data-hero-scroll]", { opacity: 0, duration: 0.6 }, 2.2);

      // Continuous float animation for badges
      gsap.to("[data-hero-float]", {
        y: "+=12",
        duration: 2.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <GradientShift />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-radial-tl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-radial-br"
        aria-hidden
      />

      {/* Floating tech badges (desktop only) */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        {floatingBadges.map((b) => (
          <div
            key={b.label}
            data-hero-float
            className={`absolute ${b.className} rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-accent-blue backdrop-blur-glass`}
          >
            {b.label}
          </div>
        ))}
      </div>

      <Container className="relative z-10 py-32">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="max-w-3xl space-y-6">
            <Badge data-hero-badge variant="tech" size="md">
              <span className="mr-1 inline-block h-2 w-2 rounded-full bg-accent-emerald animate-pulse" />
              AgrianTech Portfolio
            </Badge>

            <h1
              data-hero-name
              className="font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-text-primary md:text-7xl lg:text-8xl"
            >
              <span className="gradient-text">{profile.name}</span>
            </h1>

            <p
              data-hero-headline
              className="text-xl font-medium text-text-secondary md:text-2xl"
            >
              {profile.headline}
            </p>

            <p
              data-hero-desc
              className="max-w-xl text-base text-text-muted md:text-lg"
            >
              {profile.bioShort}
            </p>

            <div data-hero-cta className="flex flex-wrap gap-4 pt-4">
              <MagneticButton>
                <Button href="/projects" size="lg">
                  View Projects
                </Button>
              </MagneticButton>
              <Button href={profile.cvUrl} variant="secondary" size="lg" external>
                <Download size={18} />
                Download CV
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                <Mail size={18} />
                Contact Me
              </Button>
            </div>

            <div data-hero-social className="flex items-center gap-4 pt-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-text-muted transition-colors hover:text-accent-blue"
              >
                <Linkedin size={20} />
              </a>
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-text-muted transition-colors hover:text-accent-blue"
                >
                  <Github size={20} />
                </a>
              )}
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="text-text-muted transition-colors hover:text-accent-blue"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Hero visual: code card */}
          <div data-hero-visual className="hidden lg:block">
            <div className="glass-card overflow-hidden p-0 shadow-lg">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-accent-pink/70" />
                <span className="h-3 w-3 rounded-full bg-accent-yellow/70" />
                <span className="h-3 w-3 rounded-full bg-accent-emerald/70" />
                <span className="ml-2 font-mono text-xs text-text-muted">
                  agrian.profile.ts
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
                <code>
                  <span className="text-accent-purple">const</span>{" "}
                  <span className="text-accent-blue">agrian</span> = {"{"}
                  {"\n"}  role:{" "}
                  <span className="text-accent-emerald">
                    &quot;Web Developer&quot;
                  </span>
                  ,{"\n"}  focus: [
                  <span className="text-accent-emerald">&quot;Web&quot;</span>,{" "}
                  <span className="text-accent-emerald">&quot;Sistem Info&quot;</span>
                  ],{"\n"}  projects:{" "}
                  <span className="text-accent-yellow">4</span>,{"\n"}{"  "}
                  publications: <span className="text-accent-yellow">5</span>,
                  {"\n"}  gpa:{" "}
                  <span className="text-accent-yellow">3.80</span>,{"\n"}{"  "}
                  available:{" "}
                  <span className="text-accent-blue">true</span>,{"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
          </div>
        </div>
      </Container>

      <div
        data-hero-scroll
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden
      >
        <ArrowDown size={20} className="animate-scroll-bounce text-text-muted" />
      </div>
    </section>
  );
}
