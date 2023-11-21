import { create } from 'zustand';

interface ChartState {
  currentChart: string;
  setCandle: () => void;
  setBar: () => void;
  setLine: () => void;
  setArea: () => void;
}

const useChartState = create<ChartState>((set) => ({
  currentChart: "candlestick",
  setCandle: () => set({ currentChart: "candlestick" }),
  setBar: () => set({ currentChart: "bar" }),
  setLine: () => set({ currentChart: "line" }),
  setArea: () => set({ currentChart: "area" })
}));


export default useChartState;