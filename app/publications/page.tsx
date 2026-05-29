import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge, statusVariant } from "@/components/ui/Badge";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { publications } from "@/data/publications";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Daftar publikasi ilmiah Agrian Wahab di bidang sistem informasi, data, dan jaringan.",
};

export default function PublicationsPage() {
  return (
    <>
      <Navbar />
      <Section size="lg" className="pt-28">
        <Container>
          <SectionHeading
            eyebrow="Publications"
            title="Publikasi ilmiah"
            description="Kontribusi penelitian yang telah dipublikasikan di jurnal nasional."
            className="mb-10 md:mb-12"
          />
          <StaggerReveal className="space-y-4">
            {publications.map((pub) => (
              <article key={pub.id} className="glass glass-hover rounded-card p-5 md:p-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={statusVariant(pub.status)} size="sm">
                    {pub.status}
                  </Badge>
                  {pub.accreditation && (
                    <Badge variant="tech" size="sm">{pub.accreditation}</Badge>
                  )}
                  <Badge variant="year" size="sm">{pub.year}</Badge>
                </div>
                <h2 className="font-heading text-base font-semibold text-fg-primary leading-snug md:text-lg">
                  {pub.title}
                </h2>
                <p className="text-sm text-fg-muted">
                  {pub.authors} · {pub.journal}
                  {pub.volume ? ` (${pub.volume})` : ""}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pub.topic.map((t) => (
                    <Badge key={t} variant="category" size="sm">{t}</Badge>
                  ))}
                </div>
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
              </article>
            ))}
          </StaggerReveal>
        </Container>
      </Section>
      <Footer />
    </>
  );
}
