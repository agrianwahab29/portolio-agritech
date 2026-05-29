import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center pt-20">
        <Container className="text-center">
          <p className="font-heading text-8xl font-extrabold gradient-text md:text-9xl">
            404
          </p>
          <h1 className="mt-4 font-heading text-2xl font-bold text-text-primary md:text-3xl">
            Page Not Found
          </h1>
          <p className="mt-3 text-text-muted">
            Halaman yang kamu cari tidak ditemukan atau sudah dipindahkan.
          </p>
          <div className="mt-8">
            <Button href="/" size="lg">
              Back to Home
            </Button>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
