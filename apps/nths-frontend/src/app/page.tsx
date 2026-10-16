// Starting point for the landing page.
// Already set up: Tailwind theme tokens and fonts (globals.css, layout.tsx),
// the team's drawings in public/art, and event facts and copy in src/lib.
export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4 bg-linear-to-b from-shallow via-deep to-abyss px-4 text-center">
      <h1 className="font-heading text-5xl sm:text-7xl">NTHS Hack</h1>
      <p className="font-script text-3xl text-gold">Coming soon</p>
    </main>
  );
}
