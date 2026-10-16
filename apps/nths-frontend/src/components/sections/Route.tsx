import type { ReactNode } from "react";
import { Art } from "@/components/ui/Art";
import { Card } from "@/components/ui/Card";
import { Chip, Code } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { WORKSHOP_TOPICS } from "@/lib/content";
import { EVENT } from "@/lib/event";

type Stop = { marker: string; when: string; title: string; body: ReactNode; final?: boolean };

const STOPS: Stop[] = [
  {
    marker: "1",
    when: "Date TBA · monthly, in person + virtual",
    title: "Workshop series sets sail",
    body: (
      <>
        <p>
          Sessions cover hackathon basics, web development skills, and tips for showcasing your project.
          Can&apos;t make it in person? Every workshop has a virtual meeting link.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {WORKSHOP_TOPICS.map((topic) => (
            <li key={topic}>
              <Chip>{topic}</Chip>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    marker: "2",
    when: "Date TBA · spots are limited",
    title: "Registration opens",
    body: (
      <p>
        Sign up early. Every team member registers individually so we get an accurate headcount — and if you
        don&apos;t have a team yet, just say so on the form and we&apos;ll place you in one.
      </p>
    ),
  },
  {
    marker: "3",
    when: "As soon as you register",
    title: "Join your Remind group",
    body: (
      <>
        <p>
          All updates, itineraries, workshop links, livestreams, and reminders go out through Remind. Every
          participant must join the group for their grade level.
        </p>
        <ul className="mt-4 space-y-2">
          {EVENT.remind.map((r) => (
            <li key={r.code}>
              {r.group}: text <Code>{r.code}</Code> to <Code>{r.number}</Code>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    marker: "✕",
    when: `${EVENT.dateLabel} · ${EVENT.venue.shortName}`,
    title: "X marks the spot: hack day",
    body: <p>Twelve hours, teams of up to four, a challenge brief at kickoff, food and prizes.</p>,
    final: true,
  },
];

export function Route() {
  return (
    <Section
      id="route"
      depth="400 m"
      place="the route"
      title="Follow the"
      accent="map"
      intro="Four stops between now and hack day. Workshops are monthly, in person with a virtual link, and you don't need to attend them to compete — but they'll make the day a lot more fun."
    >
      <Art name="branch-coral" className="absolute -right-10 bottom-10 hidden w-48 opacity-80 xl:block" />
      <ol className="relative space-y-6 before:absolute before:top-6 before:bottom-6 before:left-6 before:border-l-2 before:border-dashed before:border-foam/30">
        {STOPS.map((stop) => (
          <li key={stop.title} className="relative flex gap-4 sm:gap-6">
            <span
              aria-hidden
              className={`z-10 flex size-12 shrink-0 items-center justify-center rounded-full border-2 font-hand text-2xl ${
                stop.final ? "border-coral bg-coral/20 text-coral" : "border-foam/40 bg-deep text-foam"
              }`}
            >
              {stop.marker}
            </span>
            <Card className={`flex-1 ${stop.final ? "border-coral/60" : ""}`}>
              <p className={`font-hand text-xl ${stop.final ? "text-coral" : "text-gold"}`}>{stop.when}</p>
              <h3 className="font-display text-2xl font-black">{stop.title}</h3>
              <div className="mt-2 text-pearl/75">{stop.body}</div>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
