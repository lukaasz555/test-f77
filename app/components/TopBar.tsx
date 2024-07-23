'use client';
import { Container, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Menu } from './Menu';

export const TopBar = () => {
	return (
		<AppBar
			position='static'
			className='bg-primary overflow-hidden'
			style={{ height: '100px' }}>
			<Container
				maxWidth='xl'
				className='flex items-center justify-between h-full px-4'>
				<Toolbar disableGutters className='flex justify-between w-full'>
					<div className='left'>
						<Menu />
					</div>

					<div className='center '>
						<h1 className='text-background'>
							<a href='/'>77store</a>
						</h1>
					</div>

					<div className='right flex items-center gap-5'>
						<div>Account Details</div>
						<div>ShoppingCart</div>
					</div>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
