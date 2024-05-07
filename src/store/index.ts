import { create } from 'zustand';

interface GlobalState {
  keyword: string;
  setKeyword: (value: string) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  keyword: '',
  setKeyword: (value: string) => set({ keyword: value }),
}));
