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
  return <SiteLayout><main className="inner-page"><PageIntro index="01" eyebrow="Selected work · 2023–26" title={<>Stories in<br />still form.</>} description="Choose a discipline or move through the complete body of work." /><section className="portfolio archive"><WorkGallery /></section></main></SiteLayout>;
}