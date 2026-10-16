import { Art } from "@/components/ui/Art";
import { Button } from "@/components/ui/Button";
import { EVENT } from "@/lib/event";

// The seafloor: final call to action, sitting right above the sand footer.
export function Register() {
  return (
    <section id="register" className="relative overflow-hidden pt-20 pb-40 text-center sm:pb-48">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
        <Art name="treasure-chest" className="mx-auto w-44 drop-shadow-[0_0_40px_rgb(244_185_66/0.35)] sm:w-56" />
        <p className="mt-6 font-hand text-xl text-foam">↓ 3,800 m · the seafloor</p>
        <h2 className="mt-2 font-heading text-4xl sm:text-6xl">
          You found it. <span className="font-script font-normal text-coral">X marks the spot.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-pearl/80">
          Registration opens soon. Join a Remind group now so you hear the moment it does, and claim your seat for
          April 3rd.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <Button href={EVENT.registerUrl}>Register for NTHS Hack 2027</Button>
          <div className="flex flex-col gap-3 sm:flex-row">
            {EVENT.remind.map((r) => (
              <Button key={r.code} href={`sms:${r.number}?body=${encodeURIComponent(r.code)}`} variant="ghost">
                Text {r.code} to {r.number}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Reef line along the seabed */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between px-2">
        <Art name="kelp" className="w-28 sm:w-40" />
        <Art name="seagrass" className="hidden w-24 sm:block sm:w-32" />
        <Art name="branch-coral" className="hidden w-28 md:block" />
        <Art name="tube-coral" className="w-28 sm:w-36" />
      </div>
    </section>
  );
}
