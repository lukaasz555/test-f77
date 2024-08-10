import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useUserStore } from '@/lib/user.store';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import DropdownItem from './DropdownItem';

export const UserButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	const userStore = useUserStore();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.currentTarget && setAnchorEl(event.currentTarget);
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	if (!userStore.isLoggedIn) return;

	return (
		<div>
			<Button
				id='demo-positioned-button'
				aria-controls={open ? 'demo-positioned-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}>
				<FaUser size={24} color='white' onClick={() => setIsOpen(!isOpen)} />
			</Button>
			<Menu
				id='demo-positioned-menu'
				aria-labelledby='demo-positioned-button'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					disablePadding: true,
				}}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}>
				<div
					className={clsx(
						' bg-background border-1 border-border py-2 rounded-sm'
					)}>
					{/* Map over menu items or sth */}
					<DropdownItem text='Account' onClick={() => console.log('Account')} />
					<DropdownItem text='Orders' onClick={() => console.log('Orders')} />
					<DropdownItem
						text='Settings'
						onClick={() => console.log('Settings')}
					/>
					<DropdownItem text='Logout' onClick={() => console.log('Logout')} />
				</div>
			</Menu>
		</div>
	);
};
