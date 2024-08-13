export interface Category {
	id: number;
	name: string;
	parentCategoryId: number | null;
	subcategoriesIds: number[];
	imgSrc?: string;
}

export const mockCategories: Category[] = [
	// # MAN & subcategories
	{
		id: 1,
		name: 'man',
		parentCategoryId: null,
		subcategoriesIds: [12, 14],
		imgSrc:
			'https://images.unsplash.com/photo-1549037173-e3b717902c57?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
		imgSrc:
			'https://images.unsplash.com/photo-1591338459467-bd36100b07c2?q=80&w=2704&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
		imgSrc:
			'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
];
