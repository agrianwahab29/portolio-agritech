import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeUp } from "@/components/animations/FadeUp";
import { profile } from "@/data/profile";
import { ArrowRight } from "lucide-react";

const highlights = ["Web Development", "Sistem Informasi", "AI-Assisted Dev"];

export function AboutPreview() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeUp className="space-y-6">
            <SectionHeading
              eyebrow="About AgrianTech"
              title="Membangun solusi digital yang rapi dan fungsional"
            />
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              {profile.bio}
            </p>
            <div className="flex flex-wrap gap-2">
              {highlights.map((h) => (
                <Badge key={h} variant="category">
                  {h}
                </Badge>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue transition-colors hover:text-accent-cyan"
            >
              Read more about me
              <ArrowRight size={16} />
            </Link>
          </FadeUp>

          <FadeUp delay={0.2} className="glass-card p-8">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted">
                  Education
                </p>
                <p className="mt-1 font-heading text-lg font-semibold text-text-primary">
                  {profile.education.degree}
                </p>
                <p className="text-sm text-text-secondary">
                  {profile.education.university}
                </p>
                <p className="text-sm text-text-muted">
                  {profile.education.period} &middot; GPA {profile.education.gpa}
                </p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted">
                  Location
                </p>
                <p className="mt-1 text-sm text-text-secondary">
                  {profile.location}
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
