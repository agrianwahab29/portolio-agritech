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
          {/* Top Section: Bio & Mission (Centered max-width, justified text) */}
          <FadeUp className="mb-12 max-w-4xl mx-auto space-y-6">
            <SectionHeading
              eyebrow="About AgriNode"
              title={profile.name}
              description={profile.headline}
            />
            <p className="text-base leading-relaxed text-fg-secondary text-justify md:text-lg">
              {profile.bio}
            </p>
            <p className="text-base leading-relaxed text-fg-secondary text-justify md:text-lg">
              Melalui AgriNode, saya ingin membangun solusi digital yang tidak hanya terlihat modern, tetapi juga memiliki struktur, fungsi, dan pengalaman pengguna yang baik.
            </p>
          </FadeUp>

          {/* Grid Section: Education & Values (Side-by-side below the bio) */}
          <div className="mb-16 max-w-4xl mx-auto grid gap-6 md:grid-cols-2 md:items-stretch">
            {/* Left Column: Education */}
            <FadeUp className="h-full">
              <div className="glass rounded-card p-6 h-full flex flex-col justify-between border border-line">
                <div className="space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-fg-muted font-semibold">Education</p>
                  <h3 className="font-heading text-lg font-bold text-fg-primary leading-snug">
                    {profile.education.degree}
                  </h3>
                  <p className="text-fg-secondary text-sm">{profile.education.university}</p>
                  <p className="text-sm text-fg-muted">
                    {profile.education.period} · GPA {profile.education.gpa}
                  </p>
                </div>
                {profile.education.concentration && (
                  <p className="mt-4 text-sm text-fg-muted border-t border-line/50 pt-3">
                    Konsentrasi: <span className="text-fg-secondary font-medium">{profile.education.concentration}</span>
                  </p>
                )}
              </div>
            </FadeUp>

            {/* Right Column: Values */}
            <FadeUp className="h-full">
              <div className="glass rounded-card p-6 h-full space-y-4 border border-line">
                <h3 className="font-heading text-lg font-bold text-fg-primary">Values</h3>
                <ul className="space-y-3">
                  {values.map((v) => (
                    <li key={v} className="flex gap-2.5 text-sm text-fg-secondary">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-strong" />
                      <span>{v}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>

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
