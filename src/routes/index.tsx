import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import monogram from "../assets/LC_PNG_BLACK.png.asset.json";
import editorialOne from "../assets/editorial-1.jpg.asset.json";
import editorialTwo from "../assets/editorial-2.jpg.asset.json";
import mainPortrait from "../assets/main.jpg.asset.json";
import swimOne from "../assets/swim-1.jpg.asset.json";
import swimTwo from "../assets/swim-2.jpg.asset.json";
import traditionalOne from "../assets/traditional-1.jpg.asset.json";
import traditionalTwo from "../assets/traditional-2.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lens Chronicle Photography | Fashion, Editorial & Commercial" },
      {
        name: "description",
        content: "Lens Chronicle is a fashion, editorial and commercial photography studio creating distinctive visual stories.",
      },
      { property: "og:title", content: "Lens Chronicle Photography" },
      {
        property: "og:description",
        content: "Fashion, editorial and commercial photography with a refined visual point of view.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const works = [
  { src: swimOne.url, title: "Wild Form", type: "Swimwear", className: "work-tall" },
  { src: traditionalOne.url, title: "Soft Ceremony", type: "Fashion", className: "work-short" },
  { src: editorialOne.url, title: "Ivory Study", type: "Editorial", className: "work-medium" },
  { src: mainPortrait.url, title: "Crimson Still", type: "Portrait", className: "work-wide" },
  { src: swimTwo.url, title: "Verdant", type: "Commercial", className: "work-medium" },
  { src: traditionalTwo.url, title: "Quiet Bloom", type: "Fashion", className: "work-tall" },
];

function Monogram({ className = "" }: { className?: string }) {
  return <img className={`monogram ${className}`} src={monogram.url} alt="LC" />;
}

function Index() {
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeWork, setActiveWork] = useState<(typeof works)[number] | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || activeWork ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, activeWork]);

  return (
    <main className="site-shell">
      <div className={`intro ${loaded ? "intro-done" : ""}`} aria-hidden={loaded}>
        <div className="intro-orbit">
          <Monogram className="intro-mark" />
          <span className="intro-label">Lens Chronicle</span>
          <span className="intro-count">01 / 01</span>
        </div>
      </div>

      <header className="site-header">
        <a className="brand-link" href="#top" aria-label="Lens Chronicle home"><Monogram /></a>
        <button className="menu-trigger" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span>Menu</span><i /><i />
        </button>
      </header>

      <section id="top" className="opening">
        <div className="opening-portrait">
          <img src={mainPortrait.url} alt="Fashion portrait in a red sculptural gown" />
        </div>
        <p className="opening-index">Selected works · 2023–26</p>
        <div className="title-lockup">
          <p>Fashion · Editorial · Commercial</p>
          <h1>Lens Chronicle</h1>
          <span>Photography</span>
        </div>
        <a className="scroll-cue" href="#work">View work <b>↓</b></a>
      </section>

      <section id="work" className="portfolio">
        <div className="section-heading">
          <span>01</span>
          <h2>Selected<br />Chronicles</h2>
          <p>A study of form, fabric and presence.</p>
        </div>
        <div className="work-grid">
          {works.map((work, index) => (
            <button className={`work-item ${work.className}`} type="button" key={work.title} onClick={() => setActiveWork(work)}>
              <span className="work-image"><img src={work.src} alt={`${work.title}, ${work.type} photography`} /></span>
              <span className="work-meta"><b>{String(index + 1).padStart(2, "0")}</b><span>{work.title}</span><small>{work.type}</small></span>
            </button>
          ))}
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-number">02</div>
        <p className="about-kicker">Behind the lens</p>
        <h2>Light remembers<br />what time forgets.</h2>
        <div className="about-copy">
          <p>Lens Chronicle creates considered imagery where fashion, character and atmosphere meet. Every frame is shaped with clarity, restraint and an instinct for the unexpected.</p>
          <a href="mailto:hello@lenschronicle.com">Start a conversation <span>↗</span></a>
        </div>
      </section>

      <footer id="contact" className="footer">
        <p>Available for commissions</p>
        <a href="mailto:hello@lenschronicle.com">hello@lenschronicle.com</a>
        <div><Monogram /><span>© {new Date().getFullYear()} Lens Chronicle</span></div>
      </footer>

      <div className={`menu-panel ${menuOpen ? "menu-open" : ""}`} aria-hidden={!menuOpen}>
        <button className="menu-close" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button>
        <Monogram />
        <nav>
          {["Work", "About", "Contact"].map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}><small>0{index + 1}</small>{item}</a>)}
        </nav>
        <p>Fashion · Editorial · Commercial</p>
      </div>

      {activeWork && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeWork.title}>
          <button type="button" onClick={() => setActiveWork(null)} aria-label="Close photograph">×</button>
          <img src={activeWork.src} alt={`${activeWork.title}, ${activeWork.type} photography`} />
          <p><b>{activeWork.title}</b><span>{activeWork.type}</span></p>
        </div>
      )}
    </main>
  );
}