import { useRouter } from 'next/navigation';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type Props = {
	id: number;
	name: string;
	img?: string;
};

function CategoryCard({ id, name, img }: Props) {
	const router = useRouter();

	const handleClick = () => router.push(`/category/${id}`);

	return (
		<Card sx={{ maxWidth: 400 }}>
			<CardActionArea onClick={handleClick}>
				<CardMedia
					component='img'
					height='200'
					image='https://images.unsplash.com/photo-1624378440070-950d99e25830?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbiUyMHdlYXJ8ZW58MHx8MHx8fDA%3D'
					alt={name}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{name}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default CategoryCard;
