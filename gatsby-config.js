module.exports = {
  siteMetadata: {
    title: 'Speer : Make sales relevant, not loud',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    'gatsby-transformer-remark'
  ],
}
