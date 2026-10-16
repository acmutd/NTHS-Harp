import type { ComponentProps } from "react";

const tones = {
  // Translucent over the ocean: route stops, FAQ panels, features.
  glass: "border-2 border-foam/20 bg-deep/60 backdrop-blur-sm",
  // The inverse, for things that sit on the seabed: sponsor pitch, map, footer.
  sand: "border-2 border-sand bg-linear-to-b from-[#f3dea6] to-sand text-abyss",
};

type CardProps = ComponentProps<"div"> & { tone?: keyof typeof tones };

export function Card({ tone = "glass", className = "", ...props }: CardProps) {
  return <div className={`rounded-card p-6 sm:p-8 ${tones[tone]} ${className}`} {...props} />;
}
