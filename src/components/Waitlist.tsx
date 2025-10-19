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
    <section className="waitlist">

        <h2>Interested ?</h2>
      <form onSubmit={handleSubmit} className="waitlist_form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Get Notified</button>
      </form>

      {status === "success" && <p className="success">You're on the list 🎉</p>}
      {status === "error" && <p className="error">Something went wrong. Try again.</p>}
    </section>
  );
};

export default Waitlist;
