import { create } from 'zustand';

interface VersionStore {
  version: string;
  setV1: () => void;
  setV2: () => void;
}

const useVersion = create<VersionStore>((set) => ({
  version: "v1",
  setV1: () => set({ version: "v1" }),
  setV2: () => set({ version: "v2" })
}));


export default useVersion;
