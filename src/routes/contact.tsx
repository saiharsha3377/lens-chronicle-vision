import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { PageIntro, SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Project Inquiry | Lens Chronicle Photography" },
    { name: "description", content: "Share your fashion, editorial or commercial photography project with Lens Chronicle." },
    { property: "og:title", content: "Project Inquiry | Lens Chronicle Photography" },
    { property: "og:description", content: "Tell Lens Chronicle about your project, timeline and budget." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ContactPage,
});

const FORMSPREE_ENDPOINT = "";
type FormStatus = "idle" | "submitting" | "success" | "error" | "unconfigured";

function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!FORMSPREE_ENDPOINT) { setStatus("unconfigured"); return; }
    setStatus("submitting");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Submission failed");
      form.reset(); setStatus("success");
    } catch { setStatus("error"); }
  }

  return <SiteLayout><main className="inner-page"><PageIntro index="04" eyebrow="Project inquiry" title={<>Let’s make<br />something lasting.</>} description="Tell us what you are planning. The more context you share, the more considered our first conversation can be." />
    <section className="contact-layout"><aside><p className="kicker">Before we begin</p><p>For campaigns, editorials and commercial commissions, share your timing and approximate investment. We will reply with availability and the right next step.</p><dl><div><dt>Based in</dt><dd>India · Available worldwide</dd></div><div><dt>Response time</dt><dd>Within 2 business days</dd></div></dl></aside>
      <form className="inquiry-form" onSubmit={submitInquiry} noValidate={false}>
        <input className="honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <div className="field-row"><label><span>Your name *</span><Input name="name" required maxLength={100} autoComplete="name" placeholder="Name" /></label><label><span>Email address *</span><Input name="email" type="email" required maxLength={255} autoComplete="email" placeholder="you@company.com" /></label></div>
        <div className="field-row"><label><span>Phone</span><Input name="phone" type="tel" maxLength={40} autoComplete="tel" placeholder="Optional" /></label><label><span>Brand or publication</span><Input name="brand" maxLength={120} autoComplete="organization" placeholder="Optional" /></label></div>
        <div className="field-row"><label><span>Project type *</span><select name="projectType" required defaultValue=""><option value="" disabled>Select a service</option><option>Fashion campaign</option><option>Editorial</option><option>Commercial</option><option>Other</option></select></label><label><span>Preferred timeline *</span><Input name="timeline" required maxLength={120} placeholder="e.g. March–April 2027" /></label></div>
        <label><span>Estimated budget *</span><select name="budget" required defaultValue=""><option value="" disabled>Select a range</option><option>Under ₹50,000</option><option>₹50,000–₹1,00,000</option><option>₹1,00,000–₹2,50,000</option><option>₹2,50,000+</option><option>To be discussed</option></select></label>
        <label><span>Tell us about the project *</span><Textarea name="details" required minLength={20} maxLength={2000} rows={7} placeholder="Scope, location, intended use and anything else we should know." /></label>
        <Button className="submit-button" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Send inquiry"}<span aria-hidden="true">↗</span></Button>
        <p className={`form-status status-${status}`} role="status">{status === "success" && "Thank you. Your inquiry is on its way."}{status === "error" && "The inquiry could not be sent. Please try again."}{status === "unconfigured" && "Add your Formspree form address to activate submissions."}</p>
      </form>
    </section>
  </main></SiteLayout>;
}