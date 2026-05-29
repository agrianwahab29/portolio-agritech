import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { experiences } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <Section size="md">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Perjalanan profesional"
          description="Pengalaman magang nasional, organisasi, dan kegiatan akademik."
          className="mb-10 md:mb-12"
        />
        <StaggerReveal className="relative space-y-5 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-line">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8">
              <span className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-brand bg-bg-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              </span>
              <div className="glass glass-hover rounded-card p-5 md:p-6 space-y-3">
                <Badge variant="muted" size="sm">{exp.period}</Badge>
                <div>
                  <h3 className="font-heading text-base font-semibold text-fg-primary md:text-lg">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-brand-text">{exp.company}</p>
                  {exp.location && (
                    <p className="text-xs text-fg-muted">{exp.location}</p>
                  )}
                </div>
                <p className="text-sm text-fg-secondary">{exp.description}</p>
                <ul className="space-y-1.5">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="flex gap-2 text-sm text-fg-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-strong" />
                      {a}
                    </li>
                  ))}
                </ul>
                {exp.technologies && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.technologies.map((t) => (
                      <Badge key={t} variant="tech" size="sm">{t}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
