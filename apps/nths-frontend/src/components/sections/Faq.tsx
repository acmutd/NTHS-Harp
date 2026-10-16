import { Art } from "@/components/ui/Art";
import { Section } from "@/components/ui/Section";
import { FAQ_GROUPS } from "@/lib/content";
import { EVENT } from "@/lib/event";

export function Faq() {
  return (
    <Section
      id="faq"
      depth="1,200 m"
      place="the trench"
      title="Questions from"
      accent="the deep"
      intro={
        <>
          Still have one after this? Email{" "}
          <a href={`mailto:${EVENT.email}`} className="text-gold hover:underline">
            {EVENT.email}
          </a>{" "}
          and we&apos;ll surface an answer.
        </>
      }
    >
      <Art name="tube-coral" className="absolute bottom-0 -left-8 hidden w-40 opacity-80 xl:block" />
      <div className="grid gap-10 md:grid-cols-2">
        {FAQ_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="font-hand text-3xl text-foam">{group.title}</h3>
            <div className="mt-3 divide-y divide-foam/15 border-y border-foam/15">
              {group.items.map((item) => (
                // Native accordion: details sharing a name close each other when one opens.
                <details key={item.question} name={`faq-${group.title}`} className="group py-1">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-bold [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span
                      aria-hidden
                      className="flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-4 text-pearl/75">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
