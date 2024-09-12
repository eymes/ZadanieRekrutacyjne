/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto Flex", "sans-serif"],
				roboto: ["Roboto Condensed", "sans-serif"],
				bebas: ["Bebas Neue", "sans-serif"],
			},
			colors: {
				blue: "hsla(223, 100%, 50%, 1)",
				darkblue: "hsla(250, 100%, 50%, 1)",
				whitebg: "hsla(0, 0%, 97%, 1)",
				dark: "hsla(0, 0%, 16%, 1)",
			},
			container: {
				center: true,
			},
		},
		plugins: [],
	},
};
