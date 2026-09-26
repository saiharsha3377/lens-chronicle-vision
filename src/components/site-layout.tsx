import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import monogram from "@/assets/LC_PNG_BLACK.png.asset.json";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "Work", to: "/work" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Monogram({ className = "" }: { className?: string }) {
  return <img className={`monogram ${className}`} src={monogram.url} alt="Lens Chronicle Photography" />;
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand-link" to="/" aria-label="Lens Chronicle home"><Monogram /></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.slice(1).map((item) => (
            <Link key={item.to} to={item.to} activeProps={{ className: "nav-active" }}>{item.label}</Link>
          ))}
        </nav>
        <Button className="menu-trigger" variant="ghost" size="icon" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu aria-hidden="true" />
        </Button>
      </header>

      {children}

      <footer className="site-footer">
        <div className="footer-intro">
          <p>Available for commissions</p>
          <Link to="/contact">Begin a project <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="footer-links">
          <Monogram />
          <nav aria-label="Footer navigation">
            {navItems.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
          </nav>
        </div>
        <p className="footer-signoff">© {new Date().getFullYear()} Lens Chronicle Photography</p>
      </footer>

      <div className={`menu-panel ${menuOpen ? "menu-open" : ""}`} aria-hidden={!menuOpen}>
        <Button className="menu-close" variant="ghost" size="icon" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></Button>
        <Monogram />
        <nav aria-label="Menu navigation">
          {navItems.map((item, index) => (
            <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>
              <small>{String(index + 1).padStart(2, "0")}</small>{item.label}
            </Link>
          ))}
        </nav>
        <p>Fashion · Editorial · Commercial</p>
      </div>
    </div>
  );
}

export function PageIntro({ index, eyebrow, title, description }: { index: string; eyebrow: string; title: ReactNode; description: string }) {
  return (
    <header className="page-intro">
      <span>{index}</span>
      <div><p>{eyebrow}</p><h1>{title}</h1></div>
      <p>{description}</p>
    </header>
  );
}