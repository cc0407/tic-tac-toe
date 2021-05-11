module.exports = {
    siteMetadata: {
        title: `Tic Tac Toe`,
        description: `A simple Tic Tac Toe game made in React`,
        author: `@cc0407`,
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
    pathPrefix: "/tic-tac-toe",
};
