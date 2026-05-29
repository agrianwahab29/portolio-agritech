"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { profile } from "@/data/profile";
import { ArrowDown, Download, Mail } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from("[data-hero-badge]", { opacity: 0, y: 20, duration: 0.6 }, 0.4)
        .from("[data-hero-name]", { opacity: 0, y: 30, duration: 0.8 }, 0.7)
        .from("[data-hero-headline]", { opacity: 0, y: 30, duration: 0.6 }, 1.0)
        .from("[data-hero-desc]", { opacity: 0, y: 20, duration: 0.5 }, 1.2)
        .from("[data-hero-cta] > *", {
          opacity: 0,
          y: 20,
          scale: 0.95,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.2)",
        }, 1.4)
        .from("[data-hero-scroll]", {
          opacity: 0,
          duration: 0.6,
        }, 2.2);
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial-tl" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial-br" aria-hidden />

      <Container className="relative z-10 py-32">
        <div className="max-w-3xl space-y-6">
          <Badge data-hero-badge variant="tech" size="md">
            <span className="mr-1 inline-block h-2 w-2 rounded-full bg-accent-emerald animate-pulse" />
            AgrianTech Portfolio
          </Badge>

          <h1
            data-hero-name
            className="font-heading text-5xl font-extrabold tracking-tight text-text-primary md:text-7xl lg:text-8xl"
          >
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <p
            data-hero-headline
            className="text-xl font-medium text-text-secondary md:text-2xl"
          >
            {profile.headline}
          </p>

          <p data-hero-desc className="max-w-xl text-base text-text-muted md:text-lg">
            {profile.bioShort}
          </p>

          <div data-hero-cta className="flex flex-wrap gap-4 pt-4">
            <Button href="/projects" size="lg">
              View Projects
            </Button>
            <Button href={profile.cvUrl} variant="secondary" size="lg" external>
              <Download size={18} />
              Download CV
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              <Mail size={18} />
              Contact Me
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
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
