// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/image',
        '@nuxt/content',
        '@nuxtjs/i18n',
        'nuxt-icon',
        "@nuxtjs/seo"
    ],
    ogImage: {
        enabled: true
    },
    sitemap: {
        enabled: true
    },
    robots: {
        enabled: true
    },
    seoExperiments: {
        enabled: true
    },
    schemaOrg: {
        enabled: true
    },
    linkChecker: {
        enabled: true
    },
    css: [
        '~/assets/css/main.css'
    ],
    content: {
        documentDriven: true,
        highlight: {
            theme: 'github-dark',
            langs: [
                'js', 'ts', 'html', 'css', 'vue', 'bash', 'json', 'php', 'zsh', 'yaml'
            ]
        }
    },
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
        name: 'Batuhan Korur | Full-stack Developer',
        description: 'Born and raised in London, currently in Istanbul. My technical proficiency centres on Javascript and its popular frameworks and extends to PHP and Laravel.',
        defaultLocale: 'en',
    },
    i18n: {
        baseUrl: 'https://batuhan.io',
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
    devServer: {
        https: {
            key: './server/server.key',
            cert: './server/server.crt',
        },
    },
})