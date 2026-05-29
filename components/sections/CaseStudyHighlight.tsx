import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge, statusVariant } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ExternalLink, Check } from "lucide-react";
import { projects } from "@/data/projects";

export function CaseStudyHighlight() {
  const sepadan = projects.find((p) => p.id === "sepadan");
  if (!sepadan) return null;

  return (
    <Section size="md" className="bg-bg-secondary/50">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <FadeUp className="space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="tech" size="sm">CASE STUDY</Badge>
              <Badge variant={statusVariant(sepadan.status)} size="sm">
                Flagship
              </Badge>
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-fg-primary md:text-4xl">
              <span className="gradient-text">SEPADAN</span>
            </h2>
            <p className="text-base text-fg-secondary">{sepadan.summary}</p>
            <div className="space-y-2.5">
              {sepadan.features.slice(0, 5).map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <Check size={16} className="mt-0.5 shrink-0 text-ok" />
                  <span className="text-sm text-fg-secondary">{f}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href={`/projects/${sepadan.slug}`} size="md">
                View Case Study
              </Button>
              {sepadan.demoUrl && (
                <Button href={sepadan.demoUrl} variant="secondary" size="md" external>
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
              )}
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="glass rounded-card p-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-card bg-brand/[0.06] p-4">
                  <p className="text-[10px] uppercase tracking-wider text-fg-muted">Problem</p>
                  <p className="mt-1.5 text-sm text-fg-primary">Pencatatan manual, audit trail tidak ada</p>
                </div>
                <div className="rounded-card bg-[var(--grad-to)]/[0.06] p-4">
                  <p className="text-[10px] uppercase tracking-wider text-fg-muted">Solution</p>
                  <p className="mt-1.5 text-sm text-fg-primary">Sistem terintegrasi + workflow approval</p>
                </div>
              </div>
              <div className="rounded-card bg-ok/[0.06] p-4">
                <p className="text-[10px] uppercase tracking-wider text-fg-muted">Result</p>
                <p className="mt-1.5 text-sm text-fg-primary">{sepadan.result}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {sepadan.techStack.map((t) => (
                  <Badge key={t} variant="tech" size="sm">{t}</Badge>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}
