import { useEffect, useState } from "react";
import logo from "@/assets/lens-chronicle-logo.png.asset.json";

export function FocusLoader() {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let ready = false;
    let disposed = false;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;
    const start = performance.now();
    const eagerImages = Array.from(document.images).filter(image => image.loading !== "lazy");
    const imagesReady = eagerImages.map(image => image.complete ? Promise.resolve() : new Promise<void>(resolve => {
      image.addEventListener("load", () => resolve(), { once: true });
      image.addEventListener("error", () => resolve(), { once: true });
    }));
    Promise.allSettled([...imagesReady, document.fonts.ready]).then(() => { if (!disposed) ready = true; });
    const interval = setInterval(() => {
      const elapsed = performance.now() - start;
      if ((ready && elapsed >= 1000) || elapsed >= 4500) {
        setProgress(100);
        clearInterval(interval);
        exitTimer = setTimeout(() => setFinished(true), 450);
      } else {
        setProgress(Math.min(94, Math.floor(94 * (1 - Math.exp(-elapsed / 850)))));
      }
    }, 50);
    return () => { disposed = true; clearInterval(interval); if (exitTimer) clearTimeout(exitTimer); };
  }, []);

  if (finished) return null;
  return <div className={`focus-loader${progress === 100 ? " focus-loader-complete" : ""}`} role="status" aria-label={`Loading Lens Chronicle, ${progress} percent`}>
    <div className="loader-focus-frame" aria-hidden="true"><i/><i/><i/><i/></div>
    <img className="loader-logo monogram" src={logo.url} alt="Lens Chronicle Photography" width="400" height="400" />
    <span className="loader-percentage" aria-hidden="true">{String(progress).padStart(2, "0")}%</span>
    <div className="loader-meter" aria-hidden="true"><span style={{ transform: `scaleX(${progress / 100})` }}/></div>
  </div>;
}