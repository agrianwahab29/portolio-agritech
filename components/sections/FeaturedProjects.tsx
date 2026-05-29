import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <Section id="projects" size="md">
      <Container>
        <div className="mb-10 flex flex-col items-start justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected work"
            description="Beberapa proyek web dan sistem informasi yang dibangun dan dipublikasikan di domain instansi pemerintah."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-text transition-all hover:gap-2"
          >
            View all
            <ArrowRight size={15} />
          </Link>
        </div>

        <StaggerReveal className="grid gap-5 md:grid-cols-2 md:gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </StaggerReveal>
      </Container>
    </Section>
  );
}
