'use client';

import Drawer from '@mui/material/Drawer';
import { useSidebar } from '@/contexts/SidebarContext';

export const Sidebar = () => {
	const { isOpen, toggleSidebar } = useSidebar();

	return (
		<Drawer anchor='left' open={isOpen} onClose={() => toggleSidebar()}>
			<div style={{ width: '200px' }}>1</div>
			<div style={{ width: '200px' }}>2</div>
			<div style={{ width: '200px' }}>3</div>
			<div style={{ width: '200px' }}>4</div>
		</Drawer>
	);
};
