import React, { useEffect, useState } from "react";
import { fetchMarkets, fetchTrending } from "../services/coingecko";

export default function Highlights({ onShowDetails }) {
  const [gainers, setGainers] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    (async () => {
      const coins = await fetchMarkets({ page: 1, per_page: 50 });
      const sorted = [...coins].sort(
        (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
      );
      setGainers(sorted.slice(0, 5));

      const trend = await fetchTrending();
      setTrending(trend);
    })();
  }, []);

  return (
    <div>
      <h5>Top Gainers (24h)</h5>
      <ul>
        {gainers.map((c) => (
          <li key={c.id} onClick={() => onShowDetails(c)}>
            {c.name} ({c.symbol.toUpperCase()}) – {c.price_change_percentage_24h.toFixed(2)}%
          </li>
        ))}
      </ul>
      <h5>Trending</h5>
      <ul>
        {trending.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}