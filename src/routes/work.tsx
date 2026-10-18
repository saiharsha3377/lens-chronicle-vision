import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
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
 return <SiteLayout><main className="inner-page work-edition"><header className="work-opening editorial-container"><h1 data-motion="archive-title">Selected <em>work</em></h1><div className="archive-opening-details" data-motion="from-right"><span className="archive-exposure" aria-hidden="true"><i/><i/><i/><i/><i/><i/><i/><i/><i/></span><p>Fashion, people and the moments between.<br/>A selection from the studio.</p></div></header><section className="portfolio archive editorial-container" aria-label="Selected photographs"><WorkGallery/></section></main></SiteLayout>;
}
