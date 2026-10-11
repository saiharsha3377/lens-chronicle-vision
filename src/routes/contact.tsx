import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Phone, ChevronDown } from "lucide-react";

import { PHONE_DISPLAY, PHONE_TEL, SiteLayout, WHATSAPP_URL, WhatsAppIcon } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Narasimha | Lens Chronicle Photography" },
    { name: "description", content: "Contact Narasimha at Lens Chronicle Photography by phone, WhatsApp or email." },
    { property: "og:title", content: "Contact Narasimha | Lens Chronicle Photography" },
    { property: "og:description", content: "Reach the Hyderabad studio directly by call, WhatsApp or email." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ContactPage,
});

function ContactPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return <SiteLayout><main className="inner-page direct-contact editorial-container">
    <h1>Contact<em>.</em></h1>
    <dl className="direct-contact-details">
      <div><dt>Name</dt><dd>Narasimha</dd></div>
      <div><dt>Mobile</dt><dd><Button variant="ghost" className="contact-mobile-trigger" onClick={() => setMobileOpen(open => !open)} aria-expanded={mobileOpen} aria-controls="mobile-options">{PHONE_DISPLAY}<ChevronDown aria-hidden="true"/></Button>
        {mobileOpen && <div id="mobile-options" className="contact-mobile-options"><Button asChild variant="ghost"><a href={PHONE_TEL}><Phone/>Call</a></Button><Button asChild variant="ghost"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon/>WhatsApp</a></Button></div>}
      </dd></div>
      <div><dt>Email</dt><dd><a className="contact-email" href="mailto:lenschroniclephotography@gmail.com">lenschroniclephotography@gmail.com<ArrowUpRight aria-hidden="true"/></a></dd></div>
    </dl>
  </main></SiteLayout>;
}