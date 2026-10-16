"use client";

import { useSyncExternalStore } from "react";

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}

// Whole seconds, so the snapshot only changes once per tick.
const nowSeconds = () => Math.floor(Date.now() / 1000);

export function Countdown({ target }: { target: string }) {
  // null on the server and during prerender; the clock only runs in the browser.
  const now = useSyncExternalStore(subscribe, nowSeconds, () => null);
  const remaining = now === null ? null : Math.max(0, Math.floor(Date.parse(target) / 1000) - now);

  const units = [
    { label: "Days", value: remaining === null ? null : Math.floor(remaining / 86400) },
    { label: "Hours", value: remaining === null ? null : Math.floor(remaining / 3600) % 24 },
    { label: "Min", value: remaining === null ? null : Math.floor(remaining / 60) % 60 },
    { label: "Sec", value: remaining === null ? null : remaining % 60 },
  ];

  return (
    <div role="timer" aria-label="Time until NTHS Hack starts">
      <dl className="flex justify-center gap-6 sm:gap-10">
        {units.map(({ label, value }) => (
          <div key={label} className="flex flex-col-reverse items-center">
            <dt className="text-xs font-bold tracking-[0.2em] text-foam/80 uppercase">{label}</dt>
            <dd className="font-display text-4xl font-black tabular-nums sm:text-6xl">
              {value === null ? "--" : String(value).padStart(2, "0")}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-2 font-hand text-xl text-foam">until we set sail</p>
    </div>
  );
}
