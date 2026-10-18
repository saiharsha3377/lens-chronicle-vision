import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { disciplines } from "@/lib/reference-design";

const photographs = [disciplines[1], disciplines[2], disciplines[3], disciplines[0]].filter(item => item !== undefined);

export function SelectedEdit() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    const stage = element?.querySelector<HTMLElement>(".edit-stage");
    const track = element?.querySelector<HTMLElement>(".edit-track");
    if (!element || !stage || !track) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const panels = Array.from(track.querySelectorAll<HTMLElement>(".edit-panel"));
    const counter = element.querySelector<HTMLElement>(".edit-count");
    let frame = 0;
    let start = 0;
    let travel = 0;
    let width = 0;
    let previous = -1;
    const update = () => {
      frame = 0;
      if (motion.matches) return;
      const progress = Math.max(0, Math.min(1, (window.scrollY - start) / travel));
      if (progress === previous) return;
      previous = progress;
      const position = progress * (panels.length - 1);
      if (counter) counter.textContent = `${String(Math.round(position) + 1).padStart(2, "0")} / 04`;
      track.style.transform = `translate3d(${-position * width}px,0,0)`;
      element.style.setProperty("--edit-progress", String(progress));
      panels.forEach((panel, index) => {
        const relative = Math.max(-1, Math.min(1, index - position));
        panel.style.setProperty("--edit-drift", `${relative * 32}px`);
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const measure = () => {
      element.classList.toggle("edit-animated", !motion.matches);
      width = stage.clientWidth;
      travel = Math.max(1, width * (panels.length - 1) * .85);
      element.style.height = motion.matches ? "" : `${stage.offsetHeight + travel}px`;
      start = element.getBoundingClientRect().top + window.scrollY;
      previous = -1;
      if (motion.matches) {
        track.style.transform = "";
        panels.forEach(panel => panel.style.removeProperty("--edit-drift"));
      }
      schedule();
    };
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    window.addEventListener("scroll", schedule, { passive: true });
    motion.addEventListener("change", measure);
    measure();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      motion.removeEventListener("change", measure);
    };
  }, []);

  return <div className="selected-edit" ref={root}>
    <section className="edit-stage" aria-labelledby="edit-title">
      <header className="edit-heading editorial-container">
        <div><p className="kicker">Selected photographs / 02</p><h2 id="edit-title">The <em>edit</em></h2></div>
        <Button asChild variant="ghost" className="editorial-button"><Link to="/work">Full portfolio <span aria-hidden="true">↗</span></Link></Button>
      </header>
      <div className="edit-window"><div className="edit-track">
        {photographs.map((item, index) => <article className="edit-panel" key={item.title}>
          <div className="edit-composition editorial-container">
            <Link to="/work" className="edit-image" aria-label={`Explore ${item.title} photography`}><img src={item.image} alt={`${item.title} photography by Lens Chronicle`} width="1066" height="1600" loading="lazy" decoding="async" /></Link>
            <div className="edit-caption"><span className="edit-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><Link to="/work" resetScroll className="text-link">View collection <span aria-hidden="true">↗</span></Link></div></div>
          </div>
        </article>)}
      </div></div>
      <div className="edit-foot editorial-container"><div className="edit-meter" aria-hidden="true"><span /></div><span className="edit-count" aria-hidden="true">01 / 04</span></div>
    </section>
  </div>;
}