module.exports = {
  siteMetadata: {
    title: `Res med Dennis Westerberg`,
    description: `Kombinera en fördjupning i de tre principerna med en avkopplande storstadssemester. Vi möts i underbara Barcelona, och spenderar mycket tid tillsammans. Ett unikt tillfälle att utforska välmåendet och att uppleva balans och sinnesnärvaro som håller i sig över tid.`,
    defaultImage: "/images/dennis-westerberg-barcelona-social.jpg",
    author: `@nickwallentin`,
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
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Barcelona med Dennis Westerberg`,
        short_name: `Barcelona`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/assets/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
