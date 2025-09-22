import React, { useState } from "react";
import CoinTable from "./components/CoinTable";
import Highlights from "./components/Highlights";

export default function App() {
  const [selectedCoin, setSelectedCoin] = useState(null);

  return (
    <div className="container">
      <header className="header">
        <h2>Crypto Dashboard</h2>
        <span className="small">Powered by CoinGecko API</span>
      </header>
      <div className="grid">
        <main className="card">
          <h3>All Coins</h3>
          <CoinTable onShowDetails={(coin) => setSelectedCoin(coin)} />
        </main>
        <aside className="card">
          <h4>Highlights</h4>
          <Highlights onShowDetails={(coin) => setSelectedCoin(coin)} />
        </aside>
      </div>
    </div>
  );
}