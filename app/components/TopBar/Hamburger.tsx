'use client';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSidebar } from '@/contexts/SidebarContext';

export const Hamburger = () => {
	const { toggleSidebar } = useSidebar();

	return (
		<div className='lg:hidden'>
			<button onClick={() => toggleSidebar()}>
				<GiHamburgerMenu size={24} />
			</button>
		</div>
	);
};
