// Helpers for the market map teaser: projecting GeoJSON lon/lat to SVG space,
// building path strings, and a $/sqft colour scale. Ported from the main app
// (ruma-fs lib/marketGeo.ts) and trimmed to the state-level pieces the landing
// page needs — pure functions, zero dependencies.

export type Coord = [number, number];
export type Geometry =
  | { type: "Polygon"; coordinates: Coord[][] }
  | { type: "MultiPolygon"; coordinates: Coord[][][] };
export interface GeoFeature {
  type: "Feature";
  properties: { state: string };
  geometry: Geometry;
}
export interface GeoCollection {
  type: "FeatureCollection";
  features: GeoFeature[];
}

// ── Name matching ───────────────────────────────────────────────────────────
// Reduce both the data's and the GeoJSON's state labels to a canonical key so
// spelling variants ("W.P. Kuala Lumpur" vs "WP Kuala Lumpur") still join.

export function areaKey(name: string): string {
  let k = name.toLowerCase().trim();
  k = k.replace(/\bw\.?\s*p\.?\b/g, " "); // "W.P." / "WP" federal-territory prefix
  k = k.replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
  return k;
}

/** Index area data by canonical key so a GeoJSON feature can find its datum. */
export function indexByKey<T extends { name: string }>(rows: T[]): Map<string, T> {
  const m = new Map<string, T>();
  for (const r of rows) m.set(areaKey(r.name), r);
  return m;
}

// ── Projection ──────────────────────────────────────────────────────────────
// Equirectangular fit with cos(lat) longitude correction — accurate enough for
// Malaysia's latitude band and avoids pulling in a projection dependency.

export type Projector = (c: Coord) => [number, number];

function eachCoord(features: GeoFeature[], fn: (c: Coord) => void) {
  for (const f of features) {
    const polys =
      f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
    for (const poly of polys) for (const ring of poly) for (const c of ring) fn(c);
  }
}

interface Bounds {
  minLon: number;
  maxLon: number;
  minLat: number;
  maxLat: number;
  k: number; // cos(mid-latitude) longitude correction
}

function boundsOf(features: GeoFeature[]): Bounds {
  let minLon = Infinity,
    maxLon = -Infinity,
    minLat = Infinity,
    maxLat = -Infinity;
  eachCoord(features, ([lon, lat]) => {
    if (lon < minLon) minLon = lon;
    if (lon > maxLon) maxLon = lon;
    if (lat < minLat) minLat = lat;
    if (lat > maxLat) maxLat = lat;
  });
  const k = Math.cos((((minLat + maxLat) / 2) * Math.PI) / 180);
  return { minLon, maxLon, minLat, maxLat, k };
}

export function fitProjection(
  features: GeoFeature[],
  width: number,
  height: number,
  pad = 8
): Projector {
  const { minLon, maxLon, minLat, maxLat, k } = boundsOf(features);
  const pxMin = minLon * k;
  const spanX = maxLon * k - pxMin || 1;
  const spanY = maxLat - minLat || 1;
  const w = width - 2 * pad;
  const h = height - 2 * pad;
  const scale = Math.min(w / spanX, h / spanY);
  const ox = pad + (w - spanX * scale) / 2;
  const oy = pad + (h - spanY * scale) / 2;
  return ([lon, lat]) => [
    ox + (lon * k - pxMin) * scale,
    oy + (maxLat - lat) * scale, // flip: SVG y grows downward
  ];
}

/** Fit features to a fixed pixel width, deriving height from their aspect ratio. */
export function mapDimensions(
  features: GeoFeature[],
  width: number,
  pad = 8,
  // Allow portrait maps to be taller than wide so the viewBox hugs the map
  // (no internal letterboxing) while still bounding extreme aspect ratios.
  maxHeight = width * 1.6
): { width: number; height: number; project: Projector } {
  const { minLon, maxLon, minLat, maxLat, k } = boundsOf(features);
  const spanX = (maxLon - minLon) * k || 1;
  const spanY = maxLat - minLat || 1;
  const height = Math.min(maxHeight, Math.round(((width - 2 * pad) * spanY) / spanX) + 2 * pad);
  return { width, height, project: fitProjection(features, width, height, pad) };
}

/** Cos-corrected width:height ratio of a feature group's bounding box. */
export function mapAspect(features: GeoFeature[]): number {
  const { minLon, maxLon, minLat, maxLat, k } = boundsOf(features);
  const spanX = (maxLon - minLon) * k || 1;
  const spanY = maxLat - minLat || 1;
  return spanX / spanY;
}

/** Rough longitude of a feature, for splitting Peninsular from East Malaysia. */
export function featureLon(f: GeoFeature): number {
  let sum = 0,
    n = 0;
  const polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const poly of polys)
    for (const c of poly[0]) {
      sum += c[0];
      n++;
    }
  return n ? sum / n : 0;
}

export function geoPath(geometry: Geometry, project: Projector): string {
  const polys = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  let d = "";
  for (const poly of polys) {
    for (const ring of poly) {
      for (let i = 0; i < ring.length; i++) {
        const [x, y] = project(ring[i]);
        d += `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
      }
      d += "Z";
    }
  }
  return d;
}

// ── Colour scale ────────────────────────────────────────────────────────────
// Warm sequential ramp (cream → gold → burnt) matching the brand palette.
// Quantile buckets so a few very-high-$/sqft areas don't wash out the rest.

export const PSF_RAMP = ["#FBEFD6", "#F3D28B", "#E6A21C", "#CC7A14", "#9A4E0A"] as const;

export interface Bucket {
  min: number;
  max: number;
  color: string;
}

export interface ColorScale {
  color: (v: number | undefined) => string;
  buckets: Bucket[];
}

const NO_DATA = "#ece5d4";

export function makeColorScale(values: number[]): ColorScale {
  const sorted = values.filter((v) => Number.isFinite(v) && v > 0).sort((a, b) => a - b);
  if (sorted.length === 0) {
    return { color: () => NO_DATA, buckets: [] };
  }
  const n = PSF_RAMP.length;
  const quantile = (q: number) => {
    const pos = (sorted.length - 1) * q;
    const lo = Math.floor(pos);
    const hi = Math.ceil(pos);
    return sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo);
  };
  // n+1 edges → n buckets, each ~equal share of areas.
  const edges = Array.from({ length: n + 1 }, (_, i) => quantile(i / n));
  const buckets: Bucket[] = [];
  for (let i = 0; i < n; i++) {
    buckets.push({ min: edges[i], max: edges[i + 1], color: PSF_RAMP[i] });
  }
  const color = (v: number | undefined): string => {
    if (v === undefined || !Number.isFinite(v) || v <= 0) return NO_DATA;
    for (let i = 0; i < buckets.length; i++) {
      if (v <= buckets[i].max || i === buckets.length - 1) return buckets[i].color;
    }
    return buckets[buckets.length - 1].color;
  };
  return { color, buckets };
}
