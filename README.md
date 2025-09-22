# Crypto Dashboard

A small, production-like cryptocurrency dashboard built with React and Vite that fetches live market data from the CoinGecko API. This project demonstrates clean, maintainable code with modular design, responsive UI, and practical use of React hooks and state management.

## Overview
The goal of this assignment was to build a crypto dashboard that shows:

1. **All Coins View**:  
   - Live market data for coins including rank, name, symbol, price, 24h change, market cap, and 24h volume.
   - Search, sorting, and pagination/infinite scroll support.
   - Clickable rows to view a lightweight details modal.

2. **Highlights Section**:  
   - Top gainers (24h) and trending coins.
   - Displayed in easy-to-read, concise tiles/lists.

3. **Resilience & UX States**:  
   - Loading spinners/skeletons.
   - Retry on failure with basic error messaging.
   - Empty state handling for no results.

---

## Features
- Fetch live market data using CoinGecko API
- Infinite scroll for coins table
- Sorting and searching by coin name or symbol
- Highlights section (Top Gainers & Trending Coins)
- Responsive and clean UI
- Error handling and loading states
- Lightweight coin detail modal

---

## Tech Stack
- **React 18** – Frontend framework
- **Vite** – Build tool & dev server
- **Axios** – API requests
- **React Query (@tanstack/react-query)** – Data fetching and caching
- **Lodash.debounce** – Debounced search input
- **CSS** – Minimal styling (optional: Tailwind or other frameworks can be used)

---

## Architecture & Design Patterns
- **Separation of Concerns**: Components, hooks, and services are modular.
- **Hooks**: `useCoins` hook handles fetching and caching coins data.
- **Service Layer**: `services/coingecko.js` abstracts API calls from UI.
- **React Query**: Handles caching, retries, and pagination.
- **Functional Components**: Small, reusable UI components.
- **Memoization**: `useMemo` used for derived coin lists to optimize rendering.

---

## Setup & Run
1. Extract the project folder.
2. Open a terminal in the project folder.
3. Install dependencies:


npm install
Run the development server:


npm run dev
Open http://localhost:5173/ in your browser.

API Configuration
CoinGecko free API is used
