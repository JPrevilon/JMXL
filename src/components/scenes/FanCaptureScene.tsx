"use client";

import { FormEvent, useState } from "react";
import { siteContent } from "@/data/siteContent";

export function FanCaptureScene() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    if (siteContent.fanCapture.formAction) return;
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="join" data-scene="join" className="scene join-scene">
      <div className="scene__inner join-layout">
        <div>
          <p className="eyebrow">{siteContent.scenes.join.eyebrow}</p>
          <h2>{siteContent.fanCapture.heading}</h2>
          <p className="join-intro">{siteContent.fanCapture.description}</p>
        </div>
        <form className="join-form" action={siteContent.fanCapture.formAction || undefined} method="post" onSubmit={submit} aria-describedby="join-privacy join-status">
          <label><span>First name</span><input name="firstName" autoComplete="given-name" required aria-required="true" /></label>
          <label><span>Email address</span><input type="email" name="email" autoComplete="email" required aria-required="true" /></label>
          <label><span>Phone <small>(optional)</small></span><input type="tel" name="phone" autoComplete="tel" /></label>
          <label className="checkbox-row"><input type="checkbox" name="consent" value="release-and-merch-updates" required aria-required="true" /><span>I agree to receive release and merch updates. Consent is required to join and can be withdrawn at any time.</span></label>
          <button className="button button--primary" type="submit" disabled={sent}>{sent ? "You’re on the list" : "Get early access"}</button>
          <p id="join-privacy" className="microcopy">No spam. Just music, drops, and important updates.</p>
          <p id="join-status" className="microcopy" role="status" aria-live="polite">{sent ? "Thanks. Your interest has been recorded for this preview." : "All required fields must be completed before submission."}</p>
        </form>
      </div>
    </section>
  );
}
