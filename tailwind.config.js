/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				lg: '1124px',
				xl: '1124px',
				'2xl': '1124px',
			},
		},
		extend: {
			colors: {
				'Robo-darkBlue': '#161735',
				'Robo-lightBlue': '#1b6ef0',
			},
		},
	},
	plugins: [],
};

