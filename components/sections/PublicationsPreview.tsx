import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { publications } from "@/data/publications";

export function PublicationsPreview() {
  const top = publications.slice(0, 3);

  return (
    <section className="section-padding">
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Scientific Publications"
            title="Publikasi ilmiah"
            description="Kontribusi penelitian di bidang sistem informasi, data, dan jaringan."
          />
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue transition-colors hover:text-accent-cyan"
          >
            View all publications
            <ArrowRight size={16} />
          </Link>
        </div>

        <StaggerReveal className="space-y-4">
          {top.map((pub) => (
            <div key={pub.id} className="glass-card p-6 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  variant="status"
                  status={
                    pub.status === "Published" ? "published" : "accepted"
                  }
                  size="sm"
                >
                  {pub.status}
                </Badge>
                {pub.accreditation && (
                  <Badge variant="tech" size="sm">
                    {pub.accreditation}
                  </Badge>
                )}
                <Badge variant="year" size="sm">
                  {pub.year}
                </Badge>
              </div>
              <h3 className="font-heading text-base font-semibold text-text-primary md:text-lg">
                {pub.title}
              </h3>
              <p className="text-sm text-text-muted">
                {pub.authors} &middot; {pub.journal}
                {pub.volume ? ` (${pub.volume})` : ""}
              </p>
              {pub.doiUrl && (
                <a
                  href={pub.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent-blue transition-colors hover:text-accent-cyan"
                >
                  View DOI
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
