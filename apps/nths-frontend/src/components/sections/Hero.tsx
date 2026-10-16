import { Countdown } from "@/components/Countdown";
import { Art, type ArtName } from "@/components/ui/Art";
import { Button } from "@/components/ui/Button";
import { HIGHLIGHTS } from "@/lib/content";
import { EVENT } from "@/lib/event";

type Piece = { name: ArtName; className: string; still?: boolean };

// Reef framing the hero from both bottom corners, listed back to front.
// Plants sway from their base; animation delays keep them out of sync.
const REEF: Piece[] = [
  // Left bank
  { name: "branch-coral", className: "bottom-[16%] -left-[3%] hidden w-[clamp(120px,20vw,340px)] opacity-90 sm:block [animation-delay:-3s]" },
  { name: "kelp", className: "bottom-0 left-[8%] w-[clamp(110px,17vw,300px)] [animation-delay:-1s]" },
  { name: "tube-coral", className: "bottom-0 left-[18%] hidden w-[clamp(80px,12vw,210px)] sm:block [animation-delay:-5s]" },
  { name: "seagrass", className: "bottom-0 -left-[3%] w-[clamp(110px,16vw,280px)] [animation-delay:-2s]" },
  // Right bank
  { name: "branch-coral", className: "bottom-[14%] -right-[3%] hidden w-[clamp(120px,19vw,320px)] -scale-x-100 opacity-90 sm:block [animation-delay:-4s]" },
  { name: "kelp", className: "bottom-0 right-[13%] hidden w-[clamp(100px,16vw,280px)] -scale-x-100 sm:block [animation-delay:-6s]" },
  { name: "tube-coral", className: "bottom-0 -right-[4%] w-[clamp(120px,18vw,300px)] [animation-delay:-2.5s]" },
  { name: "seashell", className: "bottom-[1%] right-[19%] w-[clamp(56px,8vw,150px)]", still: true },
];

// Sea life drifting in open water, kept clear of the centered content.
const SWIMMERS: Piece[] = [
  { name: "angelfish", className: "top-[20%] left-[6%] w-[clamp(70px,9vw,150px)] -rotate-6" },
  { name: "sea-turtle", className: "top-[30%] right-[5%] hidden w-[clamp(100px,12vw,210px)] -scale-x-100 md:block [animation-delay:-2s]" },
  { name: "seahorse", className: "bottom-[34%] left-[19%] hidden w-[clamp(36px,3.5vw,64px)] lg:block [animation-delay:-4s]" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden pt-24 pb-28 text-center sm:pt-28 sm:pb-20">
      {/* Watercolor water, darkened toward the edges like looking through a reef.
          The mask fades it out at the bottom so it blends into the page's depth gradient. */}
      <div aria-hidden className="absolute inset-0 -z-20 mask-b-from-70%">
        <div className="absolute inset-0 bg-shallow bg-[url(/art/ocean-surface.webp)] bg-cover bg-top" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,transparent_30%,rgb(10_46_82/0.65)_100%)]" />
      </div>

      <div aria-hidden className="absolute inset-0 -z-10">
        {SWIMMERS.map((piece) => (
          <Art key={piece.name} name={piece.name} eager className={`absolute motion-safe:animate-bob ${piece.className}`} />
        ))}
        {REEF.map((piece, i) => (
          <Art
            key={`${piece.name}-${i}`}
            name={piece.name}
            eager
            className={`absolute origin-bottom drop-shadow-[0_8px_16px_rgb(6_24_46/0.35)] ${piece.still ? "" : "motion-safe:animate-sway"} ${piece.className}`}
          />
        ))}
      </div>

      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 [text-shadow:0_2px_12px_rgb(6_24_46/0.45)]">
        <p className="text-sm font-bold tracking-[0.25em] text-foam uppercase">{EVENT.host} presents</p>

        <h1 className="mt-4 font-heading">
          <span className="block text-2xl tracking-[0.15em] text-foam uppercase sm:text-4xl">North Texas</span>
          <span className="block text-5xl leading-none text-pearl uppercase sm:text-7xl md:text-8xl">
            High School
          </span>
          <span className="mt-2 block font-script text-6xl font-normal text-gold drop-shadow-lg sm:text-8xl md:text-9xl">
            Hackathon
          </span>
        </h1>

        <p className="mx-auto mt-6 inline-block rounded-xl border-2 border-foam/50 bg-deep/50 px-6 py-3 font-display text-2xl font-black tracking-wide uppercase backdrop-blur-sm sm:text-3xl">
          April 3<sup>rd</sup>, 2027
        </p>
        <p className="mt-3 font-hand text-xl text-foam">↓ you are here: the surface. dive in</p>

        <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-bold tracking-wide uppercase">
          {HIGHLIGHTS.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span aria-hidden className="size-1.5 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href={EVENT.registerUrl}>Become a hacker →</Button>
          <Button href="#sponsor" variant="ghost" className="bg-deep/40 backdrop-blur-sm">
            Sponsor the expedition
          </Button>
        </div>

        <div className="mt-10">
          <Countdown target={EVENT.startsAt} />
        </div>
      </div>
    </section>
  );
}
