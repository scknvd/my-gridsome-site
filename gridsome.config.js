// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Portfolio - NWA',
  plugins: [ {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: process.env.GRIDSOME_API_URL,
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['project', 'journal'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }],
  port: 8090,
  siteDescription: 'Creative technologist',
  chainWebpack: config => {
    config.module
    .rule("vue")
    .use("vue-svg-inline-loader")
    .loader("vue-svg-inline-loader")
    .options({ /* ... */ });
  }
}
