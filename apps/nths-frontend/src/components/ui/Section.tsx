import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  /** Depth label for the eyebrow, e.g. "400 m". */
  depth: string;
  /** Place name for the eyebrow, e.g. "the route". */
  place: string;
  /** Plain part of the heading. */
  title: string;
  /** The one themed word(s) set in the script face. */
  accent: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, depth, place, title, accent, intro, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="flex items-center gap-3 font-hand text-xl text-foam">
          <span aria-hidden className="h-px w-8 bg-foam/50" />
          <span aria-hidden>↓</span>
          {depth} · {place}
        </p>
        <h2 className="mt-2 font-heading text-4xl text-pearl sm:text-6xl">
          {title} <span className="font-script font-normal text-gold">{accent}</span>
        </h2>
        {intro && <div className="mt-4 max-w-2xl text-lg text-pearl/80">{intro}</div>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
