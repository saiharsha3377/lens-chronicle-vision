import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
import { ServiceCollection } from "@/components/editorial-sections";
import { ApertureMotion } from "@/components/aperture-motion";
import { ProjectInvitation } from "@/components/project-invitation";

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

function ServicesPage() {
 return <SiteLayout><main className="inner-page services-edition"><section className="services-intro editorial-container"><div data-motion="rise"><p className="kicker">Services / Lens Chronicle</p><h1>Photography,<br/><em>with intention.</em></h1><p>From the first idea to the final image. Fashion, editorial and commercial commissions, shaped around your story.</p></div><ApertureMotion/></section><section className="editorial-container services-page" aria-label="Photography commissions"><ServiceCollection/></section><ProjectInvitation /></main></SiteLayout>;
}
