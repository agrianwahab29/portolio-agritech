import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="projects" className="section-padding">
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected work from AgrianTech"
            description="Beberapa proyek web dan sistem informasi yang telah dibangun dan dipublikasikan di domain instansi pemerintah."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue transition-colors hover:text-accent-cyan"
          >
            View all projects
            <ArrowRight size={16} />
          </Link>
        </div>

        <StaggerReveal
          className="grid gap-6 md:grid-cols-2"
          stagger={0.12}
        >
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
