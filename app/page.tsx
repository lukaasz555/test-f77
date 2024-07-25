'use client';
import { useEffect } from 'react';
import { Slider } from './components/Slider';
import { useCategoriesStore } from '@/lib/categories.store';

export default function Page() {
	const categoriesStore = useCategoriesStore();

	useEffect(() => {
		const loadInitData = async () => {
			await categoriesStore.loadCategories();
		};
		loadInitData();
	}, []);

	return (
		<div className='flex flex-col gap-10'>
			<Slider />
			<div
				className='flex justify-center items-center'
				style={{ height: '600px', backgroundColor: '#F1F1F1' }}>
				HOT DEALS PLACEHOLDER
			</div>
		</div>
	);
}
