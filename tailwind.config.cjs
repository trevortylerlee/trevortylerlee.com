/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 6s linear infinite',
			},
			transitionDelay: {
				'3000': '3000ms',
			},
			fontFamily: {
				sans: [
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Helvetica',
					'Arial',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
				],
			},
			colors: {
				gray: {
					1: "rgb(var(--gray-1) / <alpha-value>)",
					2: "rgb(var(--gray-2) / <alpha-value>)",
					3: "rgb(var(--gray-3) / <alpha-value>)",
					4: "rgb(var(--gray-4) / <alpha-value>)",
					5: "rgb(var(--gray-5) / <alpha-value>)",
					6: "rgb(var(--gray-6) / <alpha-value>)",
					7: "rgb(var(--gray-7) / <alpha-value>)",
					8: "rgb(var(--gray-8) / <alpha-value>)",
					9: "rgb(var(--gray-9) / <alpha-value>)",
					10: "rgb(var(--gray-10) / <alpha-value>)",
					11: "rgb(var(--gray-11) / <alpha-value>)",
				},
				accent: {
					red: "rgb(var(--red) / <alpha-value>)",
					orange: "rgb(var(--orange) / <alpha-value>)",
					yellow: "rgb(var(--yellow) / <alpha-value>)",
					green: "rgb(var(--green) / <alpha-value>)",
					mint: "rgb(var(--mint) / <alpha-value>)",
					teal: "rgb(var(--teal) / <alpha-value>)",
					cyan: "rgb(var(--cyan) / <alpha-value>)",
					blue: "rgb(var(--blue) / <alpha-value>)",
					indigo: "rgb(var(--indigo) / <alpha-value>)",
					purple: "rgb(var(--purple) / <alpha-value>)",
					pink: "rgb(var(--pink) / <alpha-value>)",
					brown: "rgb(var(--brown) / <alpha-value>)",
				},
				background: "rgb(var(--background) / <alpha-value>)",
				content: "rgb(var(--content) / <alpha-value>)",
				primary: "rgb(var(--primary) / <alpha-value>)",
			}
		},
	},
	plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
