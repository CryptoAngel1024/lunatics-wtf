module.exports = {
  siteMetadata: {
    title: `Lunatics`,
    description: `Greed is Good. 9,999 NFTs on Ethereum.`,
    author: `Do Kwon`,
    siteUrl: `https://www.lunatics.wtf/`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-anchor-links",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    'gatsby-plugin-postcss',
    "gatsby-plugin-anchor-links",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/favicon.png"
      },
    },
  ]
};