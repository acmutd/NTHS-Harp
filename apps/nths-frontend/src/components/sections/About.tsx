import { Art } from "@/components/ui/Art";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { FEATURES, GOALS } from "@/lib/content";
import { EVENT } from "@/lib/event";

export function About() {
  return (
    <Section id="about" depth="120 m" place="the wreck" title="You belong on" accent="this crew">
      <Art name="ship" className="absolute top-12 right-[4%] hidden w-36 -rotate-6 opacity-80 lg:block xl:w-44" />
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-5 text-lg text-pearl/85">
          <p>
            The Association for Computing Machinery at The University of Texas at Dallas is hosting the{" "}
            <strong className="text-pearl">{EVENT.edition} edition</strong> of the {EVENT.fullName}: a one-day,
            beginner-friendly competition where high schoolers from across North Texas team up to learn,
            collaborate, and build creative solutions with technology.
          </p>
          <p>
            Students of every technical background design projects from scratch, showcase their skills, and
            compete for prizes. Along the way you&apos;ll attend workshops and meet college mentors and industry
            professionals.
          </p>
          <ul className="space-y-4 pt-2 text-base">
            {GOALS.map((goal) => (
              <li key={goal.lead} className="flex gap-3">
                <span aria-hidden className="mt-0.5 text-gold">✓</span>
                <span>
                  <strong className="text-pearl">{goal.lead}</strong> {goal.rest}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="space-y-4">
          {FEATURES.map((feature) => (
            <li key={feature.title}>
              {/* Icon slot: swap in the team's drawings per feature. */}
              <Card className="py-5 sm:py-6">
                <h3 className="font-display text-xl font-black">{feature.title}</h3>
                <p className="mt-1 text-pearl/75">{feature.body}</p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
