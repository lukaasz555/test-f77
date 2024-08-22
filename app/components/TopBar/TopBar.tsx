'use client';
import AppBar from '@mui/material/AppBar';
import { Container, Toolbar } from '@mui/material';
import { Menu } from './Menu';
import { CartButton } from './CartButton';
import { Hamburger } from './Hamburger';
import { UserButton } from './UserButton';
import { Category } from '@/app/data/mockCategories';
import { useEffect } from 'react';
import { useCategoriesStore } from '@/lib/categories.store';

type Props = {
	categories: Category[];
};

export const TopBar = ({ categories }: Props) => {
	const categoriesStore = useCategoriesStore();
	useEffect(() => {
		categoriesStore.setCategories(categories);
	}, []);

	return (
		<AppBar position='static' color='primary' style={{ height: '100px' }}>
			<Container
				maxWidth='xl'
				className='flex items-center justify-between h-full px-4'>
				<Toolbar disableGutters className='flex justify-between w-full'>
					<aside style={{ width: '30%' }}>
						<Menu categories={categories} />
						<Hamburger />
					</aside>

					<div className='flex justify-center' style={{ width: '40%' }}>
						<h1 className='text-background'>
							<a href='/'>77store TEST2</a>
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
