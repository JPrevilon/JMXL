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
        <form className="join-form" action={siteContent.fanCapture.formAction || undefined} method="post" onSubmit={submit}>
          <label><span>First name</span><input name="firstName" autoComplete="given-name" required /></label>
          <label><span>Email address</span><input type="email" name="email" autoComplete="email" required /></label>
          <label><span>Phone <small>(optional)</small></span><input type="tel" name="phone" autoComplete="tel" /></label>
          <label className="checkbox-row"><input type="checkbox" required /><span>I agree to receive release and merch updates.</span></label>
          <button className="button button--primary" type="submit" disabled={sent}>{sent ? "You’re on the list" : "Get early access"}</button>
          <p className="microcopy" role="status">{sent ? "Thanks. Your interest has been recorded for this preview." : "No spam. Just music, drops, and important updates."}</p>
        </form>
      </div>
    </section>
  );
}
