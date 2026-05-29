import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Badge, statusVariant } from "@/components/ui/Badge";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
  priority?: boolean;
};

export function ProjectCard({ project, className, priority = false }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group glass glass-hover flex flex-col overflow-hidden rounded-card p-0 hover:-translate-y-1 hover:shadow-glow",
        className,
      )}
    >
      {/* Real screenshot */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg-tertiary">
        <Image
          src={project.thumbnail}
          alt={`Tampilan ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-500 ease-smooth group-hover:scale-[1.04]"
          priority={priority}
        />
        {/* Subtle gradient for readability + depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/30 via-transparent to-transparent" />
        {/* Status corner badge */}
        <div className="absolute right-3 top-3">
          <Badge variant={statusVariant(project.status)} size="sm">
            {project.status}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="category" size="sm">{project.category}</Badge>
          <Badge variant="year" size="sm">{project.year}</Badge>
        </div>

        <h3 className="font-heading text-base font-semibold text-fg-primary leading-snug md:text-lg">
          {project.title}
        </h3>

        <p className="line-clamp-2 text-sm text-fg-secondary">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="tech" size="sm">{tech}</Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-line">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-text transition-all hover:gap-2"
          >
            Case Study
            <ArrowUpRight size={14} />
          </Link>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-fg-muted transition-colors hover:text-fg-primary"
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
