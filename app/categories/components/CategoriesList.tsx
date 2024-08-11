'use client';
import { useCategoriesStore } from '@/lib/categories.store';
import React from 'react';
import CategoryCard from './CategoryCard';
import { Grid } from '@mui/material';

function CategoriesList() {
	const categoriesStore = useCategoriesStore();
	return (
		<Grid container spacing={4} className='flex justify-center'>
			{categoriesStore.rootCategories().map(({ id, name }) => (
				<Grid key={id} item xs={12} sm={6} md={3}>
					<CategoryCard id={id} name={name} />
				</Grid>
			))}
		</Grid>
	);
}

export default CategoriesList;
