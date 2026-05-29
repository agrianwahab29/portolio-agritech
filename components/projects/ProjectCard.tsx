import Link from "next/link";
import { ArrowUpRight, ExternalLink, Package, Globe, PenTool, GraduationCap, Database, Layout } from "lucide-react";
import { Badge, statusVariant } from "@/components/ui/Badge";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

// Category-specific styling
const categoryConfig: Record<string, { gradient: string; icon: typeof Package; pattern: string }> = {
  "Sistem Informasi": {
    gradient: "from-blue-600/20 via-cyan-500/10 to-indigo-600/20",
    icon: Database,
    pattern: "opacity-[0.04]",
  },
  "Web Portal": {
    gradient: "from-purple-600/20 via-fuchsia-500/10 to-blue-600/20",
    icon: Globe,
    pattern: "opacity-[0.04]",
  },
  "UI/UX": {
    gradient: "from-pink-600/20 via-rose-500/10 to-purple-600/20",
    icon: PenTool,
    pattern: "opacity-[0.04]",
  },
  "Academic": {
    gradient: "from-emerald-600/20 via-teal-500/10 to-cyan-600/20",
    icon: GraduationCap,
    pattern: "opacity-[0.04]",
  },
};

const defaultConfig = {
  gradient: "from-slate-600/20 via-gray-500/10 to-slate-600/20",
  icon: Layout,
  pattern: "opacity-[0.04]",
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const config = categoryConfig[project.category] ?? defaultConfig;
  const Icon = config.icon;

  return (
    <article
      className={cn(
        "group glass glass-hover flex flex-col overflow-hidden rounded-card p-0 hover:-translate-y-1 hover:shadow-glow",
        className,
      )}
    >
      {/* Visual header with gradient + icon */}
      <div className={cn(
        "relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden bg-gradient-to-br",
        config.gradient,
      )}>
        {/* Grid pattern overlay */}
        <div className={cn(
          "absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] bg-[length:24px_24px] text-fg-primary",
          config.pattern,
        )} />
        
        {/* Decorative circles */}
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/[0.08] blur-2xl" />
        <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-brand-strong/[0.06] blur-xl" />
        
        {/* Main icon */}
        <div className="relative flex flex-col items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-bg-primary/60 shadow-md backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <Icon size={28} className="text-brand" />
          </div>
          <span className="max-w-[200px] text-center font-heading text-sm font-semibold text-fg-primary/80">
            {project.title.split("—")[0]?.trim() || project.title.split(" ").slice(0, 3).join(" ")}
          </span>
        </div>

        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="category" size="sm">{project.category}</Badge>
          <Badge variant="year" size="sm">{project.year}</Badge>
          <Badge variant={statusVariant(project.status)} size="sm">
            {project.status}
          </Badge>
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
