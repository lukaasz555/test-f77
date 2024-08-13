import { useRouter } from 'next/navigation';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MdKeyboardArrowRight } from 'react-icons/md';

type Props = {
	id: number;
	name: string;
	imgSrc?: string;
};

function CategoryCard({ id, name, imgSrc }: Props) {
	const router = useRouter();

	const img = imgSrc
		? imgSrc
		: 'https://images.unsplash.com/photo-1624378440070-950d99e25830?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbiUyMHdlYXJ8ZW58MHx8MHx8fDA%3D';

	const handleClick = () => router.push(`/category/${id}`);

	return (
		<Card sx={{ maxWidth: 400, height: 400, width: '100%' }}>
			<CardActionArea onClick={handleClick}>
				<CardMedia
					component='img'
					alt={name}
					image={img}
					sx={{ height: 340 }}
				/>
				<CardContent>
					<Typography
						gutterBottom
						variant='h5'
						component='div'
						className='flex justify-start items-center group w-auto
						text-center uppercase font-medium tracking-wider transition-all duration-300
						'>
						<p className='group py-1 text-lg'>{name}</p>
						<MdKeyboardArrowRight
							className='
							opacity-0 -translate-x-2
							group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-150
							'
							style={{ fontSize: 20 }}
						/>
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default CategoryCard;
