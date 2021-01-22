const dotenv = require('dotenv')

if(process.env.NODE_ENV !== 'production'){
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Hanahan Parks Project Blog`,
    description: `This is a super simple blog to publish updates about the parks project`,
    author: `Ellwood`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#263238`,
        theme_color: `#263238`,
        display: `minimal-ui`,
        icon: `src/images/COHLogoLineArt.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'hspdgq1dlxp9',
        accessToken: 'ntMzcQBuertXrj9czCuYmQAGwQeDTHOBz3uzgFqusfA',
        downloadLocal: true,
      },
    },
    // `@contentful/rich-text-react-renderer`


  ],
}
