import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<"a"> & {
  variant?: "primary" | "ghost";
};

const variants = {
  primary:
    "bg-linear-to-b from-gold-light to-gold text-abyss shadow-[0_6px_0_-1px_rgb(0_0_0/0.25)] hover:brightness-105",
  ghost: "border-2 border-foam/40 text-pearl hover:border-foam hover:bg-foam/10",
};

// Rendered as a link: every call to action on this site navigates somewhere.
export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold tracking-wide uppercase transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
