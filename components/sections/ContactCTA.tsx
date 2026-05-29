import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/animations/FadeUp";
import { Mail, Linkedin, MessageCircle } from "lucide-react";

export function ContactCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial-tl opacity-50" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial-br opacity-50" aria-hidden />
      <Container className="relative z-10">
        <FadeUp className="mx-auto max-w-2xl text-center space-y-6">
          <h2 className="font-heading text-3xl font-bold text-text-primary md:text-5xl">
            Let&apos;s build something great
          </h2>
          <p className="text-base text-text-secondary md:text-lg">
            Tertarik bekerja sama, berdiskusi tentang peluang kerja, atau
            membangun sistem digital bersama AgrianTech? Mari terhubung.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href="mailto:agrianwahab10@gmail.com" size="lg" external>
              <Mail size={18} />
              Email
            </Button>
            <Button
              href="https://linkedin.com/in/agrian-wahab-7695b32a4/"
              variant="secondary"
              size="lg"
              external
            >
              <Linkedin size={18} />
              LinkedIn
            </Button>
            <Button
              href="https://wa.me/6282291134197"
              variant="secondary"
              size="lg"
              external
            >
              <MessageCircle size={18} />
              WhatsApp
            </Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
