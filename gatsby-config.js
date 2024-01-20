/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Belbyte Designs`,
    description: `Leading providers of website services in Belize, offering a dynamic blend of creativity and technical expertise. Our team of skilled freelancers excels in crafting visually stunning websites, providing unbeatable hosting solutions, implementing effective SEO strategies, and offering reliable IT outsourcing services.`,
    author: `Jose Urbina`,
    siteUrl: `https://belbytedesigns.com`,
    keywords: `Belize web design, Website development, bel, belize cheap websites, free websites, website providers in belize, best websites in belize, Hosting services in belize, belize Hosting services, best tourist websites in belize, tourism websites in belize, tourism in belize, Freelance web designers, Website maintenance in belize`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {                             
      resolve: `gatsby-plugin-google-gtag`,
      options: {
          trackingIds: ['G-MZ64N4Y355'],
          pluginConfig: {
            head: true
          },
        },
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/BelByte-Logo---color-.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
