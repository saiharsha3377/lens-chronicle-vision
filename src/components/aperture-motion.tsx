import { useEffect, useRef, useState } from "react";

export function ApertureMotion() {
  const graphic = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = graphic.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(Boolean(entry?.isIntersecting)));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={graphic} className={`aperture-motion${visible ? " aperture-visible" : ""}`} aria-hidden="true">
    <svg viewBox="0 0 300 300" fill="none">
      <circle className="aperture-outline" cx="150" cy="150" r="143" />
      <circle className="aperture-orbit" cx="150" cy="150" r="128" strokeDasharray="1 11" />
      <g className="aperture-blades">
        {[0, 60, 120, 180, 240, 300].map(angle => <path key={angle} transform={`rotate(${angle} 150 150)`} d="M150 44 L242 97 L192 174 L150 150 L150 44 Z" />)}
      </g>
      <circle className="aperture-outline" cx="150" cy="150" r="12" />
      <path className="aperture-cross" d="M150 0v18m0 264v18M0 150h18m264 0h18" />
    </svg>
  </div>;
}