"use client";

import { useSyncExternalStore } from "react";

// Depth shown at the very bottom of the page, in meters.
const MAX_DEPTH = 3800;

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
  };
}

// Rounded to 0.1% so scrolling doesn't re-render on every pixel.
function scrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return max > 0 ? Math.round((window.scrollY / max) * 1000) / 1000 : 0;
}

export function DepthGauge() {
  const progress = useSyncExternalStore(subscribe, scrollProgress, () => 0);
  const depth = Math.round(progress * MAX_DEPTH);

  return (
    <div
      aria-hidden
      className="fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 lg:flex"
    >
      <span className="text-[0.65rem] font-bold tracking-[0.2em] text-foam/80">DEPTH</span>
      <div className="relative h-48 w-1.5 overflow-hidden rounded-full bg-foam/15">
        <div
          className="absolute inset-x-0 top-0 rounded-full bg-linear-to-b from-foam to-gold"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
      <span className="font-hand text-lg text-foam">{depth.toLocaleString()} m</span>
    </div>
  );
}
