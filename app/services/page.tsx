import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { StaggerReveal } from "@/components/animations/StaggerReveal";
import { services } from "@/data/services";
import {
  Rocket,
  Building2,
  User,
  Database,
  Bot,
  PenTool,
  FileText,
  Gauge,
  Check,
  ArrowRight,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Layanan pengembangan website premium, sistem informasi, integrasi AI Agent, desain UI/UX, dan optimasi performa.",
};

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Building2,
  User,
  Database,
  Bot,
  PenTool,
  FileText,
  Gauge,
};

const serviceDetails: Record<string, string[]> = {
  "landing-page": [
    "Halaman konversi tinggi untuk promosi produk atau event",
    "Integrasi analitik & tracking pixel (GTM, FB Pixel)",
    "Animasi interaktif GSAP & ScrollTrigger premium",
    "Optimasi kecepatan loading super cepat (100/100 Mobile & Desktop)",
  ],
  "company-profile": [
    "Presentasi visi misi, portofolio, dan layanan bisnis/instansi",
    "Desain elegan berbasis glassmorphism & tema modern",
    "Formulir kontak interaktif & integrasi peta lokasi",
    "SEO-friendly agar mudah ditemukan di pencarian Google",
  ],
  "portfolio": [
    "Showcase hasil karya personal atau profesional secara representatif",
    "Dukungan studi kasus mendalam (Case Studies/MDX)",
    "Tata letak modular & interaktivitas tinggi",
    "CV download & integrasi tautan media sosial profesional",
  ],
  "sistem-informasi": [
    "Sistem manajemen basis data berbasis web yang aman & responsif",
    "Fitur CRUD, manajemen peran user (Roles & Permissions)",
    "Workflow approval terstruktur dan berantai",
    "Export/Import data dalam format Excel, PDF, & CSV",
  ],
  "ai-agent": [
    "Pipeline agen AI otonom untuk otomasi alur kerja",
    "Mesin pembuat dokumen otomatis berbasis prompt (Docgen)",
    "Integrasi Retrieval-Augmented Generation (RAG) berbasis dokumen lokal",
    "Koneksi aman dengan API LLM komersial & open-source",
  ],
  "ui-ux": [
    "Perancangan wireframe & purwarupa (prototype) fidelitas tinggi di Figma",
    "Studi alur kerja pengguna (User Flow) & pemetaan arsitektur informasi",
    "Dokumentasi design system (warna, tipografi, grid, komponen)",
    "Spesifikasi motion & mikro-interaksi siap implementasi developer",
  ],
  "documentation": [
    "Pembuatan dokumen prasyarat bisnis & teknis (BRD, PRD, SRS)",
    "Menyusun standalone build guide operasional untuk AI agent (AGENTS.md)",
    "Penyusunan API docs interaktif (Swagger / OpenAPI)",
    "Diagram alir arsitektur sistem informasi",
  ],
  "optimization": [
    "Optimasi skor performa Core Web Vitals Next.js / React",
    "Perbaikan struktur metadata & JSON-LD schema untuk SEO maksimal",
    "Kesesuaian standar aksesibilitas web internasional (WCAG 2.1)",
    "Laporan audit performa berkala & pembersihan dependency",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <Section size="lg" className="pt-28 relative overflow-hidden">
        {/* Subtle background gradients */}
        <div className="pointer-events-none absolute inset-0 bg-radial-tl opacity-30" />
        <div className="pointer-events-none absolute inset-0 bg-radial-br opacity-30" />

        <Container className="relative z-10">
          <FadeUp className="mb-16 text-center max-w-3xl mx-auto space-y-4">
            <SectionHeading
              eyebrow="My Services"
              title="Professional Digital Services"
              description="Menawarkan layanan pengembangan perangkat lunak modern, integrasi kecerdasan buatan, desain UI/UX, dan optimalisasi sistem dengan pendekatan berstandar premium."
              className="text-center"
            />
          </FadeUp>

          <StaggerReveal className="grid gap-6 md:grid-cols-2 lg:gap-8 mb-20">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              const details = serviceDetails[service.id] || [];
              return (
                <article
                  key={service.id}
                  className="group flex flex-col glass rounded-card border border-line p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-button bg-brand/[0.08] text-brand transition-transform duration-300 group-hover:scale-110">
                      {Icon && <Icon size={22} />}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-fg-primary leading-tight">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-fg-secondary">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {details.length > 0 && (
                    <ul className="mt-6 flex-1 space-y-2.5 border-t border-line/60 pt-5">
                      {details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-fg-muted leading-relaxed">
                          <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </StaggerReveal>

          {/* Call to Action (CTA) Section */}
          <FadeUp className="max-w-4xl mx-auto">
            <div className="glass rounded-card border border-brand/20 p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
              {/* Decorative radial overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand/5 via-transparent to-brand/5" />
              
              <div className="relative z-10 space-y-4">
                <Badge variant="tech" size="sm">Hubungi Saya</Badge>
                <h2 className="font-heading text-2xl font-bold tracking-tight text-fg-primary md:text-3xl lg:text-4xl">
                  Tertarik untuk Berkolaborasi?
                </h2>
                <p className="mx-auto max-w-2xl text-base text-fg-secondary leading-relaxed">
                  Punya proyek menarik atau butuh konsultasi teknis terkait sistem informasi dan AI agent? Mari berdiskusi tentang bagaimana saya bisa membantu mewujudkan solusi digital Anda.
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <Button href="/contact" size="lg">
                    <MessageCircle size={18} />
                    Mulai Diskusi
                  </Button>
                  <Button href="/projects" variant="secondary" size="lg">
                    Lihat Portofolio
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </FadeUp>
        </Container>
      </Section>
      <Footer />
    </>
  );
}
