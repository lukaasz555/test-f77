'use client';
import { Container, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Menu } from './Menu';
import { CartButton } from './CartButton';
import { UserButton } from './UserButton';
import { MobileMenu } from './MobileMenu';

export const TopBar = () => {
	return (
		<AppBar position='static' color='primary' style={{ height: '100px' }}>
			<Container
				maxWidth='xl'
				className='flex items-center justify-between h-full px-4'>
				<Toolbar disableGutters className='flex justify-between w-full'>
					<aside style={{ width: '30%' }}>
						<Menu />
						<MobileMenu />
					</aside>

					<div className='flex justify-center' style={{ width: '40%' }}>
						<h1 className='text-background'>
							<a href='/'>77store</a>
						</h1>
					</div>

					<aside
						className='flex items-center justify-end gap-5'
						style={{ width: '30%' }}>
						<UserButton />
						<CartButton />
					</aside>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
