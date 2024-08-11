'use client';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: '#57886C',
		},
		secondary: {
			main: '#F2F2F2',
		},
		error: {
			main: '#FF312E',
		},
		text: {
			primary: '#3F3C3C',
			secondary: '#141414',
			disabled: '#D9D9D9',
		},
	},
});

export const ThemeProviderWrapper = ({
	children,
}: Readonly<{ children: React.ReactNode }>) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
