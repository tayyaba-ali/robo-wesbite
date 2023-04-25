/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['*'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			colors: {
				'Robo-darkBlue': '#161735',
				'Robo-lightBlue': '#1b6ef0',
				'Robo-blue': '#00d0f5',
			},
			backgroundImage: {
				'Robo-bg': 'linear-gradient(to right, #237ece, #051b88',
			},
		},
		fontFamily: {
			Saira: 'Saira,Manrope',
		},
	},

	plugins: [],
};

