import { createFileRoute, Link } from "@tanstack/react-router";

import { PageIntro, SiteLayout } from "@/components/site-layout";
import { imagery } from "@/lib/portfolio";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Photography Services | Lens Chronicle" },
    { name: "description", content: "Fashion campaigns, editorial stories and commercial photography by Lens Chronicle." },
    { property: "og:title", content: "Photography Services | Lens Chronicle" },
    { property: "og:description", content: "Creative direction and photography for fashion, editorial and commercial commissions." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ServicesPage,
});

const services = [
  { number: "01", title: "Fashion Campaigns", body: "Distinctive campaign and lookbook imagery that gives a collection its own visual language.", details: ["Campaign concepts", "Lookbooks & collections", "Model portfolios", "Creative direction"] },
  { number: "02", title: "Editorial", body: "Narrative-led stories made for magazines, independent publications and creative collaborations.", details: ["Editorial stories", "Publication commissions", "Portraiture", "Art direction"] },
  { number: "03", title: "Commercial", body: "Polished brand imagery created to communicate clearly across campaigns, social and digital platforms.", details: ["Brand campaigns", "Advertising imagery", "Product-led stories", "Content libraries"] },
];

function ServicesPage() {
  return <SiteLayout><main className="inner-page"><PageIntro index="02" eyebrow="What we create" title={<>Built around<br />your story.</>} description="From the first reference to the final frame, every commission is shaped with purpose." />
    <section className="services-list">{services.map((service) => <article key={service.title}><span>{service.number}</span><h2>{service.title}</h2><p>{service.body}</p><ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></article>)}</section>
    <section className="process"><div className="process-image"><img src={imagery.studioTwo} alt="Behind a Lens Chronicle editorial portrait" width="949" height="1935" loading="lazy" decoding="async" /></div><div><p className="kicker">A considered process</p><h2>Listen.<br />Shape.<br />Create.</h2><ol><li><span>01</span><p><b>Discovery</b>Goals, audience, references and practical needs.</p></li><li><span>02</span><p><b>Direction</b>A focused visual approach, treatment and production plan.</p></li><li><span>03</span><p><b>Production</b>A calm, collaborative shoot and a carefully finished delivery.</p></li></ol><Link to="/contact">Discuss your project <span aria-hidden="true">↗</span></Link></div></section>
  </main></SiteLayout>;
}