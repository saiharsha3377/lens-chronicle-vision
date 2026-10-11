import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import landscapePhoto from "@/assets/home-landscape-wide.jpg";
import { SelectedEdit } from "@/components/selected-edit";
import { FocusMotion } from "@/components/focus-motion";
import { PhotographicChapters } from "@/components/photographic-chapters";

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
    links: [{ rel: "preload", as: "image", href: landscapePhoto, fetchPriority: "high" }],
  }),
  component: HomePage,
});

function HomePage() {
 return <SiteLayout><main className="minimal-home">
   <section className="opening landscape-opening new-home-opening">
    <img className="hero-photo" src={landscapePhoto} alt="Seated fashion portrait in a flowing red embroidered dress by Lens Chronicle Photography" width="1920" height="1080" loading="eager" fetchPriority="high" decoding="async" />
   <div className="hero-copy editorial-container"><p className="kicker">Fashion · Editorial · Commercial</p><h1>Lens <em>Chronicle</em></h1><p className="hero-subtitle">PHOTOGRAPHY</p><div className="hero-actions"><Button asChild className="editorial-button"><Link to="/work">Explore the work <span aria-hidden="true">↗</span></Link></Button></div></div>
   <span className="hero-location">Hyderabad · India</span>
  </section>
  <section className="studio-introduction editorial-container"><div className="studio-introduction-copy" data-motion="lines"><p className="kicker">Lens Chronicle / The studio</p><h2><span>Considered light.</span><span><em>Unmistakably you.</em></span></h2><p>Luxury fashion and editorial photography, made with intention. A Hyderabad studio for people, publications and brands with a distinct point of view.</p><Button asChild variant="ghost" className="editorial-button"><Link to="/about">Meet the studio <span aria-hidden="true">↗</span></Link></Button></div><FocusMotion/></section>
   <SelectedEdit />
    <PhotographicChapters />
 </main></SiteLayout>;
}
