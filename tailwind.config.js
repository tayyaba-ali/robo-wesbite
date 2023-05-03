/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1200px',
		},
		extend: {
			colors: {
				'Robo-darkBlue': '#161735',
				'Robo-lightBlue': '#1b6ef0',
				'Robo-blue': '#00d0f5',
				'Robo-gray': '#2e2e2e',
				'gradient-right': '#237ece',
				'gradient-left': '#051b88',
				'img-bg': 'rgba(0, 0, 0, 0.2)',
				'card-color': '#3685d1',
				'icon-bg': '#6da5dc',
				'card-border': '#a1bee3',
				'arrow-bg': '#ffffff',
			},
			boxShadow: {
				'robo-shadow': '0 0 20px 3px rgba(0, 0, 0, 0.05)',
			},
		},
		fontFamily: {
			Saira: 'Saira,Manrope',
			Manrope: 'Manrope',
		},
	},

	plugins: [require('tw-elements/dist/plugin.cjs')],
	darkMode: 'class',
};

;