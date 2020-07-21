module.exports = {
  siteMetadata: {
    title: `devtops.ir || learning computer science contents`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@mojaeb`,
    backendServer: 'http://backend.devtops.ir/'
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // {
    //   resolve: 'gatsby-plugin-load-script',
    //   options: {
    //     src: 'https://unpkg.com/ionicons@5.0.0/dist/ionicons.js', // Change to the script filename
    //   },
    // },



    // gatsby wordpress sourcing
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "backend.devtops.ir",
        protocol: "http",
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
        useACF: true
      },
    },
  ],
}
