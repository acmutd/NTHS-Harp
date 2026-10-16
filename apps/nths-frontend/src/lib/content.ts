// Page copy, kept out of the components so it can be edited in one place.
// Drafted from the NTHS Hack 2027 mockup.

export const HIGHLIGHTS = [
  "One day · 12 hours",
  "UT Dallas campus",
  "100% free",
  "Teams of up to 4",
  "Beginner friendly",
];

export const STATS = [
  { value: "150+", label: "Participants" },
  { value: "$1,000+", label: "In prizes" },
  { value: "40+", label: "Projects shipped" },
];

export const GOALS = [
  {
    lead: "Develop technical and problem-solving skills",
    rest: "through hands-on experience in web development and related technologies.",
  },
  {
    lead: "Build connections",
    rest: "with like-minded peers, college mentors, and professionals in the tech industry.",
  },
  {
    lead: "Showcase original and innovative ideas,",
    rest: "celebrating creativity and collaboration.",
  },
];

export const FEATURES = [
  {
    title: "Experience",
    body: "Learn web development and hackathon skills from the ground up. No prior experience needed.",
  },
  {
    title: "Connections",
    body: "Meet college students, seasoned hackers, and industry mentors who've been where you are.",
  },
  {
    title: "Prizes & recognition",
    body: "Compete for a growing prize pool and demo your project to judges and mentors.",
  },
  {
    title: "Fun & freebies",
    body: "Free food, exclusive hackathon swag, and a day you'll actually remember.",
  },
];

export const WORKSHOP_TOPICS = [
  "Intro to Python & C++",
  "Git & GitHub for your projects",
  "UX & UI basics",
  "Plan & build your first hackathon project",
];

export const PACKING_LIST = [
  "Laptop",
  "Charger",
  "A hacking spirit",
  "Pillow (optional)",
  "Blanket (optional)",
  "Headphones (optional)",
];

export type FaqItem = { question: string; answer: string };

export const FAQ_GROUPS: { title: string; items: FaqItem[] }[] = [
  {
    title: "General",
    items: [
      {
        question: "What is a hackathon?",
        answer:
          "A competition where you and your team build a software project from scratch within 12–36 hours. At NTHS Hack you'll work in teams of up to 4, attend workshops, and compete for prizes in a 12-hour span. Food and fun activities are included!",
      },
      {
        question: "When and where is it?",
        answer:
          "Saturday, April 3rd, 2027 at The University of Texas at Dallas in Richardson, TX. Building and room details go out on Remind closer to the event.",
      },
      {
        question: "How much does it cost?",
        answer: "Nothing. NTHS Hack is free for all high school students in North Texas.",
      },
    ],
  },
  {
    title: "Registration & teams",
    items: [
      {
        question: "Do I need a team to sign up?",
        answer:
          "Nope! If you don't already have a team, we'll help place you in one. On the registration form, simply indicate that you don't have a team yet. You can always find teammates before the event, but every member must register individually.",
      },
      {
        question: "Should every member register separately?",
        answer:
          "Yes. Every team member registers individually so we get an accurate headcount.",
      },
      {
        question: "When does registration open?",
        answer:
          "The date is still to be announced. Join the Remind group for your grade level and you'll hear the moment it opens.",
      },
    ],
  },
];
