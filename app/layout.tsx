import type { Metadata } from 'next';
import { Nunito, Poppins } from 'next/font/google';
import { TopBar } from './components/TopBar';
import { Container } from '@mui/material';
import { Footer } from './components/Footer';
import { ThemeProviderWrapper } from './theme/ThemeProviderWrapper';
import { SidebarProvider, useSidebar } from '@/contexts/SidebarContext';
import { Sidebar } from './components/Sidebar';
import './globals.css';

const poppins = Poppins({
	weight: ['400', '500', '600', '700', '800'],
	subsets: ['latin'],
});

const nunito = Nunito({
	weight: ['400', '600', '700'],
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
			<head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='description' content={metadata.description!} />
				<meta name='theme-color' content='#57886C' />
				<meta name='keywords' content='77store, 77-store.net'></meta>
			</head>
			<body className='relative bg-background'>
				<ThemeProviderWrapper>
					<SidebarProvider>
						<Container
							className='flex flex-col gap-5 px-0 mx-auto overflow-hidden'
							maxWidth='xl'
							disableGutters>
							<TopBar />
							<Sidebar />
							<Container
								component='main'
								disableGutters
								className='w-full'
								maxWidth='xl'>
								{children}
							</Container>
							<Footer />
						</Container>
					</SidebarProvider>
				</ThemeProviderWrapper>
			</body>
		</html>
	);
}
