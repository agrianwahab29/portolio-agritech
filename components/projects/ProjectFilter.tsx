"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

const filters = [
  "All",
  "Web Portal",
  "Sistem Informasi",
  "UI/UX",
];

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
    <div className="space-y-8">
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
                  ? "bg-gradient-hero text-bg-primary"
                  : "glass-card text-text-secondary hover:text-text-primary",
              )}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <p className="text-sm text-text-muted" aria-live="polite">
        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
      </p>

      {filtered.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="glass-card p-12 text-center">
          <p className="text-text-muted">
            Tidak ada proyek di kategori ini.
          </p>
        </div>
      )}
    </div>
  );
}
