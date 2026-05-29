import { Section } from "@/components/ui/Section";
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
    <Section size="sm" className="border-y border-line bg-bg-secondary/40">
      <Container>
        <StaggerReveal className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <div
                key={stat.id}
                className="glass glass-hover rounded-card p-5"
              >
                {Icon && <Icon className="mb-3 text-brand" size={22} />}
                <div className="font-heading text-2xl font-bold text-fg-primary md:text-3xl">
                  <Counter
                    value={stat.value}
                    decimals={stat.decimals ?? 0}
                    suffix={stat.suffix ?? ""}
                  />
                </div>
                <p className="mt-1 text-xs text-fg-muted md:text-sm">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
