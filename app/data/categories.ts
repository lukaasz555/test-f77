import { Category, mockCategories } from './mockCategories';

export const getCategories = (): Promise<Category[]> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(mockCategories);
		}, 777);
	});
};
