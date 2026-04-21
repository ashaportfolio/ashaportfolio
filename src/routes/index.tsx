import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asha Tapkigen — Social Media Manager" },
      { name: "description", content: "An invitation to elevate your brand with thoughtful social media strategy, content, and community building." },
      { property: "og:title", content: "Asha Tapkigen — Social Media Manager" },
      { property: "og:description", content: "An invitation to elevate your brand." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Social Media Manager</p>
            <h1 className="mt-4 font-serif text-5xl md:text-6xl leading-[1.05] text-foreground">
              An invitation to <em className="not-italic text-accent-foreground/80">elevate</em> your brand.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
              I'm Asha — I help brands grow their online presence and build engaged communities through strategic content, consistent page management and meaningful audience engagement.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm hover:opacity-90 transition">
                Work with me
              </Link>
              <Link to="/portfolio" className="rounded-full border border-border bg-background/60 px-7 py-3 text-sm text-foreground hover:bg-background transition">
                View case study
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl" style={{ background: "var(--gradient-warm)", filter: "blur(40px)", opacity: 0.4 }} />
            <img
              src={heroImg}
              alt="Asha Tapkigen, social media manager"
              width={1536}
              height={1152}
              className="relative rounded-3xl object-cover w-full aspect-[4/3] shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">My process</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-foreground">A simple 5-step strategy</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { n: "01", k: "Profile Audit", v: "I review your social profile to spot gaps in branding, content and visibility." },
            { n: "02", k: "Content Strategy", v: "I build a content plan rooted in your brand goals, audience interests and industry trends." },
            { n: "03", k: "Content Creation", v: "I design engaging posts, reels and captions that capture attention and spark interaction." },
            { n: "04", k: "Community Management", v: "I respond to comments and DMs to build stronger, more loyal relationships with your audience." },
            { n: "05", k: "Optimization", v: "I monitor performance and adjust the strategy to improve reach and steady growth." },
          ].map((c) => (
            <div key={c.k} className="rounded-2xl bg-card p-8 border border-border/60 shadow-[var(--shadow-card)]">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.n}</div>
              <h3 className="mt-2 font-serif text-2xl text-foreground">{c.k}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-foreground">Ready to grow with intention?</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Let's build a social presence that feels as good as it looks.
        </p>
        <Link to="/contact" className="inline-flex mt-8 rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm hover:opacity-90 transition">
          Start a conversation
        </Link>
      </section>
    </div>
  );
}
