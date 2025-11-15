// reasons.ts
import box from "../assets/box.png";
import sensitivity from "../assets/sensitivity.png";
import compare from "../assets/compare.png";
import calculator from "../assets/calculator.png";

export interface Reason {
  title: string;
  desc: string;
  img: string;
}

export const reasons: Reason[] = [
  {
    title: "All-in-one",
    desc: "Property evaluator to price costs, compare deals, and size your loan—fast and confidently.",
    img: box,
  },
  {
    title: "Sensitivity analysis",
    desc: "Stress-test assumptions (rent, growth, vacancy, rates) and forecast outcomes.",
    img: sensitivity,
  },
  {
    title: "Comparison tool",
    desc: "Stack properties by yield, ROI, and other KPIs to spot the best value.",
    img: compare,
  },
  {
    title: "Loan calculator",
    desc: "Calculate monthly repayments and compare rates/tenures side-by-side.",
    img: calculator,
  },
];

export const previews = [
  {
    title: "Deal pipeline",
    desc: "Track intake, diligence, and offer stages in one queue",
  },

  {
    title: "Scenario board",
    desc: "Save fee stacks & loan mixes as reusable snapshots",
  },
  {
    title: "Collaboration ready",
    desc: "Mention teammates and ship read-only summaries",
  },
  {
    title: "Audit-friendly log",
    desc: "Every change is timestamped for compliance",
  },
];
