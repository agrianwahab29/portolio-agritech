import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge, statusVariant } from "@/components/ui/Badge";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { publications } from "@/data/publications";

export function PublicationsPreview() {
  const top = publications.slice(0, 3);

  return (
    <Section size="md">
      <Container>
        <div className="mb-8 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Publications"
            title="Publikasi ilmiah"
            description="Kontribusi penelitian di bidang sistem informasi, data, dan jaringan."
          />
          <Link
            href="/publications"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-text transition-all hover:gap-2"
          >
            View all
            <ArrowRight size={15} />
          </Link>
        </div>

        <StaggerReveal className="space-y-4">
          {top.map((pub) => (
            <div key={pub.id} className="glass glass-hover rounded-card p-5 md:p-6 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={statusVariant(pub.status)} size="sm">
                  {pub.status}
                </Badge>
                {pub.accreditation && (
                  <Badge variant="tech" size="sm">{pub.accreditation}</Badge>
                )}
                <Badge variant="year" size="sm">{pub.year}</Badge>
              </div>
              <h3 className="font-heading text-base font-semibold text-fg-primary leading-snug md:text-lg">
                {pub.title}
              </h3>
              <p className="text-sm text-fg-muted">
                {pub.authors} · {pub.journal}
                {pub.volume ? ` (${pub.volume})` : ""}
              </p>
              {pub.doiUrl && (
                <a
                  href={pub.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-text transition-colors hover:text-brand-strong"
                >
                  View DOI <ExternalLink size={13} />
                </a>
              )}
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
