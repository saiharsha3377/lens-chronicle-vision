import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
import { WorkGallery } from "@/components/work-gallery";
import { imagery } from "@/lib/portfolio";

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
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <main>
        <section className="opening">
          <div className="opening-portrait"><img src={imagery.main} alt="Fashion portrait in a red sculptural gown" width="1600" height="2400" loading="eager" fetchPriority="high" decoding="async" /></div>
          <p className="opening-index">Selected works · 2023–26</p>
          <div className="title-lockup"><p>Fashion · Editorial · Commercial</p><h1>Lens Chronicle</h1><span>Photography</span></div>
          <Link className="scroll-cue" to="/work">Explore work <b aria-hidden="true">↗</b></Link>
        </section>

        <section className="portfolio home-portfolio">
          <div className="section-heading"><span>01</span><h2>Selected<br />Chronicles</h2><p>A study of form, fabric and presence.</p></div>
          <WorkGallery limit={4} />
          <div className="section-link"><Link to="/work">View the complete portfolio <span aria-hidden="true">→</span></Link></div>
        </section>

        <section className="home-statement">
          <p>02 · Our point of view</p>
          <h2>Light remembers<br />what time forgets.</h2>
          <div><p>Considered imagery where fashion, character and atmosphere meet. Every frame is shaped with clarity, restraint and an instinct for the unexpected.</p><Link to="/about">Discover the studio <span aria-hidden="true">↗</span></Link></div>
        </section>
      </main>
    </SiteLayout>
  );
}