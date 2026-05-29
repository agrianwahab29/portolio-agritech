import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Daftar proyek web dan sistem informasi yang dibangun oleh Agrian Wahab (AgrianTech).",
};

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => a.priority - b.priority);

  return (
    <>
      <Navbar />
      <div className="pt-32">
        <Container>
          <SectionHeading
            eyebrow="Projects"
            title="Semua proyek AgrianTech"
            description="Kumpulan proyek web portal dan sistem informasi yang telah dibangun dan dipublikasikan."
            className="mb-12"
          />
          <ProjectFilter projects={sorted} />
        </Container>
      </div>
      <Footer />
    </>
  );
}
