import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		borderRadius: {
			sm: '0.125rem',
			md: '0.375rem',
			lg: '0.5rem',
			xl: '0.75rem',
			'2xl': '1rem',
			none: '0',
		},
		screens: {
			xs: '0px',
			sm: '600px',
			md: '900px',
			lg: '1200px',
			xl: '1536px',
		},
	},
	plugins: [],
};
export default config;
