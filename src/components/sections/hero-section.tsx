import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="flex min-h-[70vh] items-center py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">
            <span className="status-dot" aria-hidden="true" />
            Frontend development
          </p>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.055em] text-[var(--color-text-primary)] sm:text-7xl" id="hero-heading">
            Building thoughtful digital experiences.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
            A developer portfolio for {siteConfig.owner}. Focused on clear interfaces, resilient systems, and the details that make products feel right.
          </p>
        </div>
      </Container>
    </section>
  );
}
