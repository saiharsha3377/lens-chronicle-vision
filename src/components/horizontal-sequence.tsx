import { useEffect, useRef, type ReactNode } from "react";

// Vertical document scrolling drives the rail without intercepting wheel or touch events.
export function HorizontalSequence({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    const section = element?.firstElementChild;
    const rail = element?.querySelector<HTMLElement>(".discipline-rail, .lookbook-rail, .service-rail");
    if (!element || !(section instanceof HTMLElement) || !rail) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let distance = 0;
    let start = 0;
    let railWidth = 0;
    let lastOffset = -1;
    let cards: Array<{ element: HTMLElement; center: number }> = [];
    const update = () => {
      frame = 0;
      if (!motion.matches) {
        const offset = Math.min(distance, Math.max(0, window.scrollY - start));
        if (offset === lastOffset) return;
        lastOffset = offset;
        rail.scrollLeft = offset;
        element.style.setProperty("--sequence-progress", String(distance ? offset / distance : 0));
        for (const card of cards) {
          const position = Math.min(1, Math.max(-1, (card.center - offset - railWidth / 2) / railWidth));
          card.element.style.setProperty("--card-drift", `${position * 26}px`);
          card.element.style.setProperty("--card-presence", String(1 - Math.abs(position) * .28));
        }
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const measure = () => {
      railWidth = rail.clientWidth;
      lastOffset = -1;
      cards = Array.from(rail.querySelectorAll<HTMLElement>(".journal-frame")).map(card => ({ element: card, center: card.offsetLeft - rail.offsetLeft + card.offsetWidth / 2 }));
      distance = Math.max(0, rail.scrollWidth - railWidth);
      element.classList.toggle("sequence-active", !motion.matches && distance > 0);
      // Match the sticky section's small viewport height, not the moving mobile address bar.
      element.style.height = !motion.matches && distance > 0 ? `${section.offsetHeight + distance}px` : "";
      start = element.getBoundingClientRect().top + window.scrollY;
      if (motion.matches) for (const card of cards) {
        card.element.style.removeProperty("--card-drift");
        card.element.style.removeProperty("--card-presence");
      }
      schedule();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(rail);
    observer.observe(section);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", schedule, { passive: true });
    motion.addEventListener("change", measure);
    measure();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", schedule);
      motion.removeEventListener("change", measure);
    };
  }, []);
  return <div className="horizontal-sequence" ref={root}>{children}</div>;
}