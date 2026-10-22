import Link from "next/link";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/container";

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--color-border)]">
      <Container className="flex min-h-18 items-center justify-between gap-8">
        <Link aria-label={`${siteConfig.name}, home`} className="font-mono text-sm font-medium tracking-tight" href="/">
          <span className="text-[var(--color-accent)]">//</span> {siteConfig.owner}
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-6">
          {navigation.map((item) => (
            <Link className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
