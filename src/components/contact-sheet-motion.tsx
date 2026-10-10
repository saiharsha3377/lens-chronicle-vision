import { useEffect, useRef, useState } from "react";

export function ContactSheetMotion() {
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(Boolean(entry?.isIntersecting)));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={root} className={`contact-sheet-motion${visible ? " contact-sheet-visible" : ""}`} aria-hidden="true">
    <svg viewBox="0 0 340 300" fill="none">
      <path className="sheet-guide" d="M20 30h300M20 270h300M40 10v280m260-280v280"/>
      {[0,1,2].map(index => <g className={`sheet-frame sheet-frame-${index}`} key={index}>
        <rect x="93" y="43" width="154" height="214"/>
        <rect x="108" y="67" width="124" height="156"/>
        {Array.from({length:8},(_,i)=><g key={i}><rect x="98" y={54+i*25} width="5" height="10"/><rect x="237" y={54+i*25} width="5" height="10"/></g>)}
        <path className="sheet-composition" d="M108 171h124m-83-104v156m42-156v156"/>
        <circle className="sheet-composition" cx="170" cy="145" r="27"/>
      </g>)}
    </svg>
  </div>;
}