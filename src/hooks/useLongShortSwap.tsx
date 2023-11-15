import { create } from 'zustand';

interface LongShortSwapStore {
  currentStatus: string;
  setLong: () => void;
  setShort: () => void;
  setSwap: () => void;
}

const useLongShortSwap = create<LongShortSwapStore>((set) => ({
  currentStatus: "long",
  setLong: () => set({ currentStatus: "long" }),
  setShort: () => set({ currentStatus: "short" }),
  setSwap: () => set({ currentStatus: "swap" })
}));


export default useLongShortSwap;