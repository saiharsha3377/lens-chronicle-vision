import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import archive from "@/assets/chapters/archive.webp.asset.json";
import commissions from "@/assets/chapters/commissions.webp.asset.json";
import studio from "@/assets/chapters/studio.webp.asset.json";
import contact from "@/assets/chapters/contact.webp.asset.json";

const chapters = [
  { title: "The archive", label: "Fashion · Editorial · Commercial", to: "/work" as const, image: archive.url, alt: "Full-length fashion portrait in a black dress against a warm studio backdrop" },
  { title: "Commissions", label: "Services / Made with intention", to: "/services" as const, image: commissions.url, alt: "Fashion portrait in a flowing white gown against a grey studio backdrop" },
  { title: "The studio", label: "About / A point of view", to: "/about" as const, image: studio.url, alt: "Expressive close-up portrait in a black cap by Lens Chronicle" },
  { title: "A conversation", label: "Contact / Narasimha", to: "/contact" as const, image: contact.url, alt: "Seated editorial portrait in a blue dress with the complete composition preserved" },
];

export function PhotographicChapters() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const panels = Array.from(element.querySelectorAll<HTMLElement>(".photo-chapter"));
    let bounds: Array<{ panel: HTMLElement; start: number; distance: number }> = [];
    let frame = 0;
    const update = () => {
      frame = 0;
      if (motion.matches) return;
      for (const { panel, start, distance } of bounds) {
        const progress = Math.max(0, Math.min(1, (window.scrollY - start) / distance));
        panel.style.setProperty("--chapter-progress", String(progress));
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const measure = () => {
      bounds = panels.map(panel => ({ panel, start: panel.getBoundingClientRect().top + window.scrollY, distance: Math.max(1, panel.offsetHeight - window.innerHeight) }));
      schedule();
    };
    const observer = new ResizeObserver(measure);
    panels.forEach(panel => observer.observe(panel));
    window.addEventListener("scroll", schedule, { passive: true });
    motion.addEventListener("change", measure);
    measure();
    return () => { observer.disconnect(); cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); motion.removeEventListener("change", measure); };
  }, []);

  return <div className="photographic-chapters" ref={root}>
    {chapters.map((chapter, index) => <section className={`photo-chapter photo-chapter-${index + 1}`} key={chapter.to} aria-labelledby={`chapter-title-${index}`}>
      <div className="chapter-screen">
        <Button asChild variant="ghost" className="chapter-link">
          <Link to={chapter.to} aria-label={`Explore ${chapter.title}`}>
            <img className="chapter-photo" src={chapter.image} alt={chapter.alt} width="1920" height="1080" loading="lazy" decoding="async" />
            <div className="chapter-top editorial-container"><span>Lens Chronicle / {String(index + 3).padStart(2, "0")}</span><span>Hyderabad · India</span></div>
            <div className="chapter-caption editorial-container">
              <div className="chapter-name"><p className="kicker">{chapter.label}</p><h2 id={`chapter-title-${index}`}>{chapter.title}</h2></div>
              <span className="chapter-arrow" aria-hidden="true"><svg viewBox="0 0 100 100" fill="none"><path d="M82 82A45 45 0 1 1 82 18" /></svg><ArrowUpRight /></span>
            </div>
            <div className="chapter-bottom editorial-container"><span>{String(index + 1).padStart(2, "0")} / 04</span><span>{chapter.to === "/work" ? "Explore the photographs" : chapter.to === "/services" ? "Discover our commissions" : chapter.to === "/about" ? "Meet the studio" : "Get in touch"} ↗</span></div>
          </Link>
        </Button>
      </div>
    </section>)}
  </div>;
}