// Single source of truth for event facts used across the site.
// Update these when details are confirmed.

export const EVENT = {
  name: "NTHS Hack",
  fullName: "North Texas High School Hackathon",
  host: "ACM UT Dallas",
  edition: "fourth",
  dateLabel: "Saturday, April 3, 2027",
  // TODO: confirm the official start time; used by the countdown.
  startsAt: "2027-04-03T08:00:00-05:00",
  email: "outreach@acmutd.co",
  // TODO: point at the Harp portal registration page once it is live.
  registerUrl: "#register",
  venue: {
    name: "The University of Texas at Dallas",
    shortName: "UT Dallas",
    city: "Richardson, TX",
    address: "800 W Campbell Rd, Richardson, TX 75080",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=800+W+Campbell+Rd+Richardson+TX+75080",
  },
  remind: [
    { group: "Freshmen & Sophomores", code: "@nths-freso", number: "81010" },
    { group: "Juniors & Seniors", code: "@nths-jrsr", number: "81010" },
  ],
} as const;

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#route", label: "The Route" },
  { href: "#venue", label: "Venue" },
  { href: "#faq", label: "FAQ" },
  { href: "#sponsor", label: "Sponsor" },
] as const;
