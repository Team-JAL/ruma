import { useState } from "react";
import { Link } from "react-router";
import type { MetaFunction } from "react-router";
import TopNav from "../components/TopNav";
import "../components/hero.css";
import "../components/waitlistform.css";

export const meta: MetaFunction = () => [
  { title: "Join the waitlist — Ruma" },
  {
    name: "description",
    content:
      "Help us prioritize early invites. Sign up for early access to Ruma.",
  },
  { name: "robots", content: "noindex, follow" },
];

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
// Public by design — this access key only routes submissions to inbox@ajile.team.
const WEB3FORMS_ACCESS_KEY = "38abe58c-9b9c-4bf0-b25a-04bb16acb121";

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;

    const name = (payload.name || "").toString().trim();
    payload.access_key = WEB3FORMS_ACCESS_KEY;
    payload.from_name = "Ruma Waitlist";
    payload.subject = name
      ? `New Ruma waitlist signup — ${name}`
      : "New Ruma waitlist signup";

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => ({}))) as { success?: string | boolean };
      const ok = res.ok && (data.success === true || data.success === "true");
      if (!ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      setError("Something went wrong. Please try again, or email inbox@ajile.team.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="wf-page">
      <TopNav />

      <main className="wf-main r-container">
        {submitted ? (
          <div className="wf-success">
            <div className="wf-success-icon">
              <CheckIcon />
            </div>
            <h1>You're on the list.</h1>
            <p>
              Thanks for signing up. We'll reach out as we open invite waves —
              keep an eye on your inbox.
            </p>
            <Link to="/" className="wf-success-back">
              Back to home <ArrowIcon />
            </Link>
          </div>
        ) : (
          <>
            <div className="wf-intro">
              <span className="r-eyebrow">Waitlist</span>
              <h1>Sign up for early access.</h1>
              <p>
                Help us prioritize early invites and tailor the first run of Ruma to
                what you actually need.
              </p>
            </div>

            <form className="wf-form" onSubmit={handleSubmit}>
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                aria-hidden="true"
              />

              <div className="wf-row">
                <div className="wf-field">
                  <label htmlFor="wf-name">
                    Name <span className="wf-req">*</span>
                  </label>
                  <input
                    id="wf-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="wf-field">
                  <label htmlFor="wf-email">
                    Email <span className="wf-req">*</span>
                  </label>
                  <input
                    id="wf-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="wf-field">
                <label htmlFor="wf-company">Company / role</label>
                <input
                  id="wf-company"
                  name="company"
                  type="text"
                  autoComplete="organization-title"
                />
              </div>

              <div className="wf-field">
                <label htmlFor="wf-usage">What will you use this for?</label>
                <textarea
                  id="wf-usage"
                  name="usage"
                  rows={4}
                  placeholder="A bit of context on the deals you're evaluating, the markets you're in, or what's not working in your current workflow."
                />
              </div>

              <div className="wf-field">
                <label htmlFor="wf-source">How did you hear about us?</label>
                <div className="wf-select-wrap">
                  <select id="wf-source" name="source" defaultValue="">
                    <option value="" disabled>Select an option…</option>
                    <option value="friend">From a friend or colleague</option>
                    <option value="twitter">Twitter / X</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="google">Google search</option>
                    <option value="forum">Forum or community</option>
                    <option value="other">Other</option>
                  </select>
                  <span className="wf-select-caret" aria-hidden="true" />
                </div>
              </div>

              <fieldset className="wf-field wf-fieldset">
                <legend>
                  Would you be open to providing feedback? <span className="wf-req">*</span>
                </legend>
                <div className="wf-pills">
                  <label className="wf-pill">
                    <input type="radio" name="feedbackCall" value="yes" required />
                    <span>Yes</span>
                  </label>
                  <label className="wf-pill">
                    <input type="radio" name="feedbackCall" value="no" required />
                    <span>No thanks</span>
                  </label>
                </div>
              </fieldset>

              <div className="wf-actions">
                <button type="submit" className="wf-submit" disabled={submitting}>
                  {submitting ? "Submitting…" : (<>Join the waitlist <ArrowIcon /></>)}
                </button>
                {error && (
                  <p className="wf-fineprint" role="alert" style={{ color: "#b42318" }}>
                    {error}
                  </p>
                )}
                <p className="wf-fineprint">
                  We'll only use this to send you product updates and invites. No spam.
                </p>
              </div>
            </form>
          </>
        )}
      </main>
    </div>
  );
}
