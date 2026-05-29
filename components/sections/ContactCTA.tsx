import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { Mail, Linkedin, MessageCircle } from "lucide-react";

export function ContactCTA() {
  return (
    <Section size="md" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-radial-1 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-radial-2 opacity-60" aria-hidden />
      <Container className="relative z-10">
        <FadeUp className="mx-auto max-w-2xl text-center space-y-5">
          <h2 className="font-heading text-3xl font-bold text-fg-primary text-balance md:text-5xl">
            Let&apos;s build something <span className="gradient-text">great</span>
          </h2>
          <p className="text-base text-fg-secondary md:text-lg text-pretty">
            Tertarik bekerja sama, berdiskusi tentang peluang kerja, atau membangun sistem digital? Mari terhubung.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <Button href="mailto:agrianwahab10@gmail.com" size="lg" external>
              <Mail size={17} /> Email
            </Button>
            <Button href="https://linkedin.com/in/agrian-wahab-7695b32a4/" variant="secondary" size="lg" external>
              <Linkedin size={17} /> LinkedIn
            </Button>
            <Button href="https://wa.me/6282291134197" variant="secondary" size="lg" external>
              <MessageCircle size={17} /> WhatsApp
            </Button>
          </div>
        </FadeUp>
      </Container>
    </Section>
  );
}
