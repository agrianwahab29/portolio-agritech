import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

const categoryGradients: Record<string, string> = {
  "Sistem Informasi": "from-accent-blue/20 to-accent-cyan/10",
  "Web Portal": "from-accent-purple/20 to-accent-blue/10",
  "UI/UX": "from-accent-pink/20 to-accent-purple/10",
  default: "from-accent-emerald/20 to-accent-blue/10",
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const gradient =
    categoryGradients[project.category] ?? categoryGradients.default;

  return (
    <article
      className={cn(
        "group glass-card flex flex-col overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-blue",
        className,
      )}
    >
      {/* Visual */}
      <div
        className={cn(
          "relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br",
          gradient,
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-heading text-2xl font-bold tracking-tight text-text-primary/70">
            {project.title.split(" ")[0]}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-card-glow opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="category" size="sm">
            {project.category}
          </Badge>
          <Badge variant="year" size="sm">
            {project.year}
          </Badge>
          <Badge
            variant="status"
            status={project.status.toLowerCase().replace(" ", "-") as never}
            size="sm"
          >
            {project.status}
          </Badge>
        </div>

        <h3 className="font-heading text-lg font-semibold text-text-primary md:text-xl">
          {project.title}
        </h3>

        <p className="line-clamp-3 text-sm text-text-secondary">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="tech" size="sm">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-accent-blue transition-all hover:gap-2"
          >
            Case Study
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-text-muted transition-colors hover:text-text-primary"
            >
              Live Demo
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
