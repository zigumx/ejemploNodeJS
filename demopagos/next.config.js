const withOffline = require('next-offline')
const withOptimizedImages = require('next-optimized-images')
const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')

const nextConfig = {
    target: 'serverless',
    // next-offline options
    workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'https-calls',
                    networkTimeoutSeconds: 15,
                    expiration: {
                        maxEntries: 150,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
                    },
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            },
        ],
    },
    purgeCssEnabled: ({ dev, isServer }) => (!dev && !isServer) // Only enable PurgeCSS for client-side production builds
}

// module.exports = withOffline(
//     withOptimizedImages(
//         withCss(
//             withPurgeCss(nextConfig)
//         )
//     )
// )

module.exports = withOffline(
    withOptimizedImages(
        nextConfig
    )
)
