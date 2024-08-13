'use client';
import { useCategoriesStore } from '@/lib/categories.store';
import React from 'react';
import CategoryCard from './CategoryCard';
import { Grid } from '@mui/material';

function CategoriesList() {
	const categoriesStore = useCategoriesStore();
	return (
		<Grid container spacing={4} className='flex justify-center'>
			{categoriesStore.rootCategories().map(({ id, name, imgSrc }) => (
				<Grid
					key={id}
					item
					xs={12}
					sm={6}
					md={4}
					className='flex justify-center'>
					<CategoryCard id={id} name={name} imgSrc={imgSrc} />
				</Grid>
			))}
		</Grid>
	);
}

export default CategoriesList;
