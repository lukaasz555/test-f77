'use client';

import Drawer from '@mui/material/Drawer';
import { useSidebar } from '@/contexts/SidebarContext';
import { useCategoriesStore } from '@/lib/categories.store';
import { MenuItem } from './MenuItem';

export const Sidebar = () => {
	const categoriesStore = useCategoriesStore();
	const { isOpen, toggleSidebar } = useSidebar();

	return (
		<Drawer anchor='left' open={true} onClose={() => toggleSidebar()}>
			<nav className='h-full my-10 px-2'>
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
