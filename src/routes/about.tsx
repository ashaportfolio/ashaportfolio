import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/asha-pink.jpeg.asset.json";

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
        src={portrait.url}
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
            I'm a social media manager helping brands grow their online presence and build
            engaged communities through strategic content, consistent page management and
            meaningful audience engagement.
          </p>
          <p>
            I've worked with brands like Thriftvibe254, creating content, managing posts
            and engaging with followers to improve visibility online. I'm also certified
            through Social Media Management Africa (Nov 2025).
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-serif text-xl text-foreground">Hard skills</h3>
            <ul className="mt-3 space-y-1.5 text-muted-foreground">
              <li>— Social Media Management</li>
              <li>— Community Management</li>
              <li>— Content Creation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl text-foreground">Soft skills</h3>
            <ul className="mt-3 space-y-1.5 text-muted-foreground">
              <li>— Communication</li>
              <li>— Time Management</li>
              <li>— Customer Engagement</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4">
          {[
            { n: "4 mo", l: "At Thriftvibe254" },
            { n: "5", l: "Step strategy" },
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