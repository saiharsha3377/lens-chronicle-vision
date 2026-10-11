import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import landscapePhoto from "@/assets/web/home-landscape.webp.asset.json";
import portraitPhoto from "@/assets/web/home-portrait.webp.asset.json";
import { SelectedEdit } from "@/components/selected-edit";
import { FocusMotion } from "@/components/focus-motion";

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
    links: [{ rel: "preload", as: "image", href: landscapePhoto.url, media: "(min-width: 901px)", fetchPriority: "high" }, { rel: "preload", as: "image", href: portraitPhoto.url, media: "(max-width: 900px)", fetchPriority: "high" }],
  }),
  component: HomePage,
});

function HomePage() {
 return <SiteLayout><main className="minimal-home">
   <section className="opening landscape-opening new-home-opening">
    <picture><source media="(max-width: 900px)" srcSet={portraitPhoto.url}/><img className="hero-photo" src={landscapePhoto.url} alt="Seated fashion portrait in a flowing red embroidered dress by Lens Chronicle Photography" width="2000" height="1100" loading="eager" fetchPriority="high" decoding="async" /></picture>
   <div className="hero-copy editorial-container"><p className="kicker">Fashion · Editorial · Commercial</p><h1>Lens <em>Chronicle</em></h1><p className="hero-subtitle">PHOTOGRAPHY</p><div className="hero-actions"><Button asChild className="editorial-button"><Link to="/work">Explore the work <span aria-hidden="true">↗</span></Link></Button></div></div>
   <span className="hero-location">Hyderabad · India</span>
  </section>
  <section className="studio-introduction editorial-container"><div className="studio-introduction-copy" data-motion="lines"><p className="kicker">Lens Chronicle / The studio</p><h2><span>Considered light.</span><span><em>Unmistakably you.</em></span></h2><p>Luxury fashion and editorial photography, made with intention. A Hyderabad studio for people, publications and brands with a distinct point of view.</p><Button asChild variant="ghost" className="editorial-button"><Link to="/about">Meet the studio <span aria-hidden="true">↗</span></Link></Button></div><FocusMotion/></section>
   <SelectedEdit />
 </main></SiteLayout>;
}
