import { Section } from "@/components/ui/Section";
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
    <Section size="md" className="bg-bg-secondary/50">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Tech stack & kemampuan"
          description="Teknologi dan metodologi yang digunakan dalam membangun solusi digital."
          className="mb-10 md:mb-12"
        />
        <StaggerReveal className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = iconMap[group.icon];
            return (
              <div key={group.title} className="glass glass-hover rounded-card p-5 md:p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-button bg-brand/[0.08] text-brand">
                    {Icon && <Icon size={20} />}
                  </span>
                  <h3 className="font-heading text-base font-semibold text-fg-primary">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <Badge key={skill} variant="tech" size="sm">{skill}</Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
