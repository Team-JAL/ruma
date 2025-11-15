import { useState } from "react";
import "./waitlist.css";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formsubmit.co/ajax/inbox@ajile.team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="waitlist" id="waitlist-section">
      <div className="waitlist_content">
        <span className="waitlist_badge">Early access</span>
        <h2>Be first to know when we open Ruma to the public.</h2>
        <p>
          We're polishing the final workflows with a small group of investors and
          agents. Drop your email to get product updates and an invite.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="waitlist_form">
        <div className="waitlist_form-wrapper">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Notify me</button>
        </div>
        {status === "success" && <p className="status success">You're on the list 🎉</p>}
        {status === "error" && (
          <p className="status error">Something went wrong. Try again.</p>
        )}
      </form>

      <small>No spam--just beta invites and progress notes.</small>
    </section>
  );
};

export default Waitlist;
