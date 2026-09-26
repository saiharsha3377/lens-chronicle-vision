import { createFileRoute, Link } from "@tanstack/react-router";

import { PageIntro, SiteLayout } from "@/components/site-layout";
import { imagery } from "@/lib/portfolio";

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
  return <SiteLayout><main className="inner-page"><PageIntro index="03" eyebrow="Behind the lens" title={<>A chronicle<br />of presence.</>} description="Photography rooted in observation, emotion and the space between a planned frame and an honest moment." />
    <section className="about-story"><div className="about-image tall"><img src={imagery.ceremonyFour} alt="Fashion portrait from the Lens Chronicle archive" width="1600" height="2400" loading="eager" decoding="async" /></div><div className="about-text"><p className="kicker">Lens Chronicle</p><h2>Images that feel<br />lived, not arranged.</h2><p>Lens Chronicle is a photography practice shaped by fashion, portraiture and visual culture. We approach every commission as a collaboration—listening first, then building an atmosphere where movement, character and detail can become the story.</p><p>Our work balances a clean editorial eye with the warmth of something remembered. The result is imagery designed to hold attention now and retain meaning later.</p><Link to="/contact">Work with us <span aria-hidden="true">↗</span></Link></div></section>
    <section className="about-values"><p>What guides the work</p><div><article><span>01</span><h3>Clarity</h3><p>Every decision earns its place in the frame.</p></article><article><span>02</span><h3>Character</h3><p>People and products remain recognisably themselves.</p></article><article><span>03</span><h3>Atmosphere</h3><p>Light, colour and gesture create a world worth entering.</p></article></div></section>
  </main></SiteLayout>;
}