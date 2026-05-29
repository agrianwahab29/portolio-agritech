import { Container } from "@/components/ui/Container";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { Counter } from "@/components/animations/Counter";
import { stats } from "@/data/stats";
import {
  GraduationCap,
  Globe,
  BookOpen,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Globe,
  BookOpen,
  Briefcase,
};

export function QuickStats() {
  return (
    <section className="section-padding">
      <Container>
        <StaggerReveal className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <div
                key={stat.id}
                className="glass-card p-6 transition-all duration-300 hover:-translate-y-1"
              >
                {Icon && (
                  <Icon className="mb-3 text-accent-blue" size={28} />
                )}
                <div className="font-heading text-3xl font-bold text-text-primary md:text-4xl">
                  <Counter
                    value={stat.value}
                    decimals={stat.decimals ?? 0}
                    suffix={stat.suffix ?? ""}
                  />
                </div>
                <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
              </div>
            );
          })}
        </StaggerReveal>
      </Container>
    </section>
  );
}
