import { create } from 'zustand';

// TODO: update model
type Product = {
	id: number;
	name: string;
	price: number;
};

type Store = {
	products: Product[];
};

export const useProductsStore = create<Store>((set, get) => ({
	products: [],
}));
