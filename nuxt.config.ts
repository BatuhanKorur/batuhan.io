// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    'nuxt-icon',
  ],
  css: [
    '~/assets/main.css'
  ],
  build: { 
    transpile: ["shiki"],
  },
  app: {
    head: {
      meta: [{
          charset: 'utf-8'
        }, {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }, {
          name: 'theme-color',
          content: '#0a0b0d'
        }
      ],
      link: [{
          rel: 'icon',
          href: 'favicon.ico',
          sizes: '48x48'
        }, {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon/logo.svg',
        }, {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png',
        }, {
          rel: 'manifest',
          href: '/favicon/site.webmanifest',
        },
      ]
    }
  },
  site: {
    url: 'https://batuhan.io',
    name: 'Batuhan Korur | Full-stack Developer',
    description: 'Full-stack JavaScript developer specializing in frameworks like React, Vue, Next and Node.js. Currently based in Istanbul and originally from London, my technical expertise also extends to PHP and the Laravel.'
  },

  robots: {
    sitemap: [
      '/en-sitemap.xml',
      '/tr-sitemap.xml'
    ]
  },

  schemaOrg: {
    identity: {
      type: 'Person',
      name: 'Batuhan Korur',
      url: 'https://batuhan.io',
      logo: 'https://batuhan.io/logo.png',
      description: 'Full-stack Javascript Developer',
      sameAs: [
        'https://github.com/BatuhanKorur',
        'https://www.linkedin.com/in/batuhankorur/',
        'https://www.instagram.com/batuhan.korur/',
        'https://www.facebook.com/batuhankorur',
      ]
    }
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
  content: {
    documentDriven: true,
    highlight: {
      theme: 'github-dark',
      langs: [
        'js', 'ts', 'html', 'css', 'vue', 'bash', 'json', 'php', 'zsh', 'yaml'
      ]
    }
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
    port: 3050,
    https: {
      key: './server/server.key',
      cert: './server/server.crt',
    },
  },
  compatibilityDate: '2024-08-21',
})
