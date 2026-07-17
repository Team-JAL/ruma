import type { ColorScale } from "../../lib/marketGeo";
import { fmtPsf } from "./types";

/** Compact bucket legend for the choropleth colour scale. */
const Legend = ({ scale }: { scale: ColorScale }) => {
  if (scale.buckets.length === 0) return null;
  const lo = scale.buckets[0].min;
  const hi = scale.buckets[scale.buckets.length - 1].max;
  return (
    <div className="market-legend">
      <span className="market-legend-label">RM/sqft</span>
      <div className="market-legend-ramp">
        {scale.buckets.map((b, i) => (
          <span
            key={i}
            className="market-legend-swatch"
            style={{ background: b.color }}
            title={`${fmtPsf(b.min)} – ${fmtPsf(b.max)}`}
          />
        ))}
      </div>
      <span className="market-legend-range">
        {fmtPsf(lo)} – {fmtPsf(hi)}
      </span>
    </div>
  );
};

export default Legend;
