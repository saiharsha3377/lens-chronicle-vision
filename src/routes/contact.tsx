import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Phone } from "lucide-react";

import { PHONE_DISPLAY, PHONE_TEL, SiteLayout, WHATSAPP_URL, WhatsAppIcon } from "@/components/site-layout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({ links: [{ rel: "canonical", href: "https://ivory-lens-chronicle.lovable.app/contact" }], meta: [
    { title: "Contact Malluvalasa Narasimha | Lens Chronicle Photography" },
    { name: "description", content: "Contact Malluvalasa Narasimha at Lens Chronicle Photography by phone, WhatsApp or email." },
    { property: "og:title", content: "Contact Malluvalasa Narasimha | Lens Chronicle Photography" },
    { property: "og:description", content: "Reach the Hyderabad studio directly by call, WhatsApp or email." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "https://ivory-lens-chronicle.lovable.app/contact" },
   
  ]}),
  component: ContactPage,
});

function ContactPage() {
  return <SiteLayout><main className="inner-page direct-contact editorial-container">
    <header className="contact-opening">
      <h1 data-motion="lines">Contact</h1>
      <div className="contact-signal" aria-hidden="true">
        <svg viewBox="0 0 160 160" fill="none">
          <circle className="contact-signal-guide" cx="80" cy="80" r="62" />
          <circle className="contact-signal-orbit" cx="80" cy="80" r="62" pathLength="100" />
          <path className="contact-signal-brackets" d="M48 60V48H60 M100 48H112V60 M112 100V112H100 M60 112H48V100" />
          <path className="contact-signal-arrow" d="M66 94L94 66 M68 66H94V92" />
        </svg>
      </div>
    </header>
    <dl className="direct-contact-details">
      <div data-motion="lines"><dt>Name</dt><dd className="contact-full-name">Malluvalasa <em>Narasimha</em></dd></div>
      <div data-motion="lines"><dt>Mobile</dt><dd><a className="contact-number" href={PHONE_TEL}>{PHONE_DISPLAY}</a>
        <div className="contact-mobile-options"><Button asChild variant="ghost"><a href={PHONE_TEL}><Phone aria-hidden="true"/>Call<ArrowUpRight aria-hidden="true"/></a></Button><Button asChild variant="ghost"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><WhatsAppIcon/>WhatsApp<ArrowUpRight aria-hidden="true"/></a></Button></div>
      </dd></div>
      <div data-motion="lines"><dt>Email</dt><dd><a className="contact-email" href="mailto:lenschroniclephotography@gmail.com"><span>lenschroniclephotography@gmail.com</span><ArrowUpRight aria-hidden="true"/></a></dd></div>
    </dl>
  </main></SiteLayout>;
}