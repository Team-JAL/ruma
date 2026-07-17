import { useEffect, useMemo, useState } from "react";
import { useReveal } from "../hooks";
import {
  areaKey,
  featureLon,
  makeColorScale,
  mapAspect,
  type GeoCollection,
  type GeoFeature,
} from "../lib/marketGeo";
import Choropleth from "./market/Choropleth";
import Legend from "./market/Legend";
import type { AreaDatum } from "./market/types";
import { fmtPsf, fmtPrice } from "./market/types";
import statePsf from "../data/state-psf.json";
import "./marketmap.css";

const SIGNUP_URL = "https://app.ruma.casa";

const stateData: AreaDatum[] = statePsf.states;

const asOfLabel = (() => {
  const [y, m] = statePsf.asOf.split("-").map(Number);
  return new Date(y, m - 1).toLocaleString("en-MY", { month: "long", year: "numeric" });
})();

// Blurred placeholder rows suggesting the locked district-level breakdown.
// Widths only — no real district names or figures ship with the page.
const LOCKED_ROWS = [72, 58, 66, 45, 61, 52];

const LockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const MarketMap = () => {
  const ref = useReveal<HTMLElement>();
  const [geo, setGeo] = useState<GeoCollection | null>(null);
  const [selected, setSelected] = useState<AreaDatum>(stateData[0]);

  useEffect(() => {
    let active = true;
    fetch("/geo/states.json")
      .then((r) => (r.ok ? (r.json() as Promise<GeoCollection>) : null))
      .then((g) => active && setGeo(g))
      .catch(() => active && setGeo(null));
    return () => {
      active = false;
    };
  }, []);

  const scale = useMemo(() => makeColorScale(stateData.map((d) => d.psfNow)), []);

  // Split the national map into Peninsular (west) and East Malaysia panels so
  // the empty South China Sea between them isn't rendered as dead space.
  const panels = useMemo(() => {
    if (!geo) return null;
    const west: GeoFeature[] = [];
    const east: GeoFeature[] = [];
    for (const f of geo.features) (featureLon(f) < 106 ? west : east).push(f);
    return [
      { features: west, grow: mapAspect(west) },
      { features: east, grow: mapAspect(east) },
    ];
  }, [geo]);

  return (
    <section className="market r-container r-reveal" id="market" ref={ref}>
      <div className="market-head">
        <div>
          <span className="r-eyebrow">Price Atlas · Preview</span>
          <h2 className="market-title" style={{ marginTop: "1rem" }}>
            Know what every state trades at.
            <em>Before you view a single unit.</em>
          </h2>
        </div>
        <p className="market-lede">
          Median transacted RM/sqft for apartments across Malaysia, from NAPIC open
          sales data. The full Price Atlas drills down to district and mukim level.
        </p>
      </div>

      <div className="market-grid">
        <div className="market-map-card">
          <div className="market-map-toolbar">
            <span className="market-map-category">Residential Apartment</span>
            <Legend scale={scale} />
          </div>
          {panels ? (
            <div className="market-map-panels">
              {panels.map((panel, i) => (
                <div key={i} className="market-map-panel" style={{ flexGrow: panel.grow }}>
                  <Choropleth
                    features={panel.features}
                    data={stateData}
                    scale={scale}
                    selectedKey={areaKey(selected.name)}
                    onSelect={setSelected}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="market-map-skeleton" aria-hidden="true" />
          )}
          <p className="market-map-caption">
            Data as of {asOfLabel} · NAPIC open sales data
          </p>
        </div>

        <aside className="market-detail">
          <div className="market-detail-head">
            <span className="market-detail-kicker">Selected state</span>
            <h4>{selected.name}</h4>
          </div>
          <div className="market-detail-psf">
            <b>{fmtPsf(selected.psfNow)}</b>
            <span>/sqft median</span>
          </div>
          <div className="market-detail-stats">
            {selected.txnCount != null && (
              <div className="market-detail-stat">
                <small>Recorded sales</small>
                <b>{selected.txnCount.toLocaleString("en-MY")}</b>
              </div>
            )}
            {selected.priceMedian != null && (
              <div className="market-detail-stat">
                <small>Median price</small>
                <b>{fmtPrice(selected.priceMedian)}</b>
              </div>
            )}
          </div>

          <div className="market-locked">
            <div className="market-locked-rows" aria-hidden="true">
              {LOCKED_ROWS.map((w, i) => (
                <div key={i} className="market-locked-row">
                  <span className="market-locked-bar" style={{ width: `${w}%` }} />
                  <span className="market-locked-bar is-num" />
                </div>
              ))}
            </div>
            <div className="market-locked-overlay">
              <span className="market-locked-hint">
                <LockIcon /> District &amp; mukim prices, trends and price ranges
              </span>
              <a href={SIGNUP_URL} className="r-btn r-btn-primary market-locked-cta">
                Create a free account to see more <span className="r-arrow">↗</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      <div className="market-cta">
        <p>
          This is a preview. Unlock district-level prices, historical trends and deal
          scores with a free account.
        </p>
        <a href={SIGNUP_URL} className="r-btn r-btn-secondary">
          Create a free account <span className="r-arrow">↗</span>
        </a>
      </div>
    </section>
  );
};

export default MarketMap;
