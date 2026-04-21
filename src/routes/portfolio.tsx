import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Asha Tapkigen" },
      { name: "description", content: "A selection of social media campaigns, content sets and brand work by Asha Tapkigen." },
      { property: "og:title", content: "Portfolio — Asha Tapkigen" },
      { property: "og:description", content: "Selected social media work." },
    ],
  }),
  component: Portfolio,
});

const works = [
  { title: "Wellness Studio", tag: "Content & Strategy", tone: "from-[oklch(0.92_0.04_70)] to-[oklch(0.85_0.05_55)]" },
  { title: "Boutique Cafe", tag: "Reels & Engagement", tone: "from-[oklch(0.95_0.025_85)] to-[oklch(0.88_0.04_75)]" },
  { title: "Skincare Brand", tag: "Launch Campaign", tone: "from-[oklch(0.93_0.03_60)] to-[oklch(0.86_0.05_45)]" },
  { title: "Local Bookstore", tag: "Community Building", tone: "from-[oklch(0.94_0.02_80)] to-[oklch(0.88_0.035_65)]" },
  { title: "Lifestyle Coach", tag: "Personal Branding", tone: "from-[oklch(0.92_0.04_75)] to-[oklch(0.84_0.06_50)]" },
  { title: "Home Studio", tag: "Full Management", tone: "from-[oklch(0.95_0.02_85)] to-[oklch(0.87_0.04_70)]" },
];

function Portfolio() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Portfolio</p>
        <h1 className="mt-3 font-serif text-5xl text-foreground">Selected work</h1>
        <p className="mt-5 text-muted-foreground text-lg">
          A glimpse of the brands I've had the joy of working with.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((w) => (
          <article
            key={w.title}
            className="group rounded-3xl overflow-hidden border border-border/60 bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1"
          >
            <div className={`aspect-[4/5] bg-gradient-to-br ${w.tone} flex items-end p-6`}>
              <span className="text-xs uppercase tracking-widest text-foreground/60 bg-background/70 backdrop-blur px-3 py-1 rounded-full">
                {w.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl text-foreground">{w.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Case study coming soon</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}