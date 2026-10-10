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
    const update = () => {
      frame = 0;
      if (!motion.matches) {
        const offset = Math.min(distance, Math.max(0, window.scrollY - start));
        rail.scrollLeft = offset;
        element.style.setProperty("--sequence-progress", String(distance ? offset / distance : 0));
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const measure = () => {
      distance = Math.max(0, rail.scrollWidth - rail.clientWidth);
      element.classList.toggle("sequence-active", !motion.matches && distance > 0);
      element.style.height = !motion.matches && distance > 0 ? `${window.innerHeight + distance}px` : "";
      start = element.getBoundingClientRect().top + window.scrollY;
      schedule();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(rail);
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