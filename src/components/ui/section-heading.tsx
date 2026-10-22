import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
          <span aria-hidden="true" className="mr-2 text-[var(--color-text-muted)]">
            /
          </span>
          {eyebrow}
        </p>
        <h2
          className="mt-4 text-balance text-3xl font-semibold tracking-[-0.035em] text-[var(--color-text-primary)] sm:text-4xl"
          id={id}
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-text-secondary)]">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
