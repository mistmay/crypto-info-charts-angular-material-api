export interface GraphData {
    prices: ((number)[])[];
    market_caps: ((number)[] | null)[] | null;
    total_volumes: ((number)[] | null)[] | null;
}
