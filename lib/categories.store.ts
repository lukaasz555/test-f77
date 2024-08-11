import { create } from 'zustand';
import { Category } from '../app/data/mockCategories';

type Store = {
	categories: Category[];
	setCategories: (arr: Category[]) => void;
};

export const useCategoriesStore = create<Store>((set, get) => ({
	categories: [],
	setCategories: (categories: Category[]) => set({ categories }),
}));
