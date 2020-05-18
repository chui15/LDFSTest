module.exports = {
  siteMetadata: {
    title: "DEM LDFS Test",
    author: "Christie Hui",
    description: "The LDFS Score Test from Delta Epsilon Mu, Inc."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'dem-ldfstest',
        short_name: 'ldfstest',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/demlogo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
