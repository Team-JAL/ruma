import { useMemo, useState } from "react";
import {
  areaKey,
  geoPath,
  indexByKey,
  mapDimensions,
  type ColorScale,
  type GeoFeature,
} from "../../lib/marketGeo";
import type { AreaDatum } from "./types";
import { fmtPsf } from "./types";

interface ChoroplethProps {
  features: GeoFeature[];
  data: AreaDatum[];
  scale: ColorScale;
  /** Canonical key of the currently highlighted area, if any. */
  selectedKey?: string | null;
  onSelect: (datum: AreaDatum) => void;
  /** Rendered pixel width the SVG fits into (viewBox space). */
  width?: number;
}

interface HoverState {
  name: string;
  datum: AreaDatum | null;
  x: number;
  y: number;
  rectW: number; // rendered SVG width in px, for clamping the tooltip
}

const Choropleth = ({
  features,
  data,
  scale,
  selectedKey,
  onSelect,
  width = 800,
}: ChoroplethProps) => {
  const dataByKey = useMemo(() => indexByKey(data), [data]);
  const { height, project } = useMemo(
    () => mapDimensions(features, width, 8),
    [features, width]
  );

  const paths = useMemo(
    () =>
      features.map((f) => {
        const name = f.properties.state;
        const key = areaKey(name);
        const datum = dataByKey.get(key) ?? null;
        return {
          name,
          key,
          datum,
          d: geoPath(f.geometry, project),
          fill: scale.color(datum?.psfNow),
        };
      }),
    [features, dataByKey, project, scale]
  );

  const [hover, setHover] = useState<HoverState | null>(null);

  return (
    <div className="choropleth">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Malaysia median price per sqft map"
        onMouseLeave={() => setHover(null)}
      >
        {paths.map((p) => {
          const isSelected = selectedKey != null && p.key === selectedKey;
          return (
            <path
              key={p.name}
              d={p.d}
              fill={p.fill}
              stroke={isSelected ? "var(--ink)" : "var(--surface)"}
              strokeWidth={isSelected ? 1.6 : 0.6}
              className={
                "choropleth-area" + (hover?.name === p.name ? " is-hover" : "")
              }
              onMouseMove={(e) => {
                const rect = (
                  e.currentTarget.ownerSVGElement as SVGSVGElement
                ).getBoundingClientRect();
                setHover({
                  name: p.name,
                  datum: p.datum,
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                  rectW: rect.width,
                });
              }}
              onClick={() => {
                setHover(null); // touch has no mouse-leave to clear it
                if (p.datum) onSelect(p.datum);
              }}
            />
          );
        })}
      </svg>

      {hover && (
        <div
          className="choropleth-tip"
          style={{
            left: Math.min(hover.x + 12, hover.rectW - 4),
            top: hover.y + 12,
            transform: hover.x > hover.rectW * 0.6 ? "translateX(-100%)" : undefined,
          }}
        >
          <p className="choropleth-tip-name">{hover.name}</p>
          {hover.datum ? (
            <>
              <p className="choropleth-tip-psf">
                <b>{fmtPsf(hover.datum.psfNow)}</b>/sqft
              </p>
              {hover.datum.txnCount != null && (
                <p className="choropleth-tip-meta">
                  {hover.datum.txnCount.toLocaleString("en-MY")} sales
                </p>
              )}
              <p className="choropleth-tip-lock">
                District prices, trends & ranges — 🔒 Free account
              </p>
            </>
          ) : (
            <p className="choropleth-tip-meta">No data</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Choropleth;
