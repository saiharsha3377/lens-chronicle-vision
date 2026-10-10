import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site-layout";
import approachPhoto from "@/assets/reference/instagram-6.webp.asset.json";
import { referenceImages } from "@/lib/reference-design";

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
 return <SiteLayout><main className="inner-page"><section className="about-story editorial-container"><div className="about-text"><p className="kicker">About</p><h1>The eye behind <em>the chronicle</em></h1><p>Photography, for this studio, has never been about the camera. It’s about the moment a person forgets they’re being photographed - and the frame that keeps it forever.</p><p>The work spans editorials, model portfolios, brand campaigns and celebrity portraits, with a simple approach: direct with kindness, light with honesty, and compose every frame as if it’s going to print.</p><blockquote>“A photograph should feel like a page torn from a story - yours.”</blockquote><Link className="text-link" to="/contact">Work with the studio →</Link></div><img src={referenceImages.studio} alt="Lens Chronicle fashion portrait in a coral sari" width="1200" height="1500" loading="eager" decoding="async"/></section><section className="about-approach"><div className="editorial-container about-story"><img src={approachPhoto.url} alt="Outdoor fashion portrait by Lens Chronicle" width="1067" height="1600" loading="lazy" decoding="async"/><div className="about-text"><p className="kicker">Approach</p><h2>Directed, never <em>staged</em></h2><p>Every shoot starts long before the first frame - moodboards, casting conversations, light tests, a playlist that sets the room’s pulse. On set, the direction is quiet and specific. The best images happen in the space between instructions.</p><p>Post-production is treated like retouching for print: skin stays skin, fabric stays true, and nothing leaves the studio that wouldn’t survive a double-page spread.</p></div></div></section></main></SiteLayout>;
}
