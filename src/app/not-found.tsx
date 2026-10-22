import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-shell flex min-h-[70vh] flex-col items-start justify-center py-20">
      <p className="font-mono text-sm text-[var(--color-accent)]">404 / PAGE NOT FOUND</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Nothing here yet.</h1>
      <p className="mt-3 text-[var(--color-text-secondary)]">The page you’re looking for may have moved or is not available.</p>
      <Link className="button-primary mt-8" href="/">Return home <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
