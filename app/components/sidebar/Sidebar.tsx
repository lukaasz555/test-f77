'use client';
import Drawer from '@mui/material/Drawer';
import { useSidebar } from '@/contexts/SidebarContext';
import { useCategoriesStore } from '@/lib/categories.store';
import { MenuItem } from '../shared/MenuItem';
import { IoClose } from 'react-icons/io5';

export const Sidebar = () => {
	const categoriesStore = useCategoriesStore();
	const { isOpen, toggleSidebar } = useSidebar();

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
				{categoriesStore
					.rootCategories()
					.map(({ id, name, subcategoriesIds }) => (
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
