// import { useCategoriesStore } from '@/lib/categories.store';
import { MenuItem } from '../shared/MenuItem';
import { Category } from '@/app/data/mockCategories';

type Props = {
	categories: Category[];
};

export const Menu = ({ categories }: Props) => {
	// const categoriesStore = useCategoriesStore();

	const rootCategories = categories.filter((cat) => !cat.parentCategoryId);

	return (
		<div className='hidden lg:flex'>
			{rootCategories.map(({ id, name, subcategoriesIds }) => (
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
