const path = require('path')

module.exports = {
  siteMetadata: {
    title: `personal-web-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-resolve-src", 
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: { 
        "@components": path.resolve(__dirname, 'src/components'),
        "@assets": path.resolve(__dirname, 'src/assets')
      },
      extensions: [
        "js",
      ],
    }
  },]
}