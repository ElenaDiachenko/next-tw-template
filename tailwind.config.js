/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
	black: twColors.black,
	white: twColors.white,
	accent: '#4c83c3',
	bgAccent: '#f5f5f5',
	primary: '#333333',
	secondary: '#666666'
}
module.exports = {
	content: [
		// "./app/**/*.{js,ts,jsx,tsx}",
		// "./pages/**/*.{js,ts,jsx,tsx}",
		// "./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		colors,
		extend: {
			keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				opacity: 'animationOpacity .5s easy-in-out',
				scaleIn: 'scaleIn .35s easy-in-out'
			}
		}
	},
	plugins: []
}
