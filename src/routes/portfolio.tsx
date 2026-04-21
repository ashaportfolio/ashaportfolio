import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/lushglow-logo.jpg";
import work1 from "@/assets/work-gentle-routine.jpg";
import work2 from "@/assets/work-skin-myths.jpg";
import work3 from "@/assets/work-thirsty.jpg";

const samples = [
  {
    src: work1,
    title: "Gentle Routine",
    caption: "POV: a gentle routine that actually works ✨",
    likes: "1,284",
  },
  {
    src: work2,
    title: "Skin Myths",
    caption: "5 things to stop doing in your PM routine ❌",
    likes: "2,012",
  },
  {
    src: work3,
    title: "Hydration Hook",
    caption: "Your skin is thirsty 💔 Type THIRSTY for the serum.",
    likes: "956",
  },
];

function PhoneMockup({ src, title, caption, likes }: { src: string; title: string; caption: string; likes: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[260px]">
      {/* Phone shell */}
      <div className="relative rounded-[2.5rem] bg-foreground/95 p-2 shadow-[0_30px_60px_-20px_oklch(0.42_0.04_50/0.35)] ring-1 ring-foreground/10">
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2rem] bg-background">
          {/* Notch */}
          <div className="absolute left-1/2 top-1.5 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-foreground/95" />
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-2 pb-1.5 text-[10px] font-medium text-foreground">
            <span>9:41</span>
            <span className="opacity-60">•••</span>
          </div>
          {/* IG header */}
          <div className="flex items-center justify-between border-b border-border/60 px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-[oklch(0.7_0.18_30)] via-[oklch(0.65_0.22_350)] to-[oklch(0.6_0.2_290)] p-[2px]">
                <div className="h-full w-full rounded-full bg-background p-[2px]">
                  <div className="h-full w-full rounded-full bg-[oklch(0.85_0.05_55)]" />
                </div>
              </div>
              <div className="leading-tight">
                <div className="text-[11px] font-semibold text-foreground">lushglow.skin</div>
                <div className="text-[9px] text-muted-foreground">Sponsored</div>
              </div>
            </div>
            <span className="text-foreground/70 text-base leading-none">⋯</span>
          </div>
          {/* Image — use object-contain so text in the post is never cropped */}
          <div className="bg-[oklch(0.94_0.02_75)] flex items-center justify-center">
            <img src={src} alt={title} className="w-full h-auto object-contain" loading="lazy" />
          </div>
          {/* Action row */}
          <div className="flex items-center justify-between px-3 pt-2 pb-1 text-foreground">
            <div className="flex items-center gap-3 text-[15px]">
              <span aria-hidden>♡</span>
              <span aria-hidden>💬</span>
              <span aria-hidden>↗</span>
            </div>
            <span aria-hidden className="text-[15px]">⌘</span>
          </div>
          <div className="px-3 pb-3 text-[10px] leading-snug text-foreground">
            <div className="font-semibold">{likes} likes</div>
            <div className="mt-0.5 text-foreground/80 break-words">
              <span className="font-semibold">lushglow.skin</span>{" "}
              <span className="text-foreground/70">{caption}</span>
            </div>
            <div className="mt-1 text-muted-foreground text-[9px] uppercase tracking-wider">2 hours ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InsightsPhone() {
  const metrics = [
    { label: "Followers", from: "300", to: "900+", change: "+200%" },
    { label: "Reach", from: "12K", to: "36K", change: "3×" },
    { label: "Engagement", from: "2.1%", to: "3.4%", change: "+60%" },
  ];
  const bars = [30, 42, 38, 55, 48, 70, 65, 82, 78, 95, 88, 100];
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="relative rounded-[2.5rem] bg-foreground/95 p-2 shadow-[0_30px_60px_-20px_oklch(0.42_0.04_50/0.35)] ring-1 ring-foreground/10">
        <div className="relative overflow-hidden rounded-[2rem] bg-background">
          {/* Notch */}
          <div className="absolute left-1/2 top-1.5 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-foreground/95" />
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-2 pb-1.5 text-[10px] font-medium text-foreground">
            <span>9:41</span>
            <span className="opacity-60">•••</span>
          </div>
          {/* IG Insights header */}
          <div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5">
            <span className="text-foreground/70 text-base leading-none">‹</span>
            <div className="text-[12px] font-semibold text-foreground">Insights</div>
            <span className="text-foreground/70 text-base leading-none">↗</span>
          </div>
          {/* Range pills */}
          <div className="flex gap-1.5 px-3 pt-3">
            {["7 days", "30 days", "60 days", "90 days"].map((r) => (
              <span
                key={r}
                className={`text-[9px] px-2 py-1 rounded-full ${r === "60 days" ? "bg-foreground text-background font-semibold" : "bg-muted text-muted-foreground"}`}
              >
                {r}
              </span>
            ))}
          </div>
          {/* Hero metric */}
          <div className="px-4 pt-4 pb-2">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Accounts reached</div>
            <div className="mt-1 flex items-baseline gap-2">
              <span className="font-serif text-4xl text-foreground">36,204</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.92_0.06_140)] px-2 py-0.5 text-[9px] font-semibold text-[oklch(0.35_0.08_140)]">
                ▲ 3×
              </span>
            </div>
            {/* Bar chart */}
            <div className="mt-3 flex h-16 items-end gap-1">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-[oklch(0.82_0.06_60)] to-[oklch(0.55_0.12_45)]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-1.5 flex justify-between text-[8px] text-muted-foreground uppercase tracking-wider">
              <span>Day 1</span>
              <span>Day 60</span>
            </div>
          </div>
          {/* Metric list */}
          <div className="border-t border-border/60 px-4 py-3 space-y-2.5">
            {metrics.map((m) => (
              <div key={m.label} className="flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-foreground">{m.label}</div>
                  <div className="text-[9px] text-muted-foreground">
                    <span className="line-through">{m.from}</span> → <span className="text-foreground">{m.to}</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.92_0.06_140)] px-2 py-0.5 text-[9px] font-semibold text-[oklch(0.35_0.08_140)]">
                  ▲ {m.change}
                </span>
              </div>
            ))}
          </div>
          {/* Bottom nav */}
          <div className="flex items-center justify-around border-t border-border/60 py-2.5 text-[14px]">
            <span aria-hidden>⌂</span>
            <span aria-hidden>⌕</span>
            <span aria-hidden>＋</span>
            <span aria-hidden>♡</span>
            <span aria-hidden className="h-4 w-4 rounded-full bg-[oklch(0.85_0.05_55)]" />
          </div>
          {/* Home indicator */}
          <div className="flex justify-center pb-1.5">
            <div className="h-1 w-24 rounded-full bg-foreground/40" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Case Study</p>
        <h1 className="mt-3 font-serif text-5xl text-foreground">LushGlow Skincare</h1>
        <p className="mt-5 text-muted-foreground text-lg">
          Gentle, affordable skincare for young women with sensitive skin.
        </p>
      </div>

      {/* Brand card */}
      <div className="mt-14 rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-[var(--shadow-card)] grid gap-8 md:grid-cols-[180px_1fr] items-center">
        <img src={logo} alt="LushGlow Skincare logo" className="w-40 h-40 object-contain rounded-2xl bg-background/60 p-4 mx-auto" />
        <div>
          <h2 className="font-serif text-2xl text-foreground">The mission</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            To provide gentle, affordable skincare solutions for young women with sensitive skin.
          </p>
          <h3 className="mt-6 font-serif text-xl text-foreground">The struggles</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            Low online visibility, inconsistent branding, low engagement, no clear content
            strategy and slow follower growth.
          </p>
        </div>
      </div>

      {/* Strategy */}
      <section className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-card border border-border/60 p-8">
          <h3 className="font-serif text-2xl text-foreground">My approach</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Build a consistent online identity, increase visibility and improve engagement —
            through a clear content strategy, stronger branding, an optimised profile and
            posts that grow the community.
          </p>
        </div>
        <div className="rounded-3xl bg-card border border-border/60 p-8">
          <h3 className="font-serif text-2xl text-foreground">Strategies I'd implement</h3>
          <ul className="mt-3 space-y-2 text-muted-foreground leading-relaxed">
            <li>— Optimise the bio around <em className="text-foreground/80">gentle</em> & <em className="text-foreground/80">affordable</em> skincare keywords</li>
            <li>— A weekly posting schedule for consistency</li>
            <li>— An educational content pillar to build authority</li>
            <li>— Reels for routines & tutorials to expand reach</li>
          </ul>
        </div>
      </section>

      {/* Sample work */}
      <section className="mt-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Sample work</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground">Content I created</h2>
          <p className="mt-4 text-muted-foreground">
            A peek at how the LushGlow content lives on the feed.
          </p>
        </div>
        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {samples.map((s, i) => (
            <div
              key={s.title}
              className="transition hover:-translate-y-1"
              style={{ transform: `rotate(${i === 0 ? -3 : i === 2 ? 3 : 0}deg)` }}
            >
              <PhoneMockup {...s} />
              <div className="mt-5 text-center">
                <h3 className="font-serif text-lg text-foreground">{s.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expected results */}
      <section className="mt-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Insights · 60 days</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground">Expected results</h2>
        </div>
        <div className="mt-10 flex justify-center">
          <InsightsPhone />
        </div>
      </section>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h2 className="font-serif text-3xl text-foreground">Want results like these for your brand?</h2>
        <Link to="/contact" className="inline-flex mt-6 rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm hover:opacity-90 transition">
          Let's work together
        </Link>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Case Study — LushGlow Skincare | Asha Tapkigen" },
      { name: "description", content: "A social media strategy case study for LushGlow Skincare — building consistent branding, visibility and engagement." },
      { property: "og:title", content: "Case Study — LushGlow Skincare" },
      { property: "og:description", content: "Strategy, content and growth plan for a sensitive-skin skincare brand." },
    ],
  }),
  component: Portfolio,
});