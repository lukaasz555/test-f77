import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { TopBar } from './components/TopBar/TopBar';
import { Container } from '@mui/material';

const poppins = Poppins({
	weight: ['400', '500', '600', '700', '800'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: '77store',
	description: '77store',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<TopBar />
				<Container
					maxWidth='xl'
					component='main'
					style={{ border: '1px solid yellow' }}>
					{children}
				</Container>
			</body>
		</html>
	);
}
