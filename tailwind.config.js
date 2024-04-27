/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        fontFamily: {
            sans: ['HelveticaNow', 'Arial', 'sans-serif'],
            display: ['Oceanwide', 'sans-serif'],
        },
        fontSize: {
            base: ['15px', {
                lineHeight: '1.5em',
                letterSpacing: '0.01px'
            }],
            md: ['18px', {
                lineHeight: '1.4em'
            }],
            lg: ['21px', {
                lineHeight: '1.4em'
            }]
        },
        extend: {
            colors: {
                black: '#0A0A0A',
                light: '#F7FAFC'
            }
        },
    },
    plugins: [],
}

