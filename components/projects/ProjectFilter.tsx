"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const filters = ["All", "Web Portal", "Sistem Informasi", "UI/UX", "AI Agents"];

type ProjectFilterProps = {
  projects: Project[];
};

export function ProjectFilter({ projects }: ProjectFilterProps) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div className="space-y-6">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Project category filter"
      >
        {filters.map((filter) => {
          const isActive = active === filter;
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(filter)}
              className={cn(
                "rounded-button px-4 py-2 text-sm font-medium transition-all",
                isActive
                  ? "bg-gradient-hero text-brand-contrast shadow-glow"
                  : "glass text-fg-secondary hover:text-fg-primary",
              )}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <p className="text-sm text-fg-muted" aria-live="polite">
        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
      </p>

      {filtered.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="glass rounded-card p-10 text-center">
          <p className="text-fg-muted">Tidak ada proyek di kategori ini.</p>
        </div>
      )}
    </div>
  );
}
