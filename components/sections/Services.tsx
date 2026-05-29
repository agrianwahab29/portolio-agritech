import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { services } from "@/data/services";
import {
  Rocket,
  Building2,
  User,
  Database,
  PenTool,
  FileText,
  Gauge,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Building2,
  User,
  Database,
  PenTool,
  FileText,
  Gauge,
};

export function Services() {
  return (
    <Section size="md">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I can build"
          description="Membantu membangun website dan sistem digital untuk kebutuhan bisnis dan instansi."
          className="mb-10 md:mb-12"
        />
        <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group glass glass-hover rounded-card p-5 md:p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-button bg-brand/[0.08] text-brand transition-transform duration-300 group-hover:scale-110">
                  {Icon && <Icon size={20} />}
                </span>
                <h3 className="mt-4 font-heading text-base font-semibold text-fg-primary">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm text-fg-muted">{service.description}</p>
              </div>
            );
          })}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
