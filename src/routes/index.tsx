import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import landscapePhoto from "@/assets/web/landscape-opening.webp.asset.json";
import { disciplines } from "@/lib/reference-design";
import { HorizontalSequence } from "@/components/horizontal-sequence";
import { FocusMotion } from "@/components/focus-motion";

const journal = [disciplines[1], disciplines[2], disciplines[3], disciplines[0]].filter(item => item !== undefined);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lens Chronicle Photography | Fashion, Editorial & Commercial" },
      { name: "description", content: "Lens Chronicle creates fashion, editorial and commercial photography with clarity, character and atmosphere." },
      { property: "og:title", content: "Lens Chronicle Photography" },
      { property: "og:description", content: "Fashion, editorial and commercial photography with a refined visual point of view." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: landscapePhoto.url },
      { name: "twitter:image", content: landscapePhoto.url },
    ],
    links: [{ rel: "preload", as: "image", href: landscapePhoto.url, fetchPriority: "high" }],
  }),
  component: HomePage,
});

function HomePage() {
 return <SiteLayout><main className="minimal-home">
  <section className="opening landscape-opening">
   <img className="hero-photo" src={landscapePhoto.url} alt="Seated fashion portrait by Lens Chronicle Photography" width="1600" height="1000" loading="eager" fetchPriority="high" decoding="async" />
   <div className="hero-copy editorial-container"><p className="kicker">Fashion · Editorial · Commercial</p><h1>Lens <em>Chronicle</em></h1><p className="hero-subtitle">PHOTOGRAPHY</p><div className="hero-actions"><Button asChild className="editorial-button"><Link to="/work">Explore the work <span aria-hidden="true">↗</span></Link></Button></div></div>
   <span className="hero-location">Hyderabad · India</span>
  </section>
  <section className="studio-introduction editorial-container"><div className="studio-introduction-copy" data-motion="lines"><p className="kicker">Lens Chronicle / The studio</p><h2><span>Considered light.</span><span><em>Unmistakably you.</em></span></h2><p>Luxury fashion and editorial photography, made with intention. A Hyderabad studio for people, publications and brands with a distinct point of view.</p><Button asChild variant="ghost" className="editorial-button"><Link to="/about">Meet the studio <span aria-hidden="true">↗</span></Link></Button></div><FocusMotion/></section>
  <HorizontalSequence><section className="selected-section journal-section"><div className="editorial-container section-heading"><div><p className="kicker">Selected photographs / 02</p><h2>The <em>edit.</em></h2></div><Button asChild variant="ghost" className="editorial-button"><Link to="/work">Full portfolio <span aria-hidden="true">↗</span></Link></Button></div><div className="lookbook-rail journal-rail editorial-container">{journal.map((item,index)=><Link to="/work" className="journal-frame" key={item.title}><div className="journal-photo"><img src={item.image} alt={item.title+' photography by Lens Chronicle'} width="1066" height="1600" loading="lazy" decoding="async"/></div><div className="journal-caption"><span>{String(index+1).padStart(2,'0')}</span><h3>{item.title}</h3><span aria-hidden="true">↗</span></div></Link>)}</div><div className="journal-bottom editorial-container"><span>Fashion · Editorial · Commercial</span><div className="journal-progress" aria-hidden="true"><span/></div></div></section></HorizontalSequence>
 </main></SiteLayout>;
}
