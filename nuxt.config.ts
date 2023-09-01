// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr:false,
    devtools: { enabled: true },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0',
            title: 'VPE Demos',
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/app-union.png' }
            ],
            script: [
                { src: 'https://player.vpe.naverncp.com/ncplayer.1.1.1.dev.beta.js?access_key=17e49e099ea78c1f1ae159fc1647316c' },
            ],
        },
    },
    modules: ['@nuxthq/ui'],
    colorMode: {
        preference: 'light',
    },
})
