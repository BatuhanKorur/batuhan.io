// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/image',
        '@nuxtjs/i18n',
        '@nuxtjs/seo',
        'nuxt-gtag',
        'nuxt-icon',
    ],
    css: [
        '~/assets/css/main.css'
    ],
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        },
        head: {
            meta: [
                {
                    charset: 'utf-8'
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                },
                {
                    name: 'theme-color',
                    content: '#0a0b0d'
                }
            ],
            link: [
                {
                    rel: 'icon',
                    href: 'favicon.ico',
                    sizes: '48x48'
                },
                {
                    rel: 'icon',
                    type: 'image/svg+xml',
                    href: '/favicon/logo.svg',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/favicon/apple-touch-icon.png',
                },
                {
                    rel: 'manifest',
                    href: '/favicon/site.webmanifest',
                },
            ]
        }
    },
    site: {
        url: 'https://batuhan.io',
        name: 'Batuhan Korur | Front-end Engineer',
        description: 'Born and raised in London, currently in Istanbul. My technical proficiency centres on Javascript and its popular frameworks and extends to PHP and Laravel.'
    },
    schemaOrg: {
        identity: {
            type: 'Person',
            name: 'Batuhan Korur',
            url: 'https://batuhan.io',
            logo: 'https://batuhan.io/logo.png',
            description: 'Front-end Engineer from Istanbul',
            sameAs: [
                'https://github.com/BatuhanKorur',
                'https://www.linkedin.com/in/batuhankorur/',
                'https://www.instagram.com/batuhan.korur/',
                'https://www.facebook.com/batuhankorur',
            ]
        }
    },
    i18n: {
        defaultLocale: 'en',
        langDir: 'lang',
        locales: [
            {
                code: 'en',
                file: 'en.yaml',
            },
            {
                code: 'tr',
                file: 'tr.yaml'
            }
        ],
    },
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        },
    },
    devServer: {
        https: {
            key: './server/server.key',
            cert: './server/server.crt',
        },
    },
})