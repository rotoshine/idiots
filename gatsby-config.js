const path = require('path')

module.exports = {
  siteMetadata: {
    siteName: `이디어츠 - Idiots`,
    siteUrl: `https://idiots.band`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://admin.idiots.band',
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          'albums',
          'lives',
          'home-content',
        ],

        queryLimit: 1000,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-49604777-10',
      },
    },
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        emitSchema: {
          'src/__generated__/gatsby-schema.graphql': true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}
