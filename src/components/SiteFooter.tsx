import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <h3 className="font-serif text-2xl text-foreground">Asha Tapkigen</h3>
          <p className="mt-2 text-muted-foreground">An invitation to elevate your brand.</p>
        </div>
        <div className="space-y-2">
          <p className="text-foreground font-medium">Explore</p>
          <div className="flex flex-col gap-1 text-muted-foreground">
            <Link to="/about" className="hover:text-foreground">About</Link>
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <Link to="/portfolio" className="hover:text-foreground">Portfolio</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-foreground font-medium">Connect</p>
          <div className="flex flex-col gap-1 text-muted-foreground">
            <a href="mailto:hello@ashatapkigen.com" className="hover:text-foreground">hello@ashatapkigen.com</a>
            <a href="#" className="hover:text-foreground">Instagram</a>
            <a href="#" className="hover:text-foreground">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Asha Tapkigen. Crafted with care.
      </div>
    </footer>
  );
}