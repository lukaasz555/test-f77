'use client';
import Drawer from '@mui/material/Drawer';
import { useSidebar } from '@/contexts/SidebarContext';
import { MenuItem } from '../shared/MenuItem';
import { IoClose } from 'react-icons/io5';
import { Category } from '@/app/data/mockCategories';

type Props = {
	categories: Category[];
};

export const Sidebar = ({ categories }: Props) => {
	const { isOpen, toggleSidebar } = useSidebar();
	const rootCategories = categories.filter((cat) => !cat.parentCategoryId);

	return (
		<Drawer anchor='left' open={isOpen} onClose={() => toggleSidebar()}>
			<div className='flex justify-end mt-2'>
				<button className='p-1' onClick={toggleSidebar}>
					<IoClose
						size={28}
						className='rotate-0 hover:rotate-180 transition-transform duration-200'
					/>
				</button>
			</div>
			<nav className='h-full my-5 px-2'>
				{rootCategories.map(({ id, name, subcategoriesIds }) => (
					<MenuItem
						key={id}
						id={id}
						name={name}
						isMobile={true}
						subcategoriesIds={subcategoriesIds}
					/>
				))}
			</nav>
		</Drawer>
	);
};
