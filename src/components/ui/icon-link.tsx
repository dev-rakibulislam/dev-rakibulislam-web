import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@/components/ui/icons";

type IconLinkProps = {
  href: string;
  label: string;
  className?: string;
};

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function IconLink({ href, label, className }: IconLinkProps) {
  const external = isExternal(href);

  return (
    <a
      className={cn(
        "group inline-flex items-center justify-between gap-4 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-2.5 text-xs text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent-border)] hover:text-[var(--color-text-primary)]",
        className,
      )}
      href={href}
      {...(external ? { rel: "noreferrer", target: "_blank" } : {})}
    >
      <span className="font-mono">{label}</span>
      <ArrowUpRightIcon className="size-3.5 text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-accent)]" />
    </a>
  );
}
