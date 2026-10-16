import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { EVENT } from "@/lib/event";

export function Sponsor() {
  return (
    <Section id="sponsor" depth="2,000 m" place="the expedition" title="Fund the" accent="expedition">
      <Card tone="sand" className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h3 className="font-display text-2xl font-black sm:text-3xl">
            Put your name in front of 150+ North Texas high schoolers building their first projects.
          </h3>
          <p className="mt-3 text-abyss/80">
            Sponsors cover food, prizes, and swag — and get to meet the next generation of builders in person.
            Mentor slots, judging seats, and workshop hosting are all on the table.
          </p>
          {/* Sponsor logos go here once confirmed. */}
          <p className="mt-4 font-hand text-xl text-abyss/70">→ sponsor logos will wash up here soon</p>
        </div>
        <Button href={`mailto:${EVENT.email}`} className="shrink-0">
          Email {EVENT.email}
        </Button>
      </Card>
    </Section>
  );
}
