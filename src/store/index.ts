import { create } from 'zustand';

interface GlobalState {
  keyword: string;
  setKeyword: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
}

export const useGlobalStore = create<GlobalState>((set) => ({
  keyword: '',
  setKeyword: (value: string) => set({ keyword: value, page: 1 }),
  page: 1,
  setPage: (value: number) => set({ page: value }),
}));
