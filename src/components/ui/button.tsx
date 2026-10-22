import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type CommonButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonLinkProps = CommonButtonProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof CommonButtonProps | "href"> & {
    href: string;
  };

type NativeButtonProps = CommonButtonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonButtonProps | "href"> & {
    href?: undefined;
  };

export type ButtonProps = ButtonLinkProps | NativeButtonProps;

const baseStyles =
  "inline-flex min-w-fit items-center justify-center gap-2 whitespace-nowrap rounded-md border font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-accent-contrast)] hover:border-[var(--color-accent-hover)] hover:bg-[var(--color-accent-hover)]",
  secondary:
    "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-border)] hover:text-[var(--color-accent)]",
  ghost:
    "border-transparent bg-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3.5 text-xs",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-sm",
};

function getButtonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}

export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const {
      href,
      variant = "primary",
      size = "md",
      className,
      children,
      ...anchorProps
    } = props;
    const classes = getButtonClasses(variant, size, className);

    if (href.startsWith("/") || href.startsWith("#")) {
      return (
        <Link className={classes} href={href} {...anchorProps}>
          {children}
        </Link>
      );
    }

    return (
      <a className={classes} href={href} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...buttonProps
  } = props;

  return (
    <button className={getButtonClasses(variant, size, className)} {...buttonProps}>
      {children}
    </button>
  );
}
