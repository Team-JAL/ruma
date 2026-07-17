// Teaser slice of the main app's market data — one headline $/sqft row per
// state. Deliberately excludes district/mukim breakdowns, history, tenure
// splits and price ranges: anything shipped here is public in the bundle.
export interface AreaDatum {
  name: string;
  psfNow: number;
  txnCount?: number;
  priceMedian?: number;
}

export const fmtPsf = (v: number): string => `RM ${Math.round(v).toLocaleString("en-MY")}`;

export const fmtPrice = (v: number): string =>
  v >= 1_000_000
    ? `RM ${(v / 1_000_000).toLocaleString("en-MY", { maximumFractionDigits: 2 })}m`
    : `RM ${Math.round(v / 1000).toLocaleString("en-MY")}k`;
