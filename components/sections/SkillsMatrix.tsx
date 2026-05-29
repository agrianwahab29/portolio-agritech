import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { skillGroups } from "@/data/skills";
import {
  Layout,
  Server,
  PenTool,
  Code,
  GitBranch,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  PenTool,
  Code,
  GitBranch,
  Sparkles,
};

export function SkillsMatrix() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Skills & Expertise"
          title="Tech stack dan kemampuan"
          description="Teknologi dan metodologi yang digunakan dalam membangun solusi digital."
          className="mb-12"
        />
        <StaggerReveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon];
            return (
              <div key={group.title} className="glass-card p-6 space-y-4">
                <div className="flex items-center gap-3">
                  {Icon && <Icon size={22} className="text-accent-blue" />}
                  <h3 className="font-heading text-base font-semibold text-text-primary">
                    {group.title}
                  </h3>
                </div>
                <p className="text-xs text-text-muted">{group.description}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="tech" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </StaggerReveal>
      </Container>
    </section>
  );
}
