import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { disciplines, referenceImages } from "@/lib/reference-design";
import { HorizontalSequence } from "@/components/horizontal-sequence";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lens Chronicle Photography | Fashion, Editorial & Commercial" },
      { name: "description", content: "Lens Chronicle creates fashion, editorial and commercial photography with clarity, character and atmosphere." },
      { property: "og:title", content: "Lens Chronicle Photography" },
      { property: "og:description", content: "Fashion, editorial and commercial photography with a refined visual point of view." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "preload", as: "image", href: referenceImages.cta, fetchPriority: "high" }],
  }),
  component: HomePage,
});

function HomePage() {
 return <SiteLayout><main className="minimal-home">
  <section className="opening landscape-opening">
   <img className="hero-photo" src={referenceImages.cta} alt="Seated fashion portrait by Lens Chronicle Photography" width="1067" height="1600" loading="eager" fetchPriority="high" decoding="async" />
   <div className="hero-copy editorial-container"><p className="kicker">Fashion · Editorial · Commercial</p><h1>Lens <em>Chronicle</em></h1><p className="hero-subtitle">PHOTOGRAPHY</p><div className="hero-actions"><Button asChild className="editorial-button"><Link to="/work">Explore the work <span aria-hidden="true">↗</span></Link></Button></div></div>
   <span className="hero-location">Hyderabad · India</span>
  </section>
  <section className="studio-note editorial-container"><p className="kicker">The studio / 01</p><div><h2>Luxury fashion &amp;<br/><em>editorial photography.</em></h2><p>A Hyderabad-based photography practice for fashion, publications and brands. Considered direction. Distinctive imagery.</p><Link className="text-link" to="/about">About the studio <span aria-hidden="true">↗</span></Link></div></section>
  <HorizontalSequence><section className="selected-section"><div className="editorial-container section-heading"><div><p className="kicker">Portfolio / 02</p><h2>Selected <em>work</em></h2></div><Link className="text-link" to="/work">All photographs ↗</Link></div><div className="lookbook-rail editorial-container">{disciplines.map((item,index)=><Link to="/work" className="selected-frame" key={item.title}><img src={item.image} alt={item.title+' photography by Lens Chronicle'} width="1066" height="1600" loading="lazy" decoding="async"/><div><span>{String(index+1).padStart(2,'0')}</span><h3>{item.title}</h3><span aria-hidden="true">↗</span></div></Link>)}</div></section></HorizontalSequence>
 </main></SiteLayout>;
}
