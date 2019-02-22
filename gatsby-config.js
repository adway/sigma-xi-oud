const path = require('path');

module.exports = {
  siteMetadata: {
    name: 'Predicting OUD using Machine Learning',
    siteUrl: 'oud.adway.io'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        theme: path.join(__dirname, 'src/theme'),
        data: path.join(__dirname, 'src/data.json')
      }
    }
  ]
};
