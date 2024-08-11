export interface Category {
	id: number;
	name: string;
	parentCategoryId: number | null;
	subcategoriesIds: number[];
}

export const mockCategories: Category[] = [
	// # MAN & subcategories
	{
		id: 1,
		name: 'man',
		parentCategoryId: null,
		subcategoriesIds: [12, 14],
	},
	{
		id: 12,
		name: 'hoodies',
		parentCategoryId: 1,
		subcategoriesIds: [],
	},
	{
		id: 14,
		name: 'shirts',
		parentCategoryId: 1,
		subcategoriesIds: [15, 17],
	},
	{
		id: 15,
		name: 'short sleeve',
		parentCategoryId: 14,
		subcategoriesIds: [],
	},
	{
		id: 17,
		name: 'business',
		parentCategoryId: 14,
		subcategoriesIds: [],
	},

	// # WOMAN & subcategories
	{
		id: 2,
		name: 'woman',
		parentCategoryId: null,
		subcategoriesIds: [22],
	},
	{
		id: 22,
		name: 'dresses',
		parentCategoryId: 2,
		subcategoriesIds: [27, 28],
	},
	{
		id: 27,
		name: 'prints',
		parentCategoryId: 22,
		subcategoriesIds: [],
	},
	{
		id: 28,
		name: 'mini',
		parentCategoryId: 22,
		subcategoriesIds: [],
	},
	// # KIDS & subcategories
	{
		id: 3,
		name: 'kids',
		parentCategoryId: null,
		subcategoriesIds: [],
	},
];
