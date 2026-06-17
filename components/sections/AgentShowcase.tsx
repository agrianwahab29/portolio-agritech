"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import {
  Bot,
  FileText,
  Layers,
  Shield,
  BookOpen,
  Zap,
  Github,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { agents, agentPipelineStats } from "@/data/agents";
import { cn } from "@/lib/utils";

/* ── Icon + color maps ─────────────────────────────────── */

const layerIcons: Record<string, React.ElementType> = {
  L0: Bot,
  L1: Layers,
  L2: FileText,
  L3: FileText,
  L4: Shield,
  L5: Shield,
  L6: BookOpen,
  L7: Zap,
};

const categoryColors: Record<string, string> = {
  Core: "border-brand/30 bg-brand/5 text-brand",
  Requirement: "border-ok/30 bg-ok/5 text-ok",
  Technical: "border-info/30 bg-info/5 text-info",
  Quality: "border-warn/30 bg-warn/5 text-warn",
  Guide: "border-info/30 bg-info/5 text-info",
};

/* ── Component ─────────────────────────────────────────── */

export function AgentShowcase() {
  const scopeRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(
        "[data-agent='heading']",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 }
      );

      tl.fromTo(
        "[data-agent='pipeline-chip']",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.4 },
        "-=0.4"
      );

      tl.fromTo(
        "[data-agent='card']",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, stagger: 0.04, duration: 0.45 },
        "-=0.2"
      );

      tl.fromTo(
        "[data-agent='cta']",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );
    },
    { scope: scopeRef },
  );

  return (
    <Section
      ref={scopeRef}
      id="agents"
      size="sm"
      className="relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand/5 to-transparent" />

      <Container className="relative z-10">
        {/* ─── Block 1: Header + Pipeline Overview ─── */}
        <div data-agent="heading" className="text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5">
            <Bot size={14} className="text-brand" />
            <span className="text-xs font-medium text-brand">
              AI Agent Pipeline
            </span>
          </div>

          <h2 className="font-heading text-3xl font-bold tracking-tight text-fg-primary md:text-4xl lg:text-5xl">
            <span className="gradient-text">Docgen Complete Suite</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base text-fg-secondary">
            {agentPipelineStats.totalAgents}-agent pipeline yang mengubah satu
            prompt menjadi paket dokumen lengkap — BRD, MRD, PRD, SRS, dan
            seluruh artefak teknis.
          </p>

          {/* Pipeline stats badges */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <Badge variant="tech" size="sm">
              {agentPipelineStats.totalAgents} Agents
            </Badge>
            <Badge variant="tech" size="sm">
              {agentPipelineStats.totalLayers} Layers
            </Badge>
            {agentPipelineStats.keyFeatures.map((f) => (
              <Badge key={f} variant="tech" size="sm">
                {f}
              </Badge>
            ))}
          </div>
        </div>

        {/* Pipeline layer chips — horizontal timeline */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {agentPipelineStats.layers.map((layer) => {
            const Icon = layerIcons[layer.layer] || Layers;
            return (
              <div
                key={layer.layer}
                data-agent="pipeline-chip"
                className={cn(
                  "glass inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5",
                  "transition-colors hover:border-brand/30 hover:bg-brand/5",
                )}
              >
                <Icon size={13} className="text-brand" />
                <span className="font-mono text-[11px] font-semibold text-brand">
                  {layer.layer}
                </span>
                <span className="text-xs text-fg-muted">{layer.name}</span>
              </div>
            );
          })}
        </div>

        {/* ─── Block 2: Agent Grid (dense) ─── */}
        <div className="mt-6">
          <h3 className="mb-3 font-heading text-base font-semibold text-fg-primary">
            Core Agents
          </h3>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => {
              const Icon = layerIcons[agent.layer] || Bot;
              const colorClass =
                categoryColors[agent.category] || categoryColors.Core;

              return (
                <article
                  key={agent.id}
                  data-agent="card"
                  className={cn(
                    "group flex flex-col glass rounded-card border border-line p-4",
                    "transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30",
                  )}
                >
                  {/* Card header */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="rounded-lg bg-brand/10 p-2">
                        <Icon size={16} className="text-brand" />
                      </div>
                      <div>
                        <span className="font-mono text-[11px] font-medium text-brand">
                          {agent.layer}
                        </span>
                        <h4 className="font-heading text-sm font-semibold text-fg-primary leading-tight">
                          {agent.name}
                        </h4>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium",
                        colorClass,
                      )}
                    >
                      {agent.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-2 flex-1 text-xs text-fg-muted leading-relaxed line-clamp-3">
                    {agent.description}
                  </p>

                  {/* Output + link */}
                  <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
                    <span className="text-[10px] font-medium text-fg-muted">
                      Output:{" "}
                      <span className="font-mono text-fg-secondary">
                        {agent.output !== "—"
                          ? agent.output.replace(".md", "")
                          : "Entry"}
                      </span>
                    </span>
                    <a
                      href={agent.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-medium text-fg-muted transition-colors hover:text-brand"
                      aria-label={`View ${agent.name} on GitHub`}
                    >
                      GitHub
                      <ExternalLink size={9} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ─── Block 3: CTA ─── */}
        <div data-agent="cta" className="mt-6 text-center">
          <div className="inline-flex flex-col items-center gap-3 glass rounded-card border border-brand/20 p-5">
            <div className="flex items-center gap-2">
              <Github size={18} className="text-brand" />
              <span className="font-heading text-lg font-bold text-fg-primary">
                View on GitHub
              </span>
            </div>

            <p className="max-w-md text-sm text-fg-muted">
              Production-ready {agentPipelineStats.totalAgents}-agent pipeline
              untuk dokumentasi otomatis yang anti-halusinasi, traceable, dan
              siap build.
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
