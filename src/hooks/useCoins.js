import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMarkets } from "../services/coingecko";

export function useCoins({ perPage = 20 }) {
  return useInfiniteQuery(
    ["coins", { perPage }],
    ({ pageParam = 1 }) => fetchMarkets({ page: pageParam, per_page: perPage }),
    {
      getNextPageParam: (lastPage, pages) =>
        lastPage.length < perPage ? undefined : pages.length + 1,
    }
  );
}