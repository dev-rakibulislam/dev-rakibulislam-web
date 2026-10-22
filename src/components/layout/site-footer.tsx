import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <Container className="flex min-h-16 flex-col justify-center gap-2 py-4 text-xs text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.owner}</p>
        <p className="font-mono">Designed and built with care.</p>
      </Container>
    </footer>
  );
}
