import { useReveal, useCountUp } from "../hooks";
import "./metrics.css";

interface MetricItem {
  num: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

const items: MetricItem[] = [
  { num: 5, suffix: " min", label: "to model a property end-to-end" },
  { num: 18, prefix: "RM ", suffix: "k", label: "average closing-cost surprises caught" },
  { num: 12.4, suffix: "%", decimals: 1, label: "median ROI lift on the best-fit scenario" },
];

const Metric = ({ item }: { item: MetricItem }) => {
  const [ref, val] = useCountUp(item.num, { decimals: item.decimals || 0 });
  return (
    <div className="metric" ref={ref}>
      <div className="metric-value">
        {item.prefix}<span className="num">{val}</span>{item.suffix}
      </div>
      <div className="metric-label">{item.label}</div>
    </div>
  );
};

const Metrics = () => {
  const ref = useReveal<HTMLElement>();
  return (
    <section className="metrics r-container r-reveal" ref={ref}>
      <div className="metrics-head">
        <div>
          <span className="r-eyebrow">By the numbers</span>
          <h2 style={{ marginTop: "0.7rem" }}>What early users <em>tell us they get back.</em></h2>
        </div>
        <p>Self-reported from our private beta of investors and agents in Klang Valley and Penang. We refresh these as the cohort grows.</p>
      </div>
      <div className="metrics-grid">
        {items.map((m, i) => <Metric key={i} item={m} />)}
      </div>
    </section>
  );
};

export default Metrics;
