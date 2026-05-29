import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge, statusVariant } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <>
      <Navbar />
      <article className="pt-28">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-fg-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-fg-secondary">Home</Link></li>
              <li>/</li>
              <li><Link href="/projects" className="hover:text-fg-secondary">Projects</Link></li>
              <li>/</li>
              <li className="text-fg-secondary">{project.title}</li>
            </ol>
          </nav>

          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-1 text-sm text-fg-muted transition-colors hover:text-brand-text"
          >
            <ChevronLeft size={14} /> Back to Projects
          </Link>

          <header className="mb-10 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="category" size="sm">{project.category}</Badge>
              <Badge variant="year" size="sm">{project.year}</Badge>
              <Badge variant={statusVariant(project.status)} size="sm">
                {project.status}
              </Badge>
            </div>
            <h1 className="font-heading text-3xl font-bold tracking-tight text-fg-primary text-balance md:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-3xl text-base text-fg-secondary md:text-lg text-pretty">
              {project.summary}
            </p>
            {project.demoUrl && (
              <Button href={project.demoUrl} size="md" external>
                <ExternalLink size={16} /> Visit Live Demo
              </Button>
            )}
          </header>

          {/* Hero screenshot */}
          <div className="relative mb-12 aspect-[16/9] w-full overflow-hidden rounded-card border border-line bg-bg-tertiary shadow-lg md:aspect-[2/1]">
            <Image
              src={project.thumbnail}
              alt={`Tampilan ${project.title}`}
              fill
              sizes="(max-width: 1120px) 100vw, 1120px"
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-10">
              {project.problem && (
                <section className="space-y-3">
                  <h2 className="font-heading text-xl font-bold text-fg-primary md:text-2xl">Problem</h2>
                  <p className="text-fg-secondary">{project.problem}</p>
                </section>
              )}

              {project.goals && (
                <section className="space-y-3">
                  <h2 className="font-heading text-xl font-bold text-fg-primary md:text-2xl">Goals</h2>
                  <ul className="space-y-2">
                    {project.goals.map((g, i) => (
                      <li key={i} className="flex gap-3 text-fg-secondary">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.solution && (
                <section className="space-y-3">
                  <h2 className="font-heading text-xl font-bold text-fg-primary md:text-2xl">Solution</h2>
                  <p className="text-fg-secondary">{project.solution}</p>
                </section>
              )}

              <section className="space-y-3">
                <h2 className="font-heading text-xl font-bold text-fg-primary md:text-2xl">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex gap-3 text-fg-secondary">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-strong" />
                      {f}
                    </li>
                  ))}
                </ul>
              </section>

              {project.challenges && (
                <section className="space-y-3">
                  <h2 className="font-heading text-xl font-bold text-fg-primary md:text-2xl">Challenges</h2>
                  <ul className="space-y-2">
                    {project.challenges.map((c, i) => (
                      <li key={i} className="flex gap-3 text-fg-secondary">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warn" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {project.result && (
                <section className="space-y-3">
                  <h2 className="font-heading text-xl font-bold text-fg-primary md:text-2xl">Result</h2>
                  <p className="text-fg-secondary">{project.result}</p>
                </section>
              )}

              {project.lessonsLearned && (
                <section className="space-y-3">
                  <h2 className="font-heading text-xl font-bold text-fg-primary md:text-2xl">Lessons Learned</h2>
                  <ul className="space-y-2">
                    {project.lessonsLearned.map((l, i) => (
                      <li key={i} className="flex gap-3 text-fg-secondary">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ok" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <aside className="space-y-5">
              <div className="glass rounded-card p-5 space-y-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-fg-muted">Role</p>
                  <p className="mt-1.5 text-sm text-fg-primary">{project.role}</p>
                </div>
                <div className="h-px bg-line" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-fg-muted">Tech Stack</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.techStack.map((t) => (
                      <Badge key={t} variant="tech" size="sm">{t}</Badge>
                    ))}
                  </div>
                </div>
                <div className="h-px bg-line" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-fg-muted">Tags</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <Badge key={t} variant="muted" size="sm">{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <Section size="md" className="px-0">
              <h2 className="mb-6 font-heading text-xl font-bold text-fg-primary md:text-2xl">
                Related Projects
              </h2>
              <div className="grid gap-5 md:grid-cols-2">
                {related.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </Section>
          )}
        </Container>
      </article>
      <Footer />
    </>
  );
}
