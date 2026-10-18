import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import archive from "@/assets/chapters/archive.webp.asset.json";
import commissions from "@/assets/chapters/commissions.webp.asset.json";
import studio from "@/assets/chapters/studio.webp.asset.json";
import contact from "@/assets/chapters/conversation-landscape.webp.asset.json";
import archivePortrait from "@/assets/reference/instagram-3.webp.asset.json";
import commissionsPortrait from "@/assets/reference/instagram-2.webp.asset.json";
import studioPortrait from "@/assets/reference/hero-0286.webp.asset.json";
import contactPortrait from "@/assets/chapters/conversation-portrait.webp.asset.json";

const chapters = [
  { title: "The archive", label: "Fashion · Editorial · Commercial", to: "/work" as const, image: archive.url, portrait: archivePortrait.url, alt: "Full-length fashion portrait in a black dress against a warm studio backdrop" },
  { title: "Services", label: "Services / Made with intention", to: "/services" as const, image: commissions.url, portrait: commissionsPortrait.url, alt: "Fashion portrait in a flowing white gown against a grey studio backdrop" },
  { title: "The studio", label: "About / A point of view", to: "/about" as const, image: studio.url, portrait: studioPortrait.url, alt: "Expressive close-up portrait in a black cap by Lens Chronicle" },
  { title: "A conversation", label: "Contact / Narasimha", to: "/contact" as const, image: contact.url, portrait: contactPortrait.url, alt: "Fashion portrait in a patterned red and orange dress with windswept hair" },
];

export function PhotographicChapters() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const panels = Array.from(element.querySelectorAll<HTMLElement>(".photo-chapter"));
    let bounds: Array<{ panel: HTMLElement; start: number; distance: number; previous: number }> = [];
    let frame = 0;
    const update = () => {
      frame = 0;
      if (motion.matches) return;
      for (const bound of bounds) {
        const progress = Math.max(0, Math.min(1, (window.scrollY - bound.start) / bound.distance));
        if (progress === bound.previous) continue;
        bound.previous = progress;
        bound.panel.style.setProperty("--chapter-progress", String(progress));
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const measure = () => {
      bounds = panels.map(panel => ({ panel, start: panel.getBoundingClientRect().top + window.scrollY, distance: Math.max(1, panel.offsetHeight - window.innerHeight), previous: -1 }));
      schedule();
    };
    const observer = new ResizeObserver(measure);
    const visibility = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle("chapter-visible", entry.isIntersecting)), { threshold: 0.15 });
    panels.forEach(panel => observer.observe(panel));
    panels.forEach(panel => visibility.observe(panel));
    window.addEventListener("scroll", schedule, { passive: true });
    motion.addEventListener("change", measure);
    measure();
    return () => { observer.disconnect(); visibility.disconnect(); cancelAnimationFrame(frame); window.removeEventListener("scroll", schedule); motion.removeEventListener("change", measure); };
  }, []);

  return <div className="photographic-chapters" ref={root}>
    {chapters.map((chapter, index) => <section className={`photo-chapter photo-chapter-${index + 1}`} key={chapter.to} aria-labelledby={`chapter-title-${index}`}>
      <div className="chapter-screen">
        <Button asChild variant="ghost" className="chapter-link">
          <Link to={chapter.to} resetScroll aria-label={`Explore ${chapter.title}`}>
            <picture className="chapter-picture"><source media="(max-width: 600px) and (min-height: 501px)" srcSet={chapter.portrait} /><img className="chapter-photo" src={chapter.image} alt={chapter.alt} width="1920" height="1080" loading="lazy" decoding="async" /></picture>
            <div className="chapter-caption editorial-container">
              <div className="chapter-name"><h2 id={`chapter-title-${index}`}>{chapter.title}</h2></div>
              <span className="chapter-arrow" aria-hidden="true"><svg className="chapter-orbit" viewBox="0 0 100 100" fill="none"><path d="M50 7A43 43 0 0 1 93 50M50 93A43 43 0 0 1 7 50" /><path className="chapter-orbit-inner" d="M50 17A33 33 0 0 0 17 50M50 83A33 33 0 0 0 83 50" /></svg><ArrowUpRight className="chapter-direction" /></span>
            </div>
          </Link>
        </Button>
      </div>
    </section>)}
  </div>;
}