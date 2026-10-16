import Image from "next/image";

// The team's drawings, exported to public/art. Sizes are the exported pixel dimensions.
const ART = {
  angelfish: [676, 900],
  "branch-coral": [900, 886],
  kelp: [838, 900],
  seagrass: [628, 900],
  seahorse: [507, 900],
  seashell: [900, 790],
  "sea-turtle": [900, 680],
  ship: [702, 900],
  "treasure-chest": [900, 751],
  "tube-coral": [900, 721],
} as const;

export type ArtName = keyof typeof ART;

type ArtProps = {
  name: ArtName;
  /** Tailwind classes for size and position; the image is decorative. */
  className?: string;
  /** Load immediately instead of lazily; use for art visible on first paint. */
  eager?: boolean;
};

export function Art({ name, className = "", eager }: ArtProps) {
  const [width, height] = ART[name];
  return (
    <Image
      src={`/art/${name}.webp`}
      alt=""
      aria-hidden
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      className={`pointer-events-none select-none ${className}`}
    />
  );
}
