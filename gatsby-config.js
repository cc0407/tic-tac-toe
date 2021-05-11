module.exports = {
    siteMetadata: {
        title: `Any name`,
        description: `LOL.`,
        author: `@EricMarcantonio`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [
                    require('tailwindcss')('./tailwind.config.js'),
                ],
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: { tailwind: true },
        },
        
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
