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

export const initialDateValue = moment().add(-1, 'days').format('YYYY-MM-DD');

const initialFilterValues: FilterType = {
  date: initialDateValue,
  category: '',
  source: '',
};

export const useGlobalStore = create<GlobalState>((set, get) => ({
  keyword: '',
  setKeyword: (value: string) => {
    set({ keyword: value, page: 1, filter: { ...get().filter, category: '' } });
  },
  filter: initialFilterValues,
  setFilter: (value: FilterType) => set({ filter: value }),
  resetFilter: () => set({ filter: initialFilterValues, keyword: '', page: 1 }),
  page: 1,
  setPage: (value: number) => set({ page: value }),
}));
