import moment from 'moment';
import { create } from 'zustand';

interface GlobalState {
  keyword: string;
  setKeyword: (value: string) => void;
  page: number;
  setPage: (value: number) => void;
  filter: FilterType;
  setFilter: (value: FilterType) => void;
  resetFilter: () => void;
}

interface FilterType {
  date: string;
  category: string;
  source: string;
}

const initialFilterValues: FilterType = {
  date: moment(new Date()).format('YYYY-MM-DD'),
  category: '',
  source: '',
};

export const useGlobalStore = create<GlobalState>((set) => ({
  keyword: '',
  setKeyword: (value: string) => set({ keyword: value, page: 1 }),
  filter: initialFilterValues,
  setFilter: (value: FilterType) => set({ filter: value }),
  resetFilter: () => set({ filter: initialFilterValues }),
  page: 1,
  setPage: (value: number) => set({ page: value }),
}));
