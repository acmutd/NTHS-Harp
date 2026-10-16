import { Art } from "@/components/ui/Art";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { PACKING_LIST } from "@/lib/content";
import { EVENT } from "@/lib/event";

export function Venue() {
  const { venue } = EVENT;

  return (
    <Section id="venue" depth="800 m" place="the harbor" title="Where we" accent="dock">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Map slot: replace with the team's illustrated map or an embedded map. */}
        <Card tone="sand" className="relative flex min-h-64 flex-col items-center justify-center overflow-hidden text-center">
          <Art name="seashell" className="absolute -bottom-6 -left-6 w-32 opacity-90" />
          <p className="font-hand text-4xl">{venue.shortName}</p>
          <p className="font-hand text-2xl text-abyss/70">{venue.city}</p>
        </Card>

        <Card>
          <h3 className="font-display text-2xl font-black">{venue.name}</h3>
          <p className="mt-2 text-lg font-bold">{venue.address}</p>
          <p className="mt-1 text-pearl/75">
            Building and room details go out on Remind closer to the event, along with the day&apos;s itinerary.
          </p>
          <Button href={venue.directionsUrl} target="_blank" rel="noopener noreferrer" variant="ghost" className="mt-5">
            Get directions
          </Button>

          <h3 className="mt-8 font-display text-xl font-black">Pack for the dive</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {PACKING_LIST.map((item) => (
              <li key={item}>
                <Chip>{item}</Chip>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
