import { EVENT } from "@/lib/event";

export function Footer() {
  return (
    <footer className="bg-linear-to-b from-sand to-[#c9a865] text-abyss">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 pt-14 pb-8 sm:px-6 md:grid-cols-2">
        <div>
          <p className="font-script text-3xl">{EVENT.fullName}</p>
          <p className="mt-3">
            Hosted by {EVENT.host} Outreach ·{" "}
            <a href={`mailto:${EVENT.email}`} className="font-bold underline-offset-2 hover:underline">
              {EVENT.email}
            </a>
          </p>
          <p className="mt-2 text-abyss/80">
            {EVENT.dateLabel} · {EVENT.venue.name} · Free for all high school students in North Texas.
          </p>
        </div>
        <div>
          <h2 className="font-hand text-2xl font-bold">Statement of liability</h2>
          <p className="mt-2 text-sm text-abyss/80">
            The University of Texas at Dallas (UTD) will not assume custodial responsibility for minors
            participating in ACM UT Dallas North Texas High School Hackathon. Custodial responsibility will
            remain with K-12 teachers, parents, legal guardians, or designated chaperones. UTD and ACM UT
            Dallas Outreach are not liable for any injuries, lost or stolen belongings, or other incidents
            that may occur during the event. By participating, attendees and their guardians acknowledge and
            accept these terms.
          </p>
        </div>
        <div className="flex flex-col gap-2 border-t border-abyss/20 pt-6 text-sm text-abyss/80 sm:flex-row sm:justify-between md:col-span-2">
          <p>Made with ❤️ by the ACM UT Dallas Outreach team</p>
          <p>© 2027 ACM UT Dallas</p>
        </div>
      </div>
    </footer>
  );
}
