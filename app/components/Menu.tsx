import { MenuItem } from './MenuItem';
import { mockCategories } from '../data/mockCategories';

export const Menu = () => {
	const rootCategories = mockCategories.filter((c) => !c.parentCategoryId);

	return (
		<div className='flex'>
			{rootCategories.map(({ id, name, subcategoriesIds }) => (
				<MenuItem
					key={id}
					id={id}
					name={name}
					subcategoriesIds={subcategoriesIds}
				/>
			))}
		</div>
	);
};
