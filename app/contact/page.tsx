import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { socials } from "@/data/socials";
import { Mail, Linkedin, MessageCircle, Github, ArrowUpRight, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hubungi Agrian Wahab (AgrianTech) untuk peluang kerja, kolaborasi, atau pembuatan sistem digital.",
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
      <div className="pt-32">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Get in Touch"
            description="Tertarik bekerja sama, berdiskusi tentang peluang kerja, atau membangun sistem digital bersama AgrianTech? Mari terhubung."
            className="mb-12"
          />
          <StaggerReveal className="grid gap-6 sm:grid-cols-2">
            {socials.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card flex items-center justify-between gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-blue"
                >
                  <div className="flex items-center gap-4">
                    {Icon && (
                      <span className="flex h-12 w-12 items-center justify-center rounded-card bg-accent-blue/10 text-accent-blue">
                        <Icon size={22} />
                      </span>
                    )}
                    <div>
                      <p className="font-heading text-base font-semibold text-text-primary">
                        {s.platform}
                      </p>
                      <p className="text-sm text-text-muted">{s.label}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-blue"
                  />
                </a>
              );
            })}
          </StaggerReveal>
        </Container>
      </div>
      <Footer />
    </>
  );
}
