import { create } from 'zustand';

interface TokenModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useTokenModel = create<TokenModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default useTokenModel;
