import { useCategoriesStore } from '@/lib/categories.store';
import { MenuItem } from '../shared/MenuItem';

export const Menu = () => {
	const categoriesStore = useCategoriesStore();

	return (
		<div className='hidden lg:flex'>
			{categoriesStore
				.rootCategories()
				.map(({ id, name, subcategoriesIds }) => (
					<MenuItem
						key={id}
						id={id}
						name={name}
						isMobile={false}
						subcategoriesIds={subcategoriesIds}
					/>
				))}
		</div>
	);
};