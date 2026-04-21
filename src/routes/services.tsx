import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Asha Tapkigen" },
      { name: "description", content: "Social media management, content creation, strategy and community packages for growing brands." },
      { property: "og:title", content: "Services — Asha Tapkigen" },
      { property: "og:description", content: "Packages built to help your brand grow online." },
    ],
  }),
  component: Services,
});

const services = [
  {
    name: "Content Creation",
    desc: "On-brand graphics, reels and carousels designed to stop the scroll.",
    items: ["Feed graphics & carousels", "Reels editing", "Story templates", "Caption writing"],
  },
  {
    name: "Social Media Management",
    desc: "Full-service monthly management — planning, posting and engaging on your behalf.",
    items: ["Monthly content calendar", "Scheduling & posting", "Community engagement", "Monthly reports"],
  },
  {
    name: "Strategy & Audits",
    desc: "A clear roadmap for your channels — what to post, when and why.",
    items: ["Profile audit", "Content pillars", "Hashtag strategy", "Growth roadmap"],
  },
];

function Services() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Services</p>
        <h1 className="mt-3 font-serif text-5xl text-foreground">How I can help</h1>
        <p className="mt-5 text-muted-foreground text-lg">
          Pick what fits — or mix and match. Every package is tailored to your brand and goals.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={s.name}
            className="rounded-3xl bg-card border border-border/60 p-8 shadow-[var(--shadow-card)] flex flex-col"
          >
            <div className="text-xs uppercase tracking-widest text-muted-foreground">0{i + 1}</div>
            <h3 className="mt-3 font-serif text-2xl text-foreground">{s.name}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/80">
              {s.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="text-accent-foreground/60">—</span> {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link to="/contact" className="inline-flex rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm hover:opacity-90 transition">
          Request a quote
        </Link>
      </div>
    </div>
  );
}