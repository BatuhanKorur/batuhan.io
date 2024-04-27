// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/eslint',
        'nuxt-icon'
    ],
    css: [
        '~/assets/css/main.css'
    ],
    app: {
        head: {
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            ]
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    devtools: {enabled: true},
    devServer: {
        https: {
            key: './server/server.key',
            cert: './server/server.crt',
        },
    },
})