import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/animations/FadeUp";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description: `Tentang Agrian Wahab — ${profile.headline}.`,
};

const values = [
  "Integritas — jujur soal kemampuan dan peran",
  "Rapi — kode terstruktur, dokumentasi lengkap",
  "Adaptif — cepat belajar stack baru",
  "Kolaboratif — terbiasa multi-stakeholder",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Section size="lg" className="pt-28">
        <Container>
          <FadeUp className="mb-12 max-w-3xl space-y-5">
            <SectionHeading
              eyebrow="About AgriTech"
              title={profile.name}
              description={profile.headline}
            />
            <p className="text-base leading-relaxed text-fg-secondary text-pretty md:text-lg">
              {profile.bio}
            </p>
            <p className="text-base leading-relaxed text-fg-secondary text-pretty md:text-lg">
              Melalui AgriTech, saya ingin membangun solusi digital yang tidak hanya terlihat modern, tetapi juga memiliki struktur, fungsi, dan pengalaman pengguna yang baik.
            </p>
          </FadeUp>

          <FadeUp className="mb-12">
            <div className="glass max-w-xl rounded-card p-6 space-y-1.5">
              <p className="text-[11px] uppercase tracking-[0.16em] text-fg-muted">Education</p>
              <h3 className="font-heading text-lg font-bold text-fg-primary">
                {profile.education.degree}
              </h3>
              <p className="text-fg-secondary">{profile.education.university}</p>
              <p className="text-sm text-fg-muted">
                {profile.education.period} · GPA {profile.education.gpa}
              </p>
            </div>
          </FadeUp>

          <FadeUp className="mb-12 space-y-4">
            <h2 className="font-heading text-xl font-bold text-fg-primary md:text-2xl">Values</h2>
            <ul className="space-y-2.5">
              {values.map((v) => (
                <li key={v} className="flex gap-2.5 text-fg-secondary">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-strong" />
                  {v}
                </li>
              ))}
            </ul>
          </FadeUp>

          <div className="mb-12 space-y-5">
            <h2 className="font-heading text-xl font-bold text-fg-primary md:text-2xl">
              Tools & Technologies
            </h2>
            <StaggerReveal className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="glass glass-hover rounded-card p-5 space-y-3">
                  <h3 className="text-sm font-semibold text-fg-primary">{group.title}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((s) => (
                      <Badge key={s} variant="tech" size="sm">{s}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </Container>
      </Section>
      <Footer />
    </>
  );
}
