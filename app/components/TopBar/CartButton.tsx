'use client';
import { useModal } from '@/contexts/ModalContext';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { FaShoppingCart } from 'react-icons/fa';

const UserModal = () => {
	return (
		<Box>
			<Typography variant='subtitle1'>
				Short message, maybe a welcome message or something
			</Typography>
			<Typography variant='body1'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta
				dignissimos corrupti eos, corporis minima quibusdam commodi beatae
				voluptatum, labore mollitia quaerat maxime, quia saepe? Exercitationem
				ipsam itaque reprehenderit at!
			</Typography>
		</Box>
	);
};

export const CartButton = () => {
	const { openModal } = useModal();

	return (
		<button>
			<FaShoppingCart
				size={24}
				onClick={() => {
					openModal(UserModal);
				}}
			/>
		</button>
	);
};
