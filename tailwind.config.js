/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		fontFamily: {
			sans: ['HelveticaNow', 'Arial', 'sans-serif'],
			mono: ['JetBrains Mono', 'sans-serif'],
		},
		fontSize: {
			'xs': ['13px', {
				lineHeight: '1.4em',
			}],
			'sm': ['14px', {
				lineHeight: '1.4em',
			}],
			'base': ['15px', {
				lineHeight: '1.4em',
			}],
			'md': ['16px', {
				lineHeight: '1.4em',
			}],
			'lg': ['18px', {
				lineHeight: '1.4em',
			}],
			'xl': ['21px', {
				lineHeight: '1.4em',
			}],
			'2xl': ['24px', {
				lineHeight: '1.4em',
			}],
		},
		extend: {
			colors: {
				black: '#0a0b0d',
				light: '#f7f9fc',
				accent: '#73a2ff',
				carbon: '#2a2b33',
				grey: {
					500: '#37394a',
					400: '#69697a',
					300: '#b3b3c4',
					200: '#cccfde',
					100: '#e1e4f0',
				},
				code: {
					line: '#828C95',
					keyword: '#FF7774',
					variable: '#72BEFC',
					string: '#9ED2F9',
					comment: '#59626A',
					operator: '#E5ECF2',
				},
			},
		},
	},
	plugins: [],
}
