import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Daftar proyek web dan sistem informasi yang dibangun oleh Agrian Wahab (AgriTech).",
};

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => a.priority - b.priority);

  return (
    <>
      <Navbar />
      <Section size="lg" className="pt-28">
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="Semua proyek AgriTech"
            description="Kumpulan proyek web portal dan sistem informasi yang telah dibangun dan dipublikasikan."
            className="mb-10 md:mb-12"
          />
          <ProjectFilter projects={sorted} />
        </Container>
      </Section>
      <Footer />
    </>
  );
}
