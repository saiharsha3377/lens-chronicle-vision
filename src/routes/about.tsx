import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
import approachPhoto from "@/assets/reference/instagram-6.webp.asset.json";
import { referenceImages } from "@/lib/reference-design";
import { ContactSheetMotion } from "@/components/contact-sheet-motion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Lens Chronicle Photography" },
    { name: "description", content: "Meet Lens Chronicle, a photography practice focused on fashion, people and visual storytelling." },
    { property: "og:title", content: "About Lens Chronicle Photography" },
    { property: "og:description", content: "A photography practice finding lasting stories in gesture, light and detail." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: AboutPage,
});

function AboutPage() {
 return <SiteLayout><main className="inner-page about-edition">
  <section className="services-intro about-intro editorial-container"><div data-motion="lines"><p className="kicker">About / Lens Chronicle</p><h1><span>A point</span><span><em>of view.</em></span></h1><p>Fashion. People. Presence. A Hyderabad photography studio finding something lasting in the way you see and are seen.</p></div><ContactSheetMotion/></section>
  <section className="about-editorial editorial-container"><figure className="about-portrait" data-motion="settle"><img src={referenceImages.studio} alt="Lens Chronicle fashion portrait in a coral sari" width="1200" height="1500" loading="lazy" decoding="async"/><figcaption>Lens Chronicle / Hyderabad · India</figcaption></figure><div className="about-narrative" data-motion="from-right"><p className="kicker">01 / The studio</p><h2>More than an image.<br/><em>A feeling.</em></h2><p>Photography begins with a connection. The quiet moment when someone stops performing for the camera, and simply becomes themselves.</p><p>Our work moves between fashion editorials, model portfolios and brand campaigns. The approach stays the same: direction with kindness, light with honesty, and a considered eye for the smallest details.</p><Button asChild variant="ghost" className="editorial-button"><Link to="/services">Our commissions <span aria-hidden="true">↗</span></Link></Button></div></section>
  <section className="about-principles editorial-container"><p className="kicker" data-motion="rise">02 / A considered process</p>{[{title:'Find the story.',body:'A conversation, a reference, an idea. We begin by understanding the person or collection in front of the camera.'},{title:'Make space for presence.',body:'Quiet direction and intentional lighting. Room for movement, character and the moments between poses.'},{title:'Keep it honest.',body:'Skin stays skin. Fabric stays true. Every final image is finished with care, without losing what made it real.'}].map((item,index)=><article className="principle-row" key={item.title} data-motion="lines"><span>{String(index+1).padStart(2,'0')}</span><h3><span>{item.title}</span></h3><p>{item.body}</p></article>)}</section>
  <section className="about-closing editorial-container"><div data-motion="lines"><p className="kicker">03 / The philosophy</p><h2><span>Directed.</span><span><em>Never overdone.</em></span></h2><p>A strong photograph needs no explanation. Just a person, a point of view, and the right light.</p><Button asChild variant="ghost" className="editorial-button"><Link to="/work">Discover the work <span aria-hidden="true">↗</span></Link></Button></div><figure className="about-portrait" data-motion="settle"><img src={approachPhoto.url} alt="Outdoor fashion portrait by Lens Chronicle" width="1067" height="1600" loading="lazy" decoding="async"/><figcaption>Fashion / On location</figcaption></figure></section>
 </main></SiteLayout>;
}
