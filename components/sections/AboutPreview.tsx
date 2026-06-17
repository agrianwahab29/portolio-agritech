import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/animations/FadeUp";
import { profile } from "@/data/profile";
import { ArrowRight } from "lucide-react";

const highlights = ["Web Development", "Sistem Informasi", "AI-Assisted Dev"];

export function AboutPreview() {
  return (
    <Section size="md">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-12">
          <FadeUp>
            <SectionHeading
              eyebrow="About AgriNode"
              title="Membangun solusi digital yang rapi dan fungsional"
            />
            <p className="mt-4 text-base leading-relaxed text-fg-secondary text-justify text-pretty md:text-lg">
              {profile.bio.substring(0, 240) + "..."}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {highlights.map((h) => (
                <Badge key={h} variant="category">{h}</Badge>
              ))}
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand-text transition-all hover:gap-2"
            >
              Read more about me
              <ArrowRight size={15} />
            </Link>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="glass rounded-card p-6 md:p-7">
              <div className="space-y-5">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-fg-muted">
                    Education
                  </p>
                  <p className="mt-1.5 font-heading text-base font-semibold text-fg-primary">
                    {profile.education.degree}
                  </p>
                  <p className="text-sm text-fg-secondary">{profile.education.university}</p>
                  <p className="text-xs text-fg-muted">
                    {profile.education.period} · GPA {profile.education.gpa}
                  </p>
                </div>
                <div className="h-px bg-line" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-fg-muted">
                    Latest Role
                  </p>
                  <p className="mt-1.5 font-heading text-base font-semibold text-fg-primary">
                    Pengolah Data dan Informasi
                  </p>
                  <p className="text-sm text-fg-secondary">
                    Balai Bahasa Provinsi Sulawesi Tenggara
                  </p>
                  <p className="text-xs text-fg-muted">
                    Magang Hub Kemenaker · 6 Bulan
                  </p>
                </div>
                <div className="h-px bg-line" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-fg-muted">
                    Location
                  </p>
                  <p className="mt-1.5 text-sm text-fg-secondary">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  );
}
