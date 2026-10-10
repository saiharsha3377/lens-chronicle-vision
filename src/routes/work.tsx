import { createFileRoute } from "@tanstack/react-router";

import { PageIntro, SiteLayout } from "@/components/site-layout";
import { WorkGallery } from "@/components/work-gallery";

export const Route = createFileRoute("/work")({
  head: () => ({ meta: [
    { title: "Selected Work | Lens Chronicle Photography" },
    { name: "description", content: "Explore Lens Chronicle fashion, editorial and commercial photography by category." },
    { property: "og:title", content: "Selected Work | Lens Chronicle Photography" },
    { property: "og:description", content: "A filterable portfolio of fashion, editorial and commercial photography." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: WorkPage,
});

function WorkPage() {
 return <SiteLayout><main className="inner-page"><PageIntro index="01" eyebrow="Portfolio" title={<>Selected <em>work</em></>} description="A working archive of fashion, editorials, portfolios, campaigns and talent shoots."/><section className="portfolio archive editorial-container"><WorkGallery/></section></main></SiteLayout>;
}
