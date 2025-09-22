import React, { useMemo } from "react";
import { useCoins } from "../hooks/useCoins";

export default function CoinTable({ onShowDetails }) {
  const { data, fetchNextPage, isFetchingNextPage } = useCoins({ perPage: 20 });
  const allCoins = useMemo(() => (data ? data.pages.flat() : []), [data]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h %</th>
          </tr>
        </thead>
        <tbody>
          {allCoins.map((coin) => (
            <tr key={coin.id} onClick={() => onShowDetails(coin)}>
              <td>{coin.market_cap_rank}</td>
              <td>{coin.name}</td>
              <td>${coin.current_price}</td>
              <td>{coin.price_change_percentage_24h?.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
        {isFetchingNextPage ? "Loading..." : "Load more"}
      </button>
    </div>
  );
}