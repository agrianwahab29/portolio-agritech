import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  return (
    <>
      <Navbar />
      <article className="pt-32">
        <Container>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-text-muted">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-text-secondary">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/projects" className="hover:text-text-secondary">
                  Projects
                </Link>
              </li>
              <li>/</li>
              <li className="text-text-secondary">{project.title}</li>
            </ol>
          </nav>

          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-accent-blue"
          >
            <ChevronLeft size={14} />
            Back to Projects
          </Link>

          {/* Hero */}
          <header className="mb-12 space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="category" size="sm">{project.category}</Badge>
              <Badge variant="year" size="sm">{project.year}</Badge>
              <Badge
                variant="status"
                status={project.status.toLowerCase().replace(" ", "-") as never}
                size="sm"
              >
                {project.status}
              </Badge>
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-text-primary md:text-6xl">
              {project.title}
            </h1>
            <p className="max-w-3xl text-lg text-text-secondary">
              {project.summary}
            </p>
            {project.demoUrl && (
              <Button href={project.demoUrl} size="lg" external>
                <ExternalLink size={18} />
                Visit Live Demo
              </Button>
            )}
          </header>

          {/* Content */}
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-12">
              {project.problem && (
                <section className="space-y-3">
                  <h2 className="font-heading text-2xl font-bold text-text-primary">
                    Problem
                  </h2>
                  <p className="text-text-secondary">{project.problem}</p>
                </section>
              )}

              {project.goals && (
                <section className="space-y-3">
                  <h2 className="font-heading text-2xl font-bold text-text-primary">
                    Goals
                  </h2>
                  <ul className="space-y-2">
                    {project.goals.map((g, i) => (
                      <li key={i} className="flex gap-3 text-text-secondary">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-blue" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.solution && (
                <section className="space-y-3">
                  <h2 className="font-heading text-2xl font-bold text-text-primary">
                    Solution
                  </h2>
                  <p className="text-text-secondary">{project.solution}</p>
                </section>
              )}

              <section className="space-y-3">
                <h2 className="font-heading text-2xl font-bold text-text-primary">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-text-secondary">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>

              {project.challenges && (
                <section className="space-y-3">
                  <h2 className="font-heading text-2xl font-bold text-text-primary">
                    Challenges
                  </h2>
                  <ul className="space-y-2">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="flex gap-3 text-text-secondary">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-yellow" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.result && (
                <section className="space-y-3">
                  <h2 className="font-heading text-2xl font-bold text-text-primary">
                    Result
                  </h2>
                  <p className="text-text-secondary">{project.result}</p>
                </section>
              )}

              {project.lessonsLearned && (
                <section className="space-y-3">
                  <h2 className="font-heading text-2xl font-bold text-text-primary">
                    Lessons Learned
                  </h2>
                  <ul className="space-y-2">
                    {project.lessonsLearned.map((l, i) => (
                      <li key={i} className="flex gap-3 text-text-secondary">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-emerald" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="glass-card p-6 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-muted">
                    Role
                  </p>
                  <p className="mt-1 text-sm text-text-primary">{project.role}</p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-muted">
                    Tech Stack
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.techStack.map((t) => (
                      <Badge key={t} variant="tech" size="sm">{t}</Badge>
                    ))}
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-text-muted">
                    Tags
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <Badge key={t} variant="category" size="sm">{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-24 space-y-6">
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Related Projects
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {related.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </section>
          )}
        </Container>
      </article>
      <Footer />
    </>
  );
}
