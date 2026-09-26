import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import monogram from "@/assets/lens-chronicle-logo.png.asset.json";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "Work", to: "/work" as const },
  { label: "Services", to: "/services" as const },
  { label: "About", to: "/about" as const },
  { label: "Contact", to: "/contact" as const },
];

export const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=919652340008&text=Hi+LENSCHRONICLE+%E2%80%94+I%E2%80%99d+like+to+discuss+a+project.&type=phone_number&app_absent=0";
export const INSTAGRAM_URL = "https://www.instagram.com/lenschroniclephotography";
export const PHONE_TEL = "tel:+919652340008";
export const PHONE_DISPLAY = "+91 96523 40008";

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

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