// import { create } from 'zustand';

// interface CurrentTokenStore {
//   img: string;
//   token_name_short: string;
//   token_name_full: string;
//   setImg: (img: string) => void;
//   setTokenShortName: (shortName: string) => void;
//   setTokenFullName: (fullName: string) => void;
// }

// const useCurrentToken = create<CurrentTokenStore>((set) => ({
//   img: '',
//   token_name_short: '',
//   token_name_full: '',
//   setImg: (img) => set({ img }),
//   setTokenShortName: (shortName) => set({ token_name_short: shortName }),
//   setTokenFullName: (fullName) => set({ token_name_full: fullName }),
// }));

// export default useCurrentToken;



import {create} from 'zustand';

// Define the type for the input state
interface InputState {
  value: string;
  img: string;
  token_name_short: string;
  token_name_full: string;
}

// Define the store
interface InputValuesStore {
  input1Value: InputState;
  input2Value: InputState;
  setInput1Value: (newInput1Value: Partial<InputState>) => void;
  setInput2Value: (newInput2Value: Partial<InputState>) => void;
}

const useInputValuesStore = create<InputValuesStore>((set) => ({
  input1Value: {
    value: '',
    img: 'https://app.gmx.io/static/media/ic_usdt_24.5ab8778d1f32d159a151.svg',
    token_name_short: 'USDC',
    token_name_full: 'USD Coin',
  },
  input2Value: {
    value: '',
    img: 'https://app.gmx.io/static/media/ic_arb_24.93fe233c9499c66fc2c5.svg',
    token_name_short: 'ARB',
    token_name_full: 'Arbitrum',
  },
  setInput1Value: (newInput1Value) =>
    set((state) => ({ input1Value: { ...state.input1Value, ...newInput1Value } })),
  setInput2Value: (newInput2Value) =>
    set((state) => ({ input2Value: { ...state.input2Value, ...newInput2Value } })),
}));

export default useInputValuesStore;
