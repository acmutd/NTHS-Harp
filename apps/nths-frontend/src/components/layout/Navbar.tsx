"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { EVENT, NAV_LINKS } from "@/lib/event";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-foam/10 bg-ocean/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="leading-tight">
          <span className="block font-display text-xl font-black">{EVENT.name}</span>
          <span className="block text-[0.65rem] font-bold tracking-[0.2em] text-foam/80 uppercase">
            {EVENT.host}
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-bold tracking-wide uppercase md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-pearl/85 transition hover:text-gold-light">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button href={EVENT.registerUrl} className="px-5 py-2.5">
              Register
            </Button>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-full border-2 border-foam/30 px-4 py-1.5 text-sm font-bold uppercase md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-foam/10 px-4 py-4 md:hidden">
          {[...NAV_LINKS, { href: EVENT.registerUrl, label: "Register" }].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 font-bold uppercase hover:bg-foam/10"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
