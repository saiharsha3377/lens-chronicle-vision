import { createFileRoute } from "@tanstack/react-router";

import { PageIntro, SiteLayout } from "@/components/site-layout";
import { ServiceCollection } from "@/components/editorial-sections";

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
 return <SiteLayout><main className="inner-page"><PageIntro index="02" eyebrow="Services" title={<>What the studio <em>offers</em></>} description="Every engagement is scoped to the story - day rates, half-days and multi-day campaigns available. Enquire with your vision and the studio will build the shoot around it."/><section className="editorial-container services-page"><ServiceCollection/></section></main></SiteLayout>;
}
