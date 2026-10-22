import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  variant?: "accent" | "neutral";
  className?: string;
};

export function Badge({
  children,
  variant = "accent",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em]",
        variant === "accent"
          ? "border-[var(--color-accent-border)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]"
          : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)]",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 rounded-full",
          variant === "accent"
            ? "bg-[var(--color-accent)]"
            : "bg-[var(--color-text-muted)]",
        )}
      />
      {children}
    </span>
  );
}
