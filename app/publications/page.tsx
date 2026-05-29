import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
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
      <div className="pt-32">
        <Container>
          <SectionHeading
            eyebrow="Publications"
            title="Publikasi ilmiah"
            description="Kontribusi penelitian yang telah dipublikasikan di jurnal nasional."
            className="mb-12"
          />
          <StaggerReveal className="space-y-6">
            {publications.map((pub) => (
              <article key={pub.id} className="glass-card p-6 md:p-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="status"
                    status={pub.status === "Published" ? "published" : "accepted"}
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
                <h2 className="font-heading text-lg font-semibold text-text-primary md:text-xl">
                  {pub.title}
                </h2>
                <p className="text-sm text-text-muted">
                  {pub.authors} &middot; {pub.journal}
                  {pub.volume ? ` (${pub.volume})` : ""}
                </p>
                <div className="flex flex-wrap gap-2">
                  {pub.topic.map((t) => (
                    <Badge key={t} variant="category" size="sm">
                      {t}
                    </Badge>
                  ))}
                </div>
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
              </article>
            ))}
          </StaggerReveal>
        </Container>
      </div>
      <Footer />
    </>
  );
}
