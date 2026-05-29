import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-[80vh] items-center justify-center pt-24">
        <Container className="text-center">
          <p className="font-heading text-7xl font-extrabold gradient-text md:text-9xl">404</p>
          <h1 className="mt-3 font-heading text-2xl font-bold text-fg-primary md:text-3xl">
            Page Not Found
          </h1>
          <p className="mt-2 text-fg-muted">
            Halaman yang kamu cari tidak ditemukan atau sudah dipindahkan.
          </p>
          <div className="mt-6">
            <Button href="/" size="lg">Back to Home</Button>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
