'use client';
import { Container, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export const TopBar = () => {
	return (
		<AppBar position='static'>
			<Container
				maxWidth='xl'
				className='targetThisContainer'
				style={{ paddingInline: '0' }}>
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
