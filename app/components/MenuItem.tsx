'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { mockCategories } from '../data/mockCategories';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import clsx from 'clsx';
import DropdownItem from './DropdownItem';

type Props = {
	id: number;
	name: string;
	subcategoriesIds: number[];
	isMobile?: boolean;
};

export const MenuItem = ({
	id,
	name,
	subcategoriesIds,
	isMobile = true,
}: Props) => {
	const [isMouseOver, setIsMouseOver] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	const onCategoryClick = () => {
		if (isMobile) {
			setIsOpen(!isOpen);
		}
		if (!subcategoriesIds.length) {
			router.push(`/categories/${id}`);
		}
	};

	const onSubcategoryClick = (categoryId: number) =>
		router.push(`/categories/${categoryId}`); // ? not sure about route yet

	const subcategories = mockCategories.filter((c) =>
		subcategoriesIds.includes(c.id)
	);

	if (isMobile) {
		return (
			<div
				className='mx-4 px-0 cursor-pointer mb-3'
				style={{ width: '200px' }}
				onClick={onCategoryClick}>
				<div className='flex items-center justify-start translate-x-0 hover:translate-x-1 transition-transform duration-150'>
					<p className='uppercase tracking-wide text-black'>{name}</p>
					{subcategories.length > 0 && (
						<div className='ml-'>
							<MdOutlineKeyboardArrowDown
								className={clsx(
									isOpen ? 'rotate-180' : 'rotate-0',
									'transition-transform duration-300'
								)}
								style={{ fontSize: 20 }}
							/>
						</div>
					)}
				</div>
				<div
					className={clsx(
						'transition-all duration-300 overflow-hidden',
						isOpen && subcategories.length
							? 'translate-x-0 opacity-100 max-h-screen'
							: 'translate-x-2 opacity-0 pointer-events-none max-h-0'
					)}>
					{subcategories.map((c) => (
						<div
							key={c.id}
							className='px-3 py-1 transition-bg transition-colors duration-300 cursor-pointer'
							onClick={() => onSubcategoryClick(c.id)}>
							<p className='text-sm font-normal uppercase tracking-wide font-heading hover:text-primary'>
								{c.name}
							</p>
						</div>
					))}
				</div>
			</div>
		);
	}

	return (
		<div
			className='mx-2 px-2 cursor-pointer flex items-center relative'
			onClick={onCategoryClick}
			onMouseEnter={() => setIsMouseOver(true)}
			onMouseLeave={() => setIsMouseOver(false)}>
			<p className='uppercase tracking-wide text-background'>{name}</p>
			{subcategories.length > 0 && (
				<div className='ml-1'>
					<MdOutlineKeyboardArrowDown
						className={clsx(
							isMouseOver ? 'rotate-180' : 'rotate-0',
							'transition-transform duration-300'
						)}
						style={{ fontSize: 20 }}
					/>
				</div>
			)}
			<div
				className={clsx(
					'absolute left-0 top-[100%] bg-background border-1 border-border py-2 rounded-sm transition-all duration-150 z-30',
					isMouseOver && subcategories.length
						? 'opacity-100 translate-y-0'
						: 'opacity-0 translate-y-2 pointer-events-none'
				)}>
				{subcategories.map(({ id, name }) => (
					<DropdownItem
						key={id}
						text={name}
						onClick={() => onSubcategoryClick(id)}
					/>
				))}
			</div>
		</div>
	);
};
