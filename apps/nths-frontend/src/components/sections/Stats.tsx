import { Section } from "@/components/ui/Section";
import { STATS } from "@/lib/content";

export function Stats() {
  return (
    <Section
      id="stats"
      depth="40 m"
      place="the reef"
      title="Last year's"
      accent="haul"
      intro="NTHS Hack 2026, in numbers. This year we're going deeper."
    >
      <dl className="grid max-w-4xl gap-6 md:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse border-l-2 border-gold/60 pl-5">
            <dt className="text-sm font-bold tracking-[0.2em] text-foam/80 uppercase">{stat.label}</dt>
            <dd className="font-display text-5xl font-black text-gold-light lg:text-6xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 font-hand text-xl text-foam">← every one of those was built in a single 12-hour day</p>
    </Section>
  );
}
