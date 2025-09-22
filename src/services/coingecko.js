import axios from "axios";

const BASE = import.meta.env.VITE_COINGECKO_API || "https://api.coingecko.com/api/v3";
const KEY = import.meta.env.VITE_COINGECKO_KEY || "";

const client = axios.create({
  baseURL: BASE,
  headers: KEY ? { "x-cg-pro-api-key": KEY } : undefined,
});

export async function fetchMarkets({ page = 1, per_page = 50 }) {
  const res = await client.get("/coins/markets", {
    params: {
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page,
      page,
      price_change_percentage: "24h",
      sparkline: false,
    },
  });
  return res.data;
}

export async function fetchTrending() {
  const res = await client.get("/search/trending");
  return res.data.coins.map((c) => c.item);
}