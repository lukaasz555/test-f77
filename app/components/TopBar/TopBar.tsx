'use client';
import { Container, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export const TopBar = () => {
	return (
		<AppBar
			position='static'
			className='rounded-none  xl:rounded-bl-xl xl:rounded-br-xl'>
			<Container style={{ paddingInline: '0' }} maxWidth='xl'>
				<Toolbar disableGutters className='flex justify-between'>
					<Box className='flex'>
						<Typography variant='h1'>77Store</Typography>
						<Box>nav?</Box>
					</Box>

					<Box>Account/Login</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
