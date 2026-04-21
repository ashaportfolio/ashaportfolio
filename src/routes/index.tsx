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
              I help brands tell their story online — with strategy, beautiful content, and a community that actually shows up.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm hover:opacity-90 transition">
                Work with me
              </Link>
              <Link to="/portfolio" className="rounded-full border border-border bg-background/60 px-7 py-3 text-sm text-foreground hover:bg-background transition">
                View portfolio
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl" style={{ background: "var(--gradient-warm)", filter: "blur(40px)", opacity: 0.4 }} />
            <img
              src={heroImg}
              alt="Aesthetic flat lay with notebook, coffee and phone showing Instagram"
              width={1536}
              height={1152}
              className="relative rounded-3xl object-cover w-full aspect-[4/3] shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { k: "Strategy", v: "Content plans rooted in your brand voice and goals." },
            { k: "Creative", v: "Soft, scroll-stopping visuals and captions that convert." },
            { k: "Community", v: "Genuine engagement that turns followers into clients." },
          ].map((c) => (
            <div key={c.k} className="rounded-2xl bg-card p-8 border border-border/60 shadow-[var(--shadow-card)]">
              <h3 className="font-serif text-2xl text-foreground">{c.k}</h3>
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
