import { useEffect, useRef, useState } from "react";

export function FocusMotion() {
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(Boolean(entry?.isIntersecting)));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div className={`focus-motion${visible ? " focus-motion-visible" : ""}`} ref={root} aria-hidden="true">
    <svg viewBox="0 0 360 280" fill="none">
      <path className="focus-boundary" d="M40 65V30h35m210 0h35v35M40 215v35h35m210 0h35v-35" />
      <g className="focus-plane"><rect x="75" y="60" width="210" height="160"/><rect x="105" y="82" width="150" height="116"/><rect x="140" y="110" width="80" height="60"/></g>
      <circle className="focus-target" cx="180" cy="140" r="26"/>
      <path className="focus-axis" d="M165 140h30m-15-15v30M180 10v12m0 236v12M10 140h12m316 0h12"/>
    </svg>
    <div className="focus-ruler">{Array.from({length:21},(_,index)=><i key={index}/>)}</div>
  </div>;
}