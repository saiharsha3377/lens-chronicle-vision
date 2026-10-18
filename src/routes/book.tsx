import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { PHONE_DISPLAY, PHONE_TEL, SiteLayout, WHATSAPP_URL } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/book")({
  head: () => ({ meta: [
    { title: "Book a Shoot | Lens Chronicle Photography" },
    { name: "description", content: "Share your fashion, editorial or commercial photography project with Lens Chronicle." },
    { property: "og:title", content: "Book a Shoot | Lens Chronicle Photography" },
    { property: "og:description", content: "Tell Lens Chronicle about your project, timeline and budget." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: BookingPage,
});

const FORMSPREE_ENDPOINT = "";
type FormStatus = "idle" | "submitting" | "success" | "error" | "unconfigured";

function BookingPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!FORMSPREE_ENDPOINT) { setStatus("unconfigured"); return; }
    setStatus("submitting");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Submission failed");
      form.reset(); setProjectType(""); setBudget(""); setStatus("success");
    } catch { setStatus("error"); }
  }

  return <SiteLayout><main className="inner-page booking-page"><header className="page-intro booking-intro"><h1>Start the <em>conversation</em></h1></header>
    <section className="contact-layout editorial-container"><aside aria-label="Studio contact details"><dl><div><dt>Name</dt><dd>Narasimha</dd></div><div><dt>Mobile</dt><dd><a href={PHONE_TEL}>{PHONE_DISPLAY}</a><a className="booking-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp ↗</a></dd></div><div><dt>Email</dt><dd><a href="mailto:lenschroniclephotography@gmail.com">lenschroniclephotography@gmail.com</a></dd></div></dl></aside>
      <form className="inquiry-form" onSubmit={submitInquiry} noValidate={false}>
        <input className="honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <div className="field-row"><label><span>Your name *</span><Input name="name" required maxLength={100} autoComplete="name" placeholder="Name" /></label><label><span>Email address *</span><Input name="email" type="email" required maxLength={255} autoComplete="email" placeholder="you@company.com" /></label></div>
        <div className="field-row"><label><span>Phone</span><Input name="phone" type="tel" maxLength={40} autoComplete="tel" placeholder="Optional" /></label><label><span>Brand or publication</span><Input name="brand" maxLength={120} autoComplete="organization" placeholder="Optional" /></label></div>
        <div className="field-row"><div className="booking-select-field"><label id="project-type-label" htmlFor="project-type">Project type *</label><Select name="projectType" required value={projectType} onValueChange={setProjectType}><SelectTrigger id="project-type" aria-labelledby="project-type-label" className="booking-select-trigger"><SelectValue placeholder="Select a service" /></SelectTrigger><SelectContent className="booking-select-menu">{["Fashion campaign", "Editorial", "Commercial", "Other"].map(value => <SelectItem key={value} value={value}>{value}</SelectItem>)}</SelectContent></Select></div><label><span>Preferred timeline *</span><Input name="timeline" required maxLength={120} placeholder="e.g. March-April 2027" /></label></div>
        <div className="booking-select-field"><label id="budget-label" htmlFor="budget">Estimated budget *</label><Select name="budget" required value={budget} onValueChange={setBudget}><SelectTrigger id="budget" aria-labelledby="budget-label" className="booking-select-trigger"><SelectValue placeholder="Select a range" /></SelectTrigger><SelectContent className="booking-select-menu">{["Under ₹50,000", "₹50,000-₹1,00,000", "₹1,00,000-₹2,50,000", "₹2,50,000+", "To be discussed"].map(value => <SelectItem key={value} value={value}>{value}</SelectItem>)}</SelectContent></Select></div>
        <label><span>Tell us about the project *</span><Textarea name="details" required minLength={20} maxLength={2000} rows={7} placeholder="Scope, location, intended use and anything else we should know." /></label>
        <Button className="submit-button" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Send inquiry"}<span aria-hidden="true">↗</span></Button>
        <p className={`form-status status-${status}`} role="status">{status === "success" && "Thank you. Your inquiry is on its way."}{status === "error" && "The inquiry could not be sent. Please try again."}{status === "unconfigured" && "Online inquiries are not available yet. Please contact the studio on WhatsApp."}</p>
      </form>
    </section>
  </main></SiteLayout>;
}