interface Link {
    label: string,
    href: string,
}

const links: Link[] = [
    {
        label: 'about',
        href: '/about'
    },
    {
        label: 'portfolio',
        href: '/portfolio'
    },
    {
        label: 'blog',
        href: '/blog'
    },
    {
        label: 'contact',
        href: '/contact'
    },
]

interface Social {
    [key: string]: {
        icon: string,
        url: string,
        url_pretty: string
    }
}


const socials: Social = {
    github: {
        icon: 'ri:github-fill',
        url: 'https://github.com/BatuhanKorur',
        url_pretty: 'github.com/BatuhanKorur'
    },
    linkedin: {
        icon: 'ri:linkedin-box-fill',
        url: 'https://www.linkedin.com/in/batuhankorur/',
        url_pretty: 'linkedin.com/in/batuhankorur'
    },
    instagram: {
        icon: 'ri:instagram-fill',
        url: 'https://www.instagram.com/batuhan.korur/',
        url_pretty: 'instagram.com/batuhan.korur'
    }
}

export {
    links,
    socials
}