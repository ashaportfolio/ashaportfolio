import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Case Study" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl tracking-wide text-foreground">
          Asha <span className="text-muted-foreground">Tapkigen</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center text-sm rounded-full bg-primary text-primary-foreground px-5 py-2 hover:opacity-90 transition"
        >
          Let's talk
        </Link>
      </div>
    </header>
  );
}