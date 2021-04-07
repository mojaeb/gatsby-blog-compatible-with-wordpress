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
        name: `devtops.ir`,
        short_name: `devtops`,
        start_url: `/`,
        background_color: `#0a0eff`,
        theme_color: `#0a0eff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
      color: `#55BFC7`,
        showSpinner: true,
        // trickle: false,
        // minimum: 0.4,
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
        protocol: "https",
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
        useACF: true
      },
    },
  ],
}
