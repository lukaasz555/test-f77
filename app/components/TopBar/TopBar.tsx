'use client';
import AppBar from '@mui/material/AppBar';
import { Container, Toolbar } from '@mui/material';
import { Menu } from './Menu';
import { CartButton } from './shared/CartButton';
import { UserButton } from './UserButton';
import { Hamburger } from './Hamburger';

export const TopBar = () => {
	return (
		<AppBar position='static' color='primary' style={{ height: '100px' }}>
			<Container
				maxWidth='xl'
				className='flex items-center justify-between h-full px-4'>
				<Toolbar disableGutters className='flex justify-between w-full'>
					<aside style={{ width: '30%' }}>
						<Menu />
						<Hamburger />
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
