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
			'xxs': ['12px', {
				lineHeight: '1.4em',
			}],
			'xs': ['13px', {
				lineHeight: '1.35em',
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
			'xl': ['20px', {
				lineHeight: '1.4em',
			}],
			'2xl': ['23px', {
				lineHeight: '1.25em',
			}],
			'3xl': ['27px', {
				lineHeight: '1.25em',
			}],
			'4xl': ['31px', {
				lineHeight: '1.2em',
			}],
			'5xl': ['36px', {
				lineHeight: '1.2em',
			}],
		},
		extend: {
			colors: {
				black: '#0a0b0d',
				light: '#f7f9fc',
				accent: '#73a2ff',
				carbon: '#2a2b33',
				grey: {
					500: '#626373',
					400: '#9a9aa6',
					300: '#b6b6bf',
					200: '#ced0d9',
					100: '#e6e8f2',
				},
				code: {
					keyword: '#F97583',
					label: '#79B8FF',
					string: '#9CD7B9',
				},
			},
		},
	},
	plugins: [],
}
