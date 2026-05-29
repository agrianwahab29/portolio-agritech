import { Section } from "@/components/ui/Section";
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
    <Section size="md">
      <Container>
        <SectionHeading
          eyebrow="Certificates"
          title="Sertifikat pendukung"
          description="Sertifikasi yang relevan untuk peran teknis dan profesional."
          className="mb-10 md:mb-12"
        />
        <StaggerReveal className="grid gap-5 md:grid-cols-3">
          {highlighted.map((c) => (
            <div key={c.id} className="glass glass-hover rounded-card p-5 md:p-6 space-y-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-button bg-ok/10 text-ok">
                <Award size={20} />
              </span>
              <Badge variant="muted" size="sm">{c.category}</Badge>
              <h3 className="font-heading text-base font-semibold text-fg-primary leading-snug">
                {c.title}
              </h3>
              <p className="text-sm text-fg-muted">{c.issuer}</p>
              <p className="text-xs text-fg-muted">{c.date}</p>
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
