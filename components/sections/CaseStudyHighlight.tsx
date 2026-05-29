import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { ExternalLink, Check } from "lucide-react";
import { projects } from "@/data/projects";

export function CaseStudyHighlight() {
  const sepadan = projects.find((p) => p.id === "sepadan");
  if (!sepadan) return null;

  return (
    <section className="section-padding bg-bg-secondary/40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeUp className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="tech" size="sm">CASE STUDY</Badge>
              <Badge variant="status" status="published" size="sm">
                Flagship
              </Badge>
            </div>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary md:text-5xl">
              <span className="gradient-text">SEPADAN</span>
            </h2>
            <p className="text-lg text-text-secondary">{sepadan.summary}</p>
            <div className="space-y-3">
              {sepadan.features.slice(0, 5).map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 shrink-0 text-accent-emerald" />
                  <span className="text-sm text-text-secondary">{f}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <Button href={`/projects/${sepadan.slug}`} size="lg">
                View Full Case Study
              </Button>
              {sepadan.demoUrl && (
                <Button href={sepadan.demoUrl} variant="secondary" size="lg" external>
                  <ExternalLink size={18} />
                  Live Demo
                </Button>
              )}
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="glass-card aspect-square space-y-4 p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-card bg-accent-blue/10 p-4">
                  <p className="text-xs uppercase tracking-wider text-text-muted">
                    Problem
                  </p>
                  <p className="mt-2 text-sm text-text-primary">
                    Pencatatan manual, audit trail tidak ada
                  </p>
                </div>
                <div className="rounded-card bg-accent-purple/10 p-4">
                  <p className="text-xs uppercase tracking-wider text-text-muted">
                    Solution
                  </p>
                  <p className="mt-2 text-sm text-text-primary">
                    Sistem terintegrasi dengan workflow approval
                  </p>
                </div>
              </div>
              <div className="rounded-card bg-accent-emerald/10 p-4">
                <p className="text-xs uppercase tracking-wider text-text-muted">
                  Result
                </p>
                <p className="mt-2 text-sm text-text-primary">
                  {sepadan.result}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {sepadan.techStack.map((t) => (
                  <Badge key={t} variant="tech" size="sm">{t}</Badge>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
