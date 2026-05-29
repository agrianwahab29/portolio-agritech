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
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I Can Build"
          description="Saya dapat membantu membangun website dan sistem digital untuk kebutuhan bisnis dan instansi."
          className="mb-12"
        />
        <StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <div key={service.id} className="glass-card p-6 space-y-3">
                {Icon && <Icon size={28} className="text-accent-cyan" />}
                <h3 className="font-heading text-base font-semibold text-text-primary">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted">{service.description}</p>
              </div>
            );
          })}
        </StaggerReveal>
      </Container>
    </section>
  );
}
