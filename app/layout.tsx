import type { Metadata } from 'next';
import { Nunito, Poppins } from 'next/font/google';
import { Container } from '@mui/material';
import { Footer } from './components/footer/Footer';
import { ThemeProviderWrapper } from './theme/ThemeProviderWrapper';
import { SidebarProvider, useSidebar } from '@/contexts/SidebarContext';
import { Sidebar } from './components/sidebar/Sidebar';
import { notFound } from 'next/navigation';
import { ModalProvider } from '@/contexts/ModalContext';
import Modal from './components/shared/Modal';
import { TopBar } from './components/TopBar/TopBar';
import './globals.css';
import { Category, mockCategories } from './data/mockCategories';

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

async function fetchCategories(): Promise<Category[]> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(mockCategories);
		}, 777);
	});
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	if (!metadata.description) {
		throw notFound();
	}

	const categories = await fetchCategories();

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
						<ModalProvider>
							<Container
								className='flex flex-col gap-5 px-0 mx-auto overflow-hidden'
								maxWidth='xl'
								disableGutters>
								<TopBar categories={categories} />
								<Sidebar categories={categories} />
								<Container
									component='main'
									disableGutters
									className='w-full h-full min-h-[50vh] flex flex-col items-center justify-center'
									maxWidth='xl'>
									{children}
								</Container>
								<Footer />
							</Container>
							<Modal />
						</ModalProvider>
					</SidebarProvider>
				</ThemeProviderWrapper>
			</body>
		</html>
	);
}
