import { create } from 'zustand';
import { Category } from '../app/data/mockCategories';
import { getCategories } from '@/app/data/categories';

type Store = {
	categories: Category[];
	loadCategories: () => Promise<void>;
	rootCategories: () => Category[];
};

export const useCategoriesStore = create<Store>((set, get) => ({
	categories: [],
	loadCategories: async (): Promise<void> => {
		const res = await getCategories();
		return set({ categories: res });
	},
	rootCategories: (): Category[] => {
		const rootCategories = get().categories.filter((c) => !c.parentCategoryId);
		return rootCategories;
	},
}));
