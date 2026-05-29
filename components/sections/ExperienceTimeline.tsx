import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { experiences } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <section className="section-padding bg-bg-secondary/40">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Perjalanan profesional dan akademik"
          description="Pengalaman magang nasional, organisasi, dan kegiatan akademik."
          className="mb-12"
        />
        <StaggerReveal className="relative space-y-6 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/10 md:before:left-[9px]">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-10">
              <span className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-accent-blue bg-bg-primary md:h-5 md:w-5" />
              <div className="glass-card p-6 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="category" size="sm">
                    {exp.period}
                  </Badge>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-accent-blue">{exp.company}</p>
                  {exp.location && (
                    <p className="text-xs text-text-muted">{exp.location}</p>
                  )}
                </div>
                <p className="text-sm text-text-secondary">{exp.description}</p>
                <ul className="space-y-1.5">
                  {exp.achievements.map((a, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                      {a}
                    </li>
                  ))}
                </ul>
                {exp.technologies && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.technologies.map((t) => (
                      <Badge key={t} variant="tech" size="sm">
                        {t}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
