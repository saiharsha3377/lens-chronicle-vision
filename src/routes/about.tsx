import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
import founderPhoto from "@/assets/reference/founder-narasimha.jpg.asset.json";
import { ContactSheetMotion } from "@/components/contact-sheet-motion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About the Founder | Lens Chronicle Photography" },
    { name: "description", content: "Meet Narasimha, founder and photographer behind Lens Chronicle Photography in Hyderabad, India." },
    { property: "og:title", content: "About the Founder | Lens Chronicle Photography" },
    { property: "og:description", content: "The story, philosophy and craft of Narasimha, founder of Lens Chronicle Photography." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: AboutPage,
});

const journey = [
  { title: "The craft.", body: "Fashion photography, editorial concepts, beauty portraits, model portfolios, commercial fashion and lifestyle imagery - shaped through creative lighting, thoughtful composition, colour and visual direction." },
  { title: "The vision.", body: "For Narasimha, photography is more than capturing a moment. It is about understanding a vision, exploring creative possibilities, and transforming ideas into meaningful visual experiences." },
  { title: "The collaboration.", body: "Lens Chronicle welcomes models, fashion designers, makeup artists, stylists and brands who share a passion for creativity and visual storytelling - always learning, always refining, with a particular love for luxury editorial fashion." },
];

function AboutPage() {
 return <SiteLayout><main className="inner-page about-edition">
  <section className="services-intro about-intro editorial-container"><div data-motion="lines"><p className="kicker">About / The Founder</p><h1><span>Malluvalasa</span><span><em>Narasimha.</em></span></h1><p>Founder &amp; Photographer | Lens Chronicle Photography</p></div><ContactSheetMotion/></section>
  <section className="about-editorial editorial-container"><figure className="about-portrait founder-portrait" data-motion="settle"><img src={founderPhoto.url} alt="Narasimha, founder of Lens Chronicle Photography, holding his camera in the studio" width="1280" height="1920" loading="eager" decoding="async"/><figcaption>Narasimha / Hyderabad · India</figcaption></figure><div className="about-narrative" data-motion="from-right"><p className="kicker">01 / The beginning</p><h2>A photographer.<br/><em>A storyteller.</em></h2><p>I&rsquo;m Narasimha, a photographer based in Hyderabad, India, and the founder of Lens Chronicle Photography.</p><p>My passion lies in capturing fashion, beauty, personality and emotion through compelling visual storytelling. I believe every photograph has the power to communicate a story, express an identity, and create a lasting impression.</p><Button asChild variant="ghost" className="editorial-button"><Link to="/work">See the work <span aria-hidden="true">↗</span></Link></Button></div></section>
  <section className="about-principles editorial-container"><p className="kicker" data-motion="rise">02 / The journey</p>{journey.map((item,index)=><article className="principle-row" key={item.title} data-motion="lines"><span>{String(index+1).padStart(2,'0')}</span><h3><span>{item.title}</span></h3><p>{item.body}</p></article>)}</section>
  <section className="about-philosophy editorial-container"><div data-motion="lines"><p className="kicker">03 / My philosophy</p><h2><span>Every frame</span><span><em>has a story.</em></span></h2><p>My goal is to bring that story to life through photography - images that feel elegant, expressive, cinematic and timeless.</p></div></section>
  <section className="about-closing editorial-container"><div data-motion="lines"><p className="kicker">04 / Let&rsquo;s create something meaningful</p><h2><span>Have a concept,</span><span><em>a story to tell?</em></span></h2><p>A creative concept, a portfolio to build, or a brand story to tell - let&rsquo;s collaborate and bring your vision to life.</p><Button asChild variant="ghost" className="editorial-button"><Link to="/book">Book a shoot <span aria-hidden="true">↗</span></Link></Button></div><div className="about-signature" data-motion="from-right"><p>Lens <em>Chronicle</em></p><span>PHOTOGRAPHY</span><small>Fashion · Editorial · Commercial</small><small>Hyderabad, India</small></div></section>
 </main></SiteLayout>;
}
