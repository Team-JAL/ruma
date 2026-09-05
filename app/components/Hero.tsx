import { useEffect, useState } from "react";
import TopNav from "./TopNav";
import "./hero.css";

interface HeroPropCard {
  name: string;
  meta: string;
  icon: "home" | "building";
  yield_: number;
  actualCost: string;
  rental: string;
  cashflow: string;
  dscr: string;
  pills: string[];
  best?: boolean;
}

const heroCards: HeroPropCard[] = [
  {
    name: "Sri Petaling Condo",
    meta: "968 sqft · Residential · Subsale",
    icon: "home",
    yield_: 4.6,
    actualCost: "RM 558,400",
    rental: "RM 2,300",
    cashflow: "+RM 285",
    dscr: "1.18×",
    pills: ["Cash-flow +"],
  },
  {
    name: "Mont Kiara Suite",
    meta: "1,800 sqft · Commercial · Subsale",
    icon: "building",
    yield_: 6.4,
    actualCost: "RM 1,178,000",
    rental: "RM 6,500",
    cashflow: "+RM 1,240",
    dscr: "1.38×",
    pills: ["Cash-flow +", "High DSCR"],
    best: true,
  },
];

const HomeMarkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" />
  </svg>
);
const BuildingMarkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="3" width="16" height="18" rx="1.5" />
    <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01" />
    <path d="M10 21v-4h4v4" />
  </svg>
);

const PlusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const useCount = (to: number, duration = 1200, delay = 0) => {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const elapsed = t - start - delay;
      if (elapsed < 0) {
        raf = requestAnimationFrame(step);
        return;
      }
      const p = Math.min(1, elapsed / duration);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
      else setV(to);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, delay]);
  return v;
};

const HeroPropertyCard = ({ card, delay }: { card: HeroPropCard; delay: number }) => {
  const y = useCount(card.yield_, 1300, delay);
  return (
    <article className={"mock-prop-card" + (card.best ? " is-best" : "")}>
      <div className="mock-prop-card-head">
        <span className="mock-prop-icon">{card.icon === "home" ? <HomeMarkIcon /> : <BuildingMarkIcon />}</span>
        <div className="mock-prop-card-title">
          <div className="mock-prop-name">{card.name}</div>
          <div className="mock-prop-meta">{card.meta}</div>
        </div>
      </div>
      <div className="mock-yield">
        <small>Real Rental Yield</small>
        <b className="mock-yield-val">+{y.toFixed(1)}%</b>
      </div>
      <div className="mock-prop-grid">
        <div className="mock-prop-cell"><small>Actual Cost</small><b>{card.actualCost}</b></div>
        <div className="mock-prop-cell"><small>Monthly Rental</small><b>{card.rental}</b></div>
        <div className="mock-prop-cell"><small>Cash Flow</small><b className="is-pos">{card.cashflow}</b></div>
        <div className="mock-prop-cell"><small>DSCR</small><b>{card.dscr}</b></div>
      </div>
      <div className="mock-pills">
        {card.pills.map((p) => <span key={p} className="mock-pill">{p}</span>)}
      </div>
    </article>
  );
};

const HeroMock = () => {
  return (
    <div className="hero-mock">
      <div className="mock-bar">
        <div className="mock-dots"><i /><i /><i /></div>
        <div className="mock-url">workspace.ruma.app / properties</div>
        <div className="mock-user">AJ</div>
      </div>

      <div className="mock-dash">
        <div className="mock-dash-head">
          <div className="mock-dash-title">
            <h6>Properties</h6>
            <span className="mock-count">6 active</span>
          </div>
          <div className="mock-dash-tools">
            <span className="mock-view">Simple <i /></span>
            <span className="mock-add"><PlusIcon /> Add property</span>
          </div>
        </div>

        <div className="mock-prop-row">
          {heroCards.map((card, i) => (
            <HeroPropertyCard key={card.name} card={card} delay={i * 180} />
          ))}
        </div>
      </div>
    </div>
  );
};

const heroPills = ["Scenario Lab", "Auction Lab", "Loan calculator"];

const Hero = () => {
  return (
    <>
      <TopNav />
      <header className="hero r-container" data-layout="split">
        <div className="hero-body">
        <div className="hero-copy">
          <span className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Launching soon · Malaysia
          </span>
          <h1 className="hero-headline">
            Compare, calculate, and <em>close smarter.</em>
          </h1>
          <p className="hero-sub">
            Estimate fees, forecast returns, and choose the property
            that wins on yield & KPIs — without spreadsheets. Built for Malaysian investors, and real estate agents.
          </p>
          <div className="hero-actions">
            <a href="https://app.ruma.casa" className="r-btn r-btn-primary">
              Launch app <span className="r-arrow">↗</span>
            </a>
            <a href="#walkthrough" className="r-btn r-btn-secondary">
              See a preview
            </a>
          </div>
          <div className="hero-pills">
            {heroPills.map((p) => (
              <span key={p} className="hero-pill">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6.2 5 8.7l4.5-5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-mock-wrap">
          <HeroMock />
          <div className="hero-float">
            <small>Top Real Yield</small>
            <span className="v">+6.4%</span>
            <span className="vs">Mont Kiara Suite</span>
          </div>
        </div>
      </div>
      </header>
    </>
  );
};

export default Hero;
