import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Asha Tapkigen" },
      { name: "description", content: "Get in touch to discuss your brand, your goals and how we can grow your social presence together." },
      { property: "og:title", content: "Contact — Asha Tapkigen" },
      { property: "og:description", content: "Let's create something beautiful together." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Contact</p>
        <h1 className="mt-3 font-serif text-5xl md:text-6xl text-foreground">Let's create together</h1>
        <p className="mt-5 text-muted-foreground text-lg max-w-xl mx-auto">
          Tell me about your brand and what you're hoping to build. I usually reply within two working days.
        </p>

        <form
          className="mt-12 grid gap-4 text-left bg-card/70 backdrop-blur border border-border/60 rounded-3xl p-8 shadow-[var(--shadow-card)]"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            window.location.href = `mailto:hello@ashatapkigen.com?subject=New%20enquiry%20from%20${encodeURIComponent(String(data.get("name") || ""))}&body=${encodeURIComponent(String(data.get("message") || ""))}`;
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm">
              <span className="text-foreground/80">Name</span>
              <input name="name" required className="rounded-xl bg-background border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-ring/40" />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="text-foreground/80">Email</span>
              <input name="email" type="email" required className="rounded-xl bg-background border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-ring/40" />
            </label>
          </div>
          <label className="grid gap-2 text-sm">
            <span className="text-foreground/80">Brand / Instagram</span>
            <input name="brand" className="rounded-xl bg-background border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-ring/40" />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-foreground/80">Tell me about your project</span>
            <textarea name="message" rows={5} required className="rounded-xl bg-background border border-border px-4 py-3 outline-none focus:ring-2 focus:ring-ring/40 resize-none" />
          </label>
          <button type="submit" className="mt-2 rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm hover:opacity-90 transition justify-self-start">
            Send enquiry
          </button>
        </form>

        <p className="mt-8 text-sm text-muted-foreground">
          Or email me directly at{" "}
          <a href="mailto:hello@ashatapkigen.com" className="text-foreground underline underline-offset-4">
            hello@ashatapkigen.com
          </a>
        </p>
      </div>
    </div>
  );
}