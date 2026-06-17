import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { socials } from "@/data/socials";
import {
  Mail,
  Linkedin,
  MessageCircle,
  Github,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hubungi Agrian Wahab (AgriNode) untuk peluang kerja, kolaborasi, atau pembuatan sistem digital.",
};

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Linkedin,
  MessageCircle,
  Github,
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Section size="lg" className="pt-28">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            description="Tertarik bekerja sama, berdiskusi tentang peluang kerja, atau membangun sistem digital? Mari terhubung."
            className="mb-10 md:mb-12"
          />
          <StaggerReveal className="grid gap-4 sm:grid-cols-2">
            {socials.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass glass-hover flex items-center justify-between gap-4 rounded-card p-5 md:p-6 hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="flex items-center gap-4">
                    {Icon && (
                      <span className="flex h-11 w-11 items-center justify-center rounded-button bg-brand/[0.08] text-brand">
                        <Icon size={20} />
                      </span>
                    )}
                    <div>
                      <p className="font-heading text-base font-semibold text-fg-primary">
                        {s.platform}
                      </p>
                      <p className="text-sm text-fg-muted">{s.label}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-fg-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
                  />
                </a>
              );
            })}
          </StaggerReveal>
        </Container>
      </Section>
      <Footer />
    </>
  );
}
