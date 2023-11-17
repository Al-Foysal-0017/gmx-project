import { create } from 'zustand';

interface MarketLimitTPStore {
  currentOption: string;
  setMarket: () => void;
  setLimit: () => void;
  setTP: () => void;
}

const useMarketLimitTPStore = create<MarketLimitTPStore>((set) => ({
    currentOption: "market",
    setMarket: () => set({ currentOption: "market" }),
    setLimit: () => set({ currentOption: "limit" }),
    setTP: () => set({ currentOption: "tp" })
}));


export default useMarketLimitTPStore;