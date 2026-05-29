import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { Award } from "lucide-react";
import { certificates } from "@/data/certificates";

const highlightIds = ["redteam-blueteam-2024", "wazuh-2024", "magang-nasional-2026"];

export function CertificatesHighlight() {
  const highlighted = certificates.filter((c) => highlightIds.includes(c.id));

  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Certificates"
          title="Sertifikat pendukung"
          description="Sertifikasi yang relevan untuk peran teknis dan profesional."
          className="mb-12"
        />
        <StaggerReveal className="grid gap-6 md:grid-cols-3">
          {highlighted.map((c) => (
            <div key={c.id} className="glass-card p-6 space-y-3">
              <Award size={24} className="text-accent-emerald" />
              <Badge variant="category" size="sm">
                {c.category}
              </Badge>
              <h3 className="font-heading text-base font-semibold text-text-primary">
                {c.title}
              </h3>
              <p className="text-sm text-text-muted">{c.issuer}</p>
              <p className="text-xs text-text-muted">{c.date}</p>
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
