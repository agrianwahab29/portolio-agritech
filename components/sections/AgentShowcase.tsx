"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { ArrowRight, Bot, FileText, Layers, Shield, BookOpen, Zap, Github, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { agents, agentPipelineStats } from "@/data/agents";
import { cn } from "@/lib/utils";

const layerIcons: Record<string, React.ElementType> = {
  L0: Bot,
  L1: Layers,
  L2: FileText,
  L5: Shield,
  L6: BookOpen,
  L7: Zap,
};

const categoryColors: Record<string, string> = {
  Core: "border-brand/30 bg-brand/5 text-brand",
  Requirement: "border-ok/30 bg-ok/5 text-ok",
  Quality: "border-warn/30 bg-warn/5 text-warn",
  Guide: "border-info/30 bg-info/5 text-info",
};

export function AgentShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const pipelineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current || prefersReducedMotion()) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Heading animation
      tl.from("[data-agent='heading']", { opacity: 0, y: 30, duration: 0.7 }, 0);

      // Pipeline layers animate
      tl.from("[data-agent='layer']", {
        opacity: 0,
        y: 20,
        stagger: 0.08,
        duration: 0.5,
      }, 0.3);

      // Agent cards
      tl.from("[data-agent='card']", {
        opacity: 0,
        y: 30,
        stagger: 0.06,
        duration: 0.5,
      }, 0.6);

      // CTA
      tl.from("[data-agent='cta']", { opacity: 0, y: 20, duration: 0.5 }, 1);
    },
    { scope: sectionRef },
  );

  return (
    <Section ref={sectionRef} id="agents" size="lg" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand/5 to-transparent" />

      <Container className="relative z-10">
        {/* Header */}
        <div data-agent="heading" className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5">
            <Bot size={14} className="text-brand" />
            <span className="text-xs font-medium text-brand">AI Agent Pipeline</span>
          </div>

          <h2 className="font-heading text-4xl font-bold tracking-tight text-fg-primary md:text-5xl lg:text-6xl">
            Docgen Complete Suite
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-fg-secondary">
            14-agent pipeline yang mengubah satu prompt menjadi paket dokumen lengkap —
            BRD, MRD, PRD, SRS, database schema, arsitektur, UI/UX spec, coding rules,
            test plan, review, build guide, dan execution prompt.
          </p>
        </div>

        {/* Pipeline Flow */}
        <div ref={pipelineRef} className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-heading text-lg font-semibold text-fg-primary">
              Pipeline Architecture
            </h3>
            <span className="rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs font-medium text-brand">
              8 Layers • 14 Agents
            </span>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand/50 via-transparent to-transparent" />

            {/* Layers */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {agentPipelineStats.layers.map((layer, i) => {
                const Icon = layerIcons[layer.layer] || Layers;
                return (
                  <div
                    key={layer.layer}
                    data-agent="layer"
                    className={cn(
                      "group relative glass rounded-card p-5",
                      "border border-line hover:border-brand/30",
                      "transition-all duration-300 hover:-translate-y-1 hover:shadow-glow",
                    )}
                  >
                    {/* Layer number badge */}
                    <div className="absolute -top-3 left-4 flex h-6 w-6 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand ring-2 ring-bg-primary">
                      {i + 1}
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-brand/10 p-2">
                        <Icon size={18} className="text-brand" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-medium text-brand">{layer.layer}</span>
                        <h4 className="mt-1 font-heading text-sm font-semibold text-fg-primary">
                          {layer.name}
                        </h4>
                        <p className="mt-1 text-xs text-fg-muted">{layer.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {agentPipelineStats.keyFeatures.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 rounded-xl border border-line bg-surface/50 p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                <Shield size={14} className="text-brand" />
              </div>
              <span className="text-sm font-medium text-fg-secondary">{feature}</span>
            </div>
          ))}
        </div>

        {/* Agent Cards */}
        <div className="mb-12">
          <h3 className="mb-6 font-heading text-lg font-semibold text-fg-primary">
            Core Agents
          </h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => {
              const Icon = layerIcons[agent.layer] || Bot;
              const colorClass = categoryColors[agent.category] || categoryColors.Core;

              return (
                <article
                  key={agent.id}
                  data-agent="card"
                  className={cn(
                    "group flex flex-col rounded-card border p-5",
                    "glass glass-hover transition-all duration-300",
                    "hover:-translate-y-1",
                  )}
                  style={{
                    borderColor: "var(--surface-border)",
                  }}
                >
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-brand/10 p-2.5">
                        <Icon size={18} className="text-brand" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-medium text-brand">
                          {agent.layer}
                        </span>
                        <h4 className="font-heading text-sm font-semibold text-fg-primary">
                          {agent.name}
                        </h4>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "rounded-full border px-2 py-0.5 text-[10px] font-medium",
                        colorClass,
                      )}
                    >
                      {agent.output !== "—" ? agent.output.replace(".md", "") : "Entry"}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mb-4 flex-1 text-sm text-fg-muted leading-relaxed">
                    {agent.description}
                  </p>

                  {/* Role */}
                  <div className="mb-4 text-xs text-fg-muted">
                    <span className="font-medium text-fg-secondary">Role: </span>
                    {agent.role}
                  </div>

                  {/* Features */}
                  <div className="mb-4 space-y-1.5">
                    {agent.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-fg-muted">
                        <div className="h-1 w-1 shrink-0 rounded-full bg-brand" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                    <span
                      className={cn(
                        "rounded-full border px-2 py-0.5 text-[10px] font-medium",
                        colorClass,
                      )}
                    >
                      {agent.category}
                    </span>
                    <a
                      href={agent.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-fg-muted transition-colors hover:text-brand"
                    >
                      View on GitHub
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Supported Deliverables */}
        <div className="mb-16 rounded-xl border border-line bg-surface/30 p-6">
          <h3 className="mb-4 font-heading text-base font-semibold text-fg-primary">
            Supported Deliverable Types
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {agentPipelineStats.supportedDeliverables.map((item) => (
              <div
                key={item.type}
                className="flex items-center gap-4 rounded-lg border border-line/50 bg-bg-primary/50 p-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                  <FileText size={18} className="text-brand" />
                </div>
                <div>
                  <span className="font-mono text-sm font-bold text-brand">{item.type}</span>
                  <p className="mt-0.5 text-sm text-fg-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div data-agent="cta" className="text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-brand/20 bg-gradient-to-b from-brand/10 to-transparent p-8">
            <div className="flex items-center gap-2">
              <Github size={20} className="text-brand" />
              <span className="font-heading text-xl font-bold text-fg-primary">
                View on GitHub
              </span>
            </div>

            <p className="max-w-md text-sm text-fg-muted">
              Docgen Complete Suite — production-ready 14-agent pipeline untuk dokumentasi otomatis
              yang anti-halusinasi, traceable, dan siap build.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                href="https://github.com/agrianwahab29/agents-docgen-complete-suite"
                size="lg"
                external
              >
                <Github size={17} />
                View Repository
              </Button>

              <Button href="/projects" variant="secondary" size="lg">
                View All Projects
                <ArrowRight size={17} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
