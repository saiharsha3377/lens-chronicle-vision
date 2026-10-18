import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
import founderPhoto from "@/assets/reference/founder-narasimha.jpg.asset.json";
import { ViewfinderMotion } from "@/components/viewfinder-motion";
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

const disciplines = ["Fashion photography", "Editorial concepts", "Beauty portraits", "Model portfolios", "Commercial fashion", "Lifestyle imagery"];

const journey = [
  { title: "The craft.", body: "Through creative lighting, thoughtful composition, colour and visual direction, Narasimha shapes images that feel elegant, expressive, cinematic and timeless." },
  { title: "The vision.", body: "For Narasimha, photography is more than capturing a moment. It is about understanding a vision, exploring creative possibilities, and transforming ideas into meaningful visual experiences." },
  { title: "The collaboration.", body: "Lens Chronicle welcomes models, fashion designers, makeup artists, stylists and brands who share a passion for creativity and visual storytelling - always learning, always refining, with a particular love for luxury editorial fashion." },
];

function AboutPage() {
  return <SiteLayout><main className="inner-page about-edition">
    <section className="about-hero editorial-container">
      <div className="about-hero-copy" data-motion="lines">
        <p className="kicker">About / The Founder</p>
        <h1><span>Malluvalasa</span><span><em>Narasimha.</em></span></h1>
        <p className="about-hero-role">Founder &amp; Photographer | Lens Chronicle Photography</p>
      </div>
      <ViewfinderMotion/>
    </section>

    <section className="about-editorial editorial-container">
      <figure className="about-portrait founder-portrait">
        <img src={founderPhoto.url} alt="Narasimha, founder of Lens Chronicle Photography, holding his camera in the studio" width="768" height="1152" loading="eager" decoding="async"/>
        <figcaption>Narasimha / Hyderabad · India</figcaption>
      </figure>
      <div className="about-narrative" data-motion="from-right">
        <p className="kicker">01 / The beginning</p>
        <h2>A photographer.<br/><em>A storyteller.</em></h2>
        <p>I&rsquo;m Narasimha, a photographer based in Hyderabad, India, and the founder of Lens Chronicle Photography.</p>
        <p>My passion lies in capturing fashion, beauty, personality and emotion through compelling visual storytelling. I believe every photograph has the power to communicate a story, express an identity, and create a lasting impression.</p>
        <Button asChild variant="ghost" className="editorial-button"><Link to="/work">See the work <span aria-hidden="true">↗</span></Link></Button>
      </div>
    </section>

    <section className="about-disciplines editorial-container">
      <p className="kicker" data-motion="rise">02 / The work</p>
      <h2 data-motion="lines"><span>What the lens</span><span><em>is drawn to.</em></span></h2>
      <ul>
        {disciplines.map((item, index) => <li key={item} data-motion="from-left" style={{ transitionDelay: `${index * 70}ms` }}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}
      </ul>
    </section>

    <section className="about-principles editorial-container">
      <p className="kicker" data-motion="rise">03 / The journey</p>
      {journey.map((item, index) => <article className="principle-row" key={item.title} data-motion="lines">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <h3><span>{item.title}</span></h3>
        <p>{item.body}</p>
      </article>)}
    </section>

    <section className="about-philosophy editorial-container">
      <div className="philosophy-rail" data-motion="rise">
        <span>04</span>
        <p>My philosophy</p>
        <i aria-hidden="true"/>
      </div>
      <div className="philosophy-statement" data-motion="focus-pull">
        <h2><span>Every frame</span><span><em>has a story.</em></span></h2>
        <p>My goal is to bring that story to life through photography.</p>
        <div className="philosophy-scale" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/></div>
      </div>
    </section>

  </main></SiteLayout>;
}
