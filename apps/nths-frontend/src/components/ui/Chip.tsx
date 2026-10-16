import type { ReactNode } from "react";

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-foam/25 bg-ocean/40 px-3.5 py-1.5 text-sm font-bold text-pearl/90">
      {children}
    </span>
  );
}

// Monospace pill for things people type, like Remind codes.
export function Code({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md border border-gold/40 bg-gold/10 px-2 py-0.5 font-mono text-sm text-gold-light">
      {children}
    </code>
  );
}
