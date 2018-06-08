module.exports = {
  siteMetadata: {
    title: 'Jamstock, a neat stock of jams.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '',
        accessToken: '',
      },
    },
  ],
};
