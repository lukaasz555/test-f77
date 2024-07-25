import { create } from 'zustand';

type Store = {
	itemsIds: number[];
	addToCart: (itemId: number) => void;
	removeFromCart: (itemId: number) => void;
};

export const useCartStore = create<Store>((set, get) => ({
	itemsIds: [],
	addToCart: (itemId: number) => {
		set((state) => ({
			itemsIds: [...state.itemsIds, itemId],
		}));
	},
	removeFromCart: (itemId: number) => {
		set((state) => ({
			itemsIds: state.itemsIds.filter((id) => id !== itemId),
		}));
	},
}));
