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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-49604777-10',
      },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
  ],
}
