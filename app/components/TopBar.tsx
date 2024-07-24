'use client';
import { Container, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Menu } from './Menu';
import { CartButton } from './CartButton';
import { UserButton } from './UserButton';
import { MobileMenu } from './MobileMenu';

export const TopBar = () => {
	return (
		<AppBar
			position='static'
			className='bg-primary'
			style={{ height: '100px' }}>
			<Container
				maxWidth='xl'
				className='flex items-center justify-between h-full px-4'>
				<Toolbar disableGutters className='flex justify-between w-full'>
					<aside style={{ width: '300px' }}>
						<Menu />
						<MobileMenu />
					</aside>

					<div className='center '>
						<h1 className='text-background'>
							<a href='/'>77store</a>
						</h1>
					</div>

					<aside
						className='flex items-center justify-end gap-5'
						style={{ width: '300px' }}>
						<UserButton />
						<CartButton />
					</aside>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
