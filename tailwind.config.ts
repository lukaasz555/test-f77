import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#57886C',
				header: '#141414',
				text: '#3F3C3C',
				border: '#D9D9D9',
				error: '#FF312E',
				background: '#F9F9F9',
				warning: '', // TODO
				success: '', // TODO - maybe primary?
				info: '', // TODO
			},
			fontFamily: {
				heading: ['Poppins', 'sans-serif'],
				body: ['Nunito', 'sans-serif'],
			},
			fontSize: {
				'2xs': '0.563rem', // 9px
				'1xs': '0.688rem', // 11px
				xs: '0.75rem', // 12px
				'2sm': '0.813rem', // 13px
				sm: '0.875rem', // 14px
				base: '1rem', // 16px
				lg: '1.125rem', // 18px
				xl: '1.5rem', // 24px
				'2xl': '1.75rem', // 28px
			},
			letterSpacing: {
				normal: '0',
				wide: '0.05em',
				wider: '0.1em',
				widest: '0.15em',
			},
			borderRadius: {
				none: '0',
				sm: '4px',
				md: '8px',
				lg: '12px',
				xl: '15px',
				'2xl': '25px',
				rounded: '50%',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
		},
	},
	plugins: [],
};
export default config;
