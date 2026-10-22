export default function Loading() {
  return (
    <div aria-label="Loading page" className="container-shell flex min-h-[70vh] items-center" role="status">
      <span className="font-mono text-sm text-[var(--color-text-secondary)]">Loading<span className="text-[var(--color-accent)]">...</span></span>
    </div>
  );
}
