import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/lushglow-logo.jpg";
import work1 from "@/assets/work-gentle-routine.jpg";
import work2 from "@/assets/work-skin-myths.jpg";
import work3 from "@/assets/work-thirsty.jpg";

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

const samples = [
  { src: work1, title: "Gentle Routine", caption: "POV: a gentle routine that actually works ✨" },
  { src: work2, title: "Skin Myths", caption: "5 things to stop doing in your PM routine" },
  { src: work3, title: "Hydration Hook", caption: "Your skin is thirsty — type THIRSTY to grab the serum" },
];

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

      {/* Expected results */}
      <section className="mt-14">
        <h2 className="font-serif text-3xl text-foreground text-center">Expected results in 60 days</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[
            { n: "300 → 900+", l: "Followers" },
            { n: "3×", l: "Account reach" },
            { n: "+60%", l: "Engagement rate" },
          ].map((r) => (
            <div key={r.l} className="rounded-2xl border border-border/60 bg-card p-6 text-center">
              <div className="font-serif text-3xl text-foreground">{r.n}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{r.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample work */}
      <section className="mt-20">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Sample work</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground">Content I created</h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {samples.map((s) => (
            <article key={s.title} className="rounded-3xl overflow-hidden border border-border/60 bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1">
              <img src={s.src} alt={s.title} className="aspect-[4/5] w-full object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="font-serif text-lg text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.caption}</p>
              </div>
            </article>
          ))}
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