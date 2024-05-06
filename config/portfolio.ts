interface Portfolio {
    title: string,
    desc: string,
    img: string,
    href: string,
    icons: string[]
}

const reachin_app: Portfolio = {
    title: 'Reachin App',
    img: 'reachin.png',
    href: '/work/reachin-app',
    desc: 'reachin_app.description',
    icons: ['javascript', 'typescript-icon', 'ionic-icon', 'vue', 'tailwindcss-icon', 'nuxt-icon'],
}

const reachin_cortex: Portfolio = {
    title: 'Reachin Cortex',
    img: 'reachin-cortex.png',
    href: '/work/reachin-cortex',
    desc: 'cortex.description',
    icons: ['laravel', 'php', 'vue', 'postgresql', 'aws'],
}

const brickhunter: Portfolio = {
    title: 'Brickhunter',
    img: 'brickhunter.png',
    href: '/work/brickhunter',
    desc: 'brickhunter.description',
    icons: ['laravel', 'php', 'vue', 'storyblok-icon', 'alpinejs-icon'],
}

const ups: Portfolio = {
    title: 'UPS+',
    img: 'universal-packing.png',
    href: '/work/ups-plus',
    desc: 'ups.description',
    icons: ['javascript', 'vue', 'tailwindcss-icon', 'sass'],
}

const dispatch_app: Portfolio = {
    title: 'UPS Dispatch App',
    img: 'dispatch-app.png',
    href: '/work/ups-dispatch-app',
    desc: 'dispatch_app.description',
    icons: ['javascript', 'vue', 'laravel', 'cordova', 'android-icon', 'xcode'],
}

export {
    reachin_app,
    reachin_cortex,
    brickhunter,
    ups,
    dispatch_app
}