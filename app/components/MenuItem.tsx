'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { mockCategories } from '../data/mockCategories';
import { SlArrowDown } from 'react-icons/sl';
import clsx from 'clsx';

type Props = {
	id: number;
	name: string;
	subcategoriesIds: number[];
};

export const MenuItem = ({ id, name, subcategoriesIds }: Props) => {
	const [isMouseOver, setIsMouseOver] = useState(false);
	const router = useRouter();

	const handleClick = () => router.push(`/categories/${id}`); // ? not sure about route yet

	const subcategories = mockCategories.filter((c) =>
		subcategoriesIds.includes(c.id)
	);

	return (
		<div
			className='mx-2 px-2 cursor-pointer flex items-center relative'
			onClick={handleClick}
			onMouseEnter={() => setIsMouseOver(true)}
			onMouseLeave={() => setIsMouseOver(false)}>
			<p className='uppercase tracking-wide text-background'>{name}</p>
			{subcategories.length ? (
				<div className='ml-1'>
					<SlArrowDown
						className={clsx(
							isMouseOver ? 'rotate-180' : 'rotate-0',
							'transition-transform duration-300'
						)}
						style={{ fontSize: '12px' }}
					/>
				</div>
			) : null}
			<div
				className={clsx(
					'absolute left-0 top-[100%] bg-background border-1 border-border py-2 rounded-sm transition-all duration-150',
					isMouseOver && subcategories.length
						? 'opacity-100 translate-y-0'
						: 'opacity-0 translate-y-2 pointer-events-none'
				)}>
				{subcategories.map((c) => (
					<div
						key={c.id}
						className='hover:bg-lightGray px-3 py-1 transition-bg transition-colors duration-300'>
						<p className='text-sm uppercase tracking-wide font-heading'>
							{c.name}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};
