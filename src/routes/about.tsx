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
        <h1 className="founder-name">Malluvalasa <em>Narasimha</em></h1>
        <p className="about-hero-role">Founder &amp; Photographer | Lens Chronicle Photography</p>
      </div>
      <ViewfinderMotion/>
    </section>

    <section className="about-editorial editorial-container">
      <figure className="about-portrait founder-portrait">
        <img src={founderPhoto.url} alt="Narasimha, founder of Lens Chronicle Photography, holding his camera in the studio" width="768" height="1152" loading="eager" decoding="async"/>
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
      <h2 className="single-line-title" data-motion="lines">What the lens <em>is drawn to.</em></h2>
      <ul className="discipline-tags">
        {disciplines.map((item, index) => <li key={item} data-motion="rise" style={{ transitionDelay: `${index * 80}ms` }}><i aria-hidden="true"/><span>{item}</span></li>)}
      </ul>
    </section>

    <section className="about-principles editorial-container">
      <p className="kicker" data-motion="rise">03 / The journey</p>
      <div className="journey-cards">
        {journey.map((item, index) => <article className="journey-card" key={item.title} data-motion="rise" style={{ transitionDelay: `${index * 120}ms` }}>
          <i aria-hidden="true"/>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </article>)}
      </div>
    </section>

    <section className="about-philosophy editorial-container">
      <div className="philosophy-statement" data-motion="focus-pull">
        <p className="kicker">04 / My philosophy</p>
        <span className="philosophy-frame" aria-hidden="true"><i/><i/><i/><i/></span>
        <h2 className="philosophy-line"><span>Every frame <em>has a story</em></span></h2>
        <p>My goal is to bring that story to life through photography.</p>
        <div className="philosophy-scale" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/></div>
      </div>
    </section>

  </main></SiteLayout>;
}
