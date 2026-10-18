import { useEffect, useRef, useState } from "react";

// Animated camera viewfinder: framing brackets hunt and lock, a light meter
// sweeps, and the focus point pulses. CSS-only animation, paused offscreen.
export function ViewfinderMotion() {
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(Boolean(entry?.isIntersecting)));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={root} className={`viewfinder-motion${visible ? " viewfinder-visible" : ""}`} aria-hidden="true">
    <svg viewBox="0 0 360 300" fill="none">
      <path className="vf-grid" d="M120 20v260M240 20v260M40 100h280M40 200h280"/>
      <g className="vf-brackets">
        <path d="M30 70V30h40M330 70V30h-40M30 230v40h40M330 230v40h-40"/>
      </g>
      <circle className="vf-focus" cx="180" cy="150" r="34"/>
      <circle className="vf-focus vf-focus-inner" cx="180" cy="150" r="12"/>
      <path className="vf-cross" d="M180 128v-18m0 80v18m-40-58h-18m80 0h18"/>
      <g className="vf-meter">
        <path d="M60 262h240"/>
        {[0,1,2,3,4,5,6].map(i => <path key={i} d={`M${60 + i * 40} 258v8`}/>) }
        <circle className="vf-needle" cx="60" cy="262" r="4"/>
      </g>
      <text className="vf-label" x="40" y="52">AF</text>
      <text className="vf-label" x="296" y="52">f/1.8</text>
      <text className="vf-label" x="40" y="252">ISO 100</text>
      <text className="vf-label" x="276" y="252">1/250</text>
    </svg>
  </div>;
}
