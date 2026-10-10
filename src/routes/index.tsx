import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { ProjectInvitation, ServiceCollection } from "@/components/editorial-sections";
import { disciplines, instagramImages, referenceImages, studioStories } from "@/lib/reference-design";
import originalPortrait from "@/assets/web/main-hq.webp.asset.json";
import { HorizontalSequence } from "@/components/horizontal-sequence";
import { INSTAGRAM_URL } from "@/components/site-layout";

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
    links: [{ rel: "preload", as: "image", href: originalPortrait.url, fetchPriority: "high" }],
  }),
  component: HomePage,
});

function HomePage() {
 return <SiteLayout><main>
  <section className="opening">
   <img className="hero-photo" src={originalPortrait.url} alt="Fashion editorial portrait by Lens Chronicle Photography, Hyderabad" width="2000" height="3000" loading="eager" fetchPriority="high" decoding="async" />
   <div className="hero-copy editorial-container"><p className="kicker">Fashion · Editorial · Commercial</p><h1>Lens <em>Chronicle</em></h1><p className="hero-subtitle">PHOTOGRAPHY</p><p className="hero-description">Imagery that feels like a page torn from a story - for models, brands, and the frames worth keeping.</p><div className="hero-actions"><Button asChild className="editorial-button"><Link to="/contact">Book a Shoot <span aria-hidden="true">→</span></Link></Button><Button asChild variant="outline" className="editorial-button button-outline"><Link to="/work">View Portfolio</Link></Button></div></div>
  </section>
  <section className="chronicle-statement"><p className="kicker">The chronicle continues</p><h2>Every frame, <em>a story</em></h2><p>The studio, the work, and the frames waiting for you.</p></section>
  <section className="studio-section editorial-container"><div className="studio-photo"><img src={referenceImages.studio} alt="Fashion portrait in a coral sari by Lens Chronicle" width="1200" height="1500" loading="lazy" decoding="async"/></div><div><p className="kicker">The Studio</p><h2><em>B</em>ehind every frame, a chronicle</h2><div className="studio-stories">{studioStories.map((story,index)=><article key={story.title}><p className="kicker">{String(index+1).padStart(2,'0')}</p><h3>{story.title}</h3><p>{story.body}</p></article>)}</div><Link className="text-link" to="/about">Read the full story →</Link></div></section>
  <HorizontalSequence><section className="discipline-section"><div className="editorial-container section-heading"><div><p className="kicker">Selected Work</p><h2><em>F</em>our disciplines, one signature</h2></div><Link className="text-link" to="/work">View all →</Link></div><div className="discipline-rail editorial-container">{disciplines.map((item,index)=><Link className="discipline-item" to="/work" key={item.title}><img src={item.image} alt={item.title+' photography'} width="1066" height="1600" loading="lazy" decoding="async"/><div><p className="kicker">{String(index+1).padStart(2,'0')}</p><h3>{item.title}</h3><span className="text-link">View collection →</span></div></Link>)}</div></section></HorizontalSequence>
  <HorizontalSequence><section className="lookbook-section"><div className="editorial-container section-heading"><div><p className="kicker">Lookbook</p><h2>Frames in <em>motion</em></h2></div><Link className="text-link" to="/work">Explore the archive →</Link></div><div className="lookbook-rail editorial-container">{disciplines.map((item,index)=><figure key={item.title}><img src={item.image} alt={item.title+' lookbook frame'} width="1066" height="1600" loading="lazy" decoding="async"/><figcaption><span>Frame {String(index+1).padStart(2,'0')}</span><em>{item.title}</em></figcaption></figure>)}</div></section></HorizontalSequence>
  <HorizontalSequence><section className="home-services"><div className="editorial-container"><p className="kicker">Services</p><h2>Let’s get you <em>elevated</em></h2><ServiceCollection preview/><Link className="text-link" to="/services">All services →</Link></div></section></HorizontalSequence>
  <section className="instagram-section editorial-container"><div className="section-heading"><div><p className="kicker">Instagram</p><h2><em>F</em>resh from the feed</h2></div><a className="text-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@lenschroniclephotography ↗</a></div><div className="instagram-grid">{instagramImages.map((image,index)=><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" key={image} aria-label={'View Lens Chronicle on Instagram, photograph '+(index+1)}><img src={image} alt={'Lens Chronicle fashion photograph '+(index+1)} width="1067" height="1600" loading="lazy" decoding="async"/></a>)}</div></section>
  <ProjectInvitation/>
 </main></SiteLayout>;
}
