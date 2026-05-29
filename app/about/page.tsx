import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `Tentang Agrian Wahab — ${profile.headline}. ${profile.bioShort}`,
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
      <div className="pt-32">
        <Container>
          <FadeUp className="mb-16 max-w-3xl space-y-6">
            <SectionHeading
              eyebrow="About AgrianTech"
              title={profile.name}
              description={profile.headline}
            />
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              {profile.bio}
            </p>
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              Melalui AgrianTech, saya ingin membangun solusi digital yang tidak
              hanya terlihat modern, tetapi juga memiliki struktur, fungsi, dan
              pengalaman pengguna yang baik.
            </p>
          </FadeUp>

          {/* Education */}
          <FadeUp className="mb-16">
            <div className="glass-card max-w-xl p-8 space-y-2">
              <p className="text-xs uppercase tracking-wider text-text-muted">
                Education
              </p>
              <h3 className="font-heading text-xl font-bold text-text-primary">
                {profile.education.degree}
              </h3>
              <p className="text-text-secondary">
                {profile.education.university}
              </p>
              <p className="text-sm text-text-muted">
                {profile.education.period} &middot; GPA{" "}
                {profile.education.gpa}
              </p>
            </div>
          </FadeUp>

          {/* Values */}
          <FadeUp className="mb-16 space-y-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              Values
            </h2>
            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v} className="flex gap-3 text-text-secondary">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" />
                  {v}
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Skills */}
          <div className="mb-16 space-y-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              Tools & Technologies
            </h2>
            <StaggerReveal className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="glass-card p-5 space-y-3">
                  <h3 className="text-sm font-semibold text-text-primary">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((s) => (
                      <Badge key={s} variant="tech" size="sm">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </StaggerReveal>
          </div>

          {/* CTA */}
          <FadeUp className="mb-16">
            <Button href={profile.cvUrl} size="lg" external>
              <Download size={18} />
              Download CV
            </Button>
          </FadeUp>
        </Container>
      </div>
      <Footer />
    </>
  );
}
