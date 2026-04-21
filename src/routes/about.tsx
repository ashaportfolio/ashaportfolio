import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Asha Tapkigen" },
      { name: "description", content: "Meet Asha — a social media manager passionate about helping brands grow with heart and strategy." },
      { property: "og:title", content: "About — Asha Tapkigen" },
      { property: "og:description", content: "Meet the social media manager behind the brand." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 grid gap-12 md:grid-cols-[1fr_1.3fr] items-start">
      <img
        src={portrait}
        alt="Portrait of Asha Tapkigen"
        width={1024}
        height={1280}
        loading="lazy"
        className="rounded-3xl w-full object-cover aspect-[4/5] shadow-[var(--shadow-soft)]"
      />
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">About me</p>
        <h1 className="mt-3 font-serif text-5xl text-foreground">Hi, I'm Asha.</h1>
        <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>
            I'm a social media manager who believes great content starts with a clear story.
            I work with small businesses, creators and growing brands to build an online
            presence that feels intentional, beautiful and true to who they are.
          </p>
          <p>
            From content strategy and planning to caption writing, design and community
            management — I take care of the day-to-day so you can focus on what you do best.
          </p>
          <p>
            My approach is calm, organised and collaborative. No vanity metrics, no copy-paste
            templates — just thoughtful work that helps your brand grow.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-4">
          {[
            { n: "20+", l: "Brands supported" },
            { n: "3 yrs", l: "In social media" },
            { n: "100%", l: "Made with care" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-card border border-border/60 p-5 text-center">
              <div className="font-serif text-3xl text-foreground">{s.n}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}