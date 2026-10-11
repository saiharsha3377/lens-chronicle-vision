import { useEffect, useState } from "react";
import logo from "@/assets/lens-chronicle-logo.png.asset.json";

export function FocusLoader() {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let ready = false;
    let disposed = false;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;
    let fadeTimer: ReturnType<typeof setTimeout> | undefined;
    const start = performance.now();
    const eagerImages = Array.from(document.images).filter(image => image.loading !== "lazy");
    const imagesReady = eagerImages.map(image => image.complete ? Promise.resolve() : new Promise<void>(resolve => {
      image.addEventListener("load", () => resolve(), { once: true });
      image.addEventListener("error", () => resolve(), { once: true });
    }));
    Promise.allSettled([...imagesReady, document.fonts.ready]).then(() => { if (!disposed) ready = true; });
    const interval = setInterval(() => {
      const elapsed = performance.now() - start;
      if ((ready && elapsed >= 2800) || elapsed >= 6000) {
        setProgress(100);
        clearInterval(interval);
        fadeTimer = setTimeout(() => setLeaving(true), 500);
        exitTimer = setTimeout(() => setFinished(true), 1050);
      } else {
        setProgress(Math.min(99, Math.floor(elapsed / 2800 * 100)));
      }
    }, 50);
    return () => { disposed = true; clearInterval(interval); if (exitTimer) clearTimeout(exitTimer); if (fadeTimer) clearTimeout(fadeTimer); };
  }, []);

  if (finished) return null;
  return <div className={`focus-loader${leaving ? " focus-loader-complete" : ""}${progress === 100 ? " focus-loader-locked" : ""}`} role="status" aria-label={`Loading Lens Chronicle, ${progress} percent`}>
    <svg className="loader-lens" viewBox="0 0 400 400" fill="none" aria-hidden="true"><circle className="loader-lens-outer" cx="200" cy="200" r="183"/><circle className="loader-lens-ticks" cx="200" cy="200" r="174"/><circle className="loader-lens-inner" cx="200" cy="200" r="155"/><circle className="loader-lens-progress" cx="200" cy="200" r="183" pathLength="100" strokeDasharray={`${progress} 100`} /></svg>
    <div className="loader-focus-frame" aria-hidden="true"><i/><i/><i/><i/></div>
    <img className="loader-logo monogram" src={logo.url} alt="Lens Chronicle Photography" width="400" height="400" />
    <span className="loader-percentage" aria-hidden="true">{String(progress).padStart(2, "0")}%</span>
    <div className="loader-meter" aria-hidden="true"><span style={{ transform: `scaleX(${progress / 100})` }}/></div>
  </div>;
}