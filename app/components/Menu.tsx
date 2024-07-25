import { MenuItem } from './MenuItem';
import { Category } from '../data/mockCategories';

type Props = {
	categories: Category[];
};

export const Menu = ({ categories }: Props) => {
	return (
		<div className='hidden lg:flex'>
			{categories.map(({ id, name, subcategoriesIds }) => (
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
