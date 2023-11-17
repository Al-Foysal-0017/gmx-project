import { create } from 'zustand';

interface TokenModalStore {
  isOpen: boolean;
  updateInput: string; // "input1" or "input2"
  onOpen: (updateInputType: string) => void;
  onClose: () => void;
}

const useTokenModel = create<TokenModalStore>((set) => ({
  isOpen: false,
  updateInput: "", // Default to empty, can be "input1" or "input2"
  
  // user pass updateInputType="input1" or "input2"
  onOpen: (updateInputType) => set({ isOpen: true, updateInput: updateInputType }),
  onClose: () => set({ isOpen: false, updateInput: "" }), // Reset updateInput on close
}));

export default useTokenModel;
