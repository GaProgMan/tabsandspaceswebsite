require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Photon',
    author: 'Hunter Chang',
    description: 'A Gatsby.js Starter based on Photon by HTML5 UP',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/play-logo.svg', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        features: {
          auth: false,
          database: false,
          firestore: false,
          storage: false,
          messaging: false,
          functions: false,
          performance: false,
          analytics: true,
        },
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
